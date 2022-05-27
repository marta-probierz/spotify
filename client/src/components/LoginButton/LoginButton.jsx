import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './LoginButton.module.css';

const AUTH_URL =
  'https://accounts.spotify.com/authorize?client_id=cfd8c73925254678879690bde1a4903c&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state';

export const LoginButton = () => {
  const { t } = useTranslation();
  return (
    <>
      <button className={styles.button}>
        <a href={AUTH_URL} className={styles.text}>
          {t`home.loginButton`}
        </a>
      </button>
    </>
  );
};
