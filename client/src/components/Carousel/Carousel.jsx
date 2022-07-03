import React from 'react';
import Slider from 'infinite-react-carousel';
import { useTranslation } from 'react-i18next';

import styles from './Carousel.module.scss';
import login from './Media/login.png';
import play from './Media/play.png';
import enjoy from './Media/enjoy.png';

export const Carousel = () => {
  const { t } = useTranslation();
  const settings = {
    autoplay: true,
    autoplaySpeed: 4000,
    dots: true,
    virtualList: true,
    duration: 20,
    arrows: true,
    wheel: true,
  };
  return (
    <div className={styles.container}>
      <Slider {...settings}>
        <div>
          <img src={login} className={styles.slide_img} alt="login" />
          <span className={styles.text}>{t`carousel.login`}</span>
        </div>
        <div>
          <img src={play} className={styles.slide_img} alt="play" />
          <span className={styles.text}>{t`carousel.play`}</span>
        </div>
        <div>
          <img src={enjoy} className={styles.slide_img} alt="enjoy" />
          <span className={styles.text}>{t`carousel.enjoy`}</span>
        </div>
      </Slider>
    </div>
  );
};
