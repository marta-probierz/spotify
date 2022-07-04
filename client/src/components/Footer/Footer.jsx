import React from 'react';

import styles from './Footer.module.scss';
import logo from '../../assets/logo.png'

export const Footer = () => {
  return (
    <div className={styles.container}>
      <span className={styles.text}>Powered by:</span>
      <img src={logo} className={styles.logo_img} alt="login" />
    </div>
  )
}
