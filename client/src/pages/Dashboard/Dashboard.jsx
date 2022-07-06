import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import SpotifyWebApi from 'spotify-web-api-node';

import { useAuth } from '../../utils/useAuth';
import { Footer, Track, Player } from '../../components';
import styles from './Dashboard.module.scss';

const spotifyApi = new SpotifyWebApi({
  clientId: 'cfd8c73925254678879690bde1a4903c',
});

export const Dashboard = ({ code }) => {
  const { t } = useTranslation();
  const accessToken = useAuth(code);
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [playingTrack, setPlayingTrack] = useState();

  const chooseTrack = (track) => {
    setPlayingTrack(track);
    setSearch('');
  };

  useEffect(() => {
    if (!accessToken) return;
    spotifyApi.setAccessToken(accessToken);
  }, [accessToken]);

  useEffect(() => {
    if (!search) return setSearchResults([]);
    if (!accessToken) return;

    let cancel = false;

    spotifyApi.searchTracks(search).then((res) => {
      if (cancel) return;

      setSearchResults(
        res.body.tracks.items.map((e) => {
          const min = Math.floor((e.duration_ms / 1000 / 60) << 0);
          const sec = Math.floor((e.duration_ms / 1000) % 60);
          const dur = `${min}:${(sec < 10 ? '0' : '') + sec}`;

          const smallImg = e.album.images.reduce((smallest, image) => {
            if (image.height < smallest.height) return image;
            return smallest;
          }, e.album.images[0]);

          return {
            artist: e.artists[0].name,
            title: e.name,
            uri: e.uri,
            albumUrl: smallImg.url,
            duration: dur,
          };
        }),
      );
    });

    return () => (cancel = true);
  }, [search, accessToken]);

  return (
    <>
      <div className={styles.container}>
        <input
          type="search"
          placeholder={t`dashboard.search`}
          className={styles.searchBar}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className={styles.songs}>
          {searchResults.map((track) => (
            <Track key={track.uri} track={track} chooseTrack={chooseTrack} />
          ))}
        </div>
        <div className={styles.player}>
          <Player accessToken={accessToken} trackUri={playingTrack?.uri} />
        </div>
      </div>
      <Footer />
    </>
  );
};
