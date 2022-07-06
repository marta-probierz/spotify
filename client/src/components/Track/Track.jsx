import React from 'react';

import styles from './Track.module.scss';

export const Track = ({ track, chooseTrack }) => {
  const handlePlay = () => chooseTrack(track);

  return (
    <div className={styles.container} onClick={handlePlay}>
      <img src={track.albumUrl} alt="albumImage" className={styles.img} />
      <div className={styles.songData}>
        <div>{track.title}</div>
        <div className={styles.artist}>{track.artist}</div>
      </div>
      <div>{track.duration}</div>
    </div>
  );
};
