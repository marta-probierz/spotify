import React from 'react';
import styles from './Button.module.css';

export const Button = ({ url, label }) => {
  return (
    <>
      <button className={styles.button}>
        <a href={url} className={styles.text}>
          {label}
        </a>
      </button>
    </>
  );
};
