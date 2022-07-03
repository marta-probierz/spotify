import React from 'react';

import styles from './Languages.module.scss';
import pl from '../../assets/pl.svg';
import us from '../../assets/us.svg';

export const Languages = ({ onClickUS, onClickPL }) => {
  return (
    <div className={styles.lng}>
      <button onClick={onClickUS}>
        <img className={styles.btn} src={us} alt="usFlag" />
      </button>
      <button onClick={onClickPL}>
        <img className={styles.btn} src={pl} alt="plFlag" />
      </button>
    </div>
  );
};
