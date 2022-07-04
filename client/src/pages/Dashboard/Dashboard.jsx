import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { useAuth } from '../../utils/useAuth';
import { Footer } from '../../components';
import styles from './Dashboard.module.scss';

export const Dashboard = ({ code }) => {
  const { t } = useTranslation();
  const accessToken = useAuth(code);
  const [search, setSearch] = useState('');

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
      </div>
      <Footer />
    </>
  );
};
