import React from 'react';
import { useTranslation } from 'react-i18next';

import styles from './Login.module.scss';
import { Button } from '../../components';

const AUTH_URL =
  'https://accounts.spotify.com/authorize?client_id=cfd8c73925254678879690bde1a4903c&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state';

export const Login = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.container}>
      <Button url={AUTH_URL} label={t`home.loginButton`} />
    </div>
  );
};
