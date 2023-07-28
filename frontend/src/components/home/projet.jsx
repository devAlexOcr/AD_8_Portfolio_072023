import React from 'react';
import Swiper from 'react-id-swiper';

import '../../../node_modules/swiper/swiper.scss';

const CubeEffect = () => {
    const params = {
      effect: 'cube',
      grabCursor: true,
      cubeEffect: {
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
      },
      pagination: {
        el: '.swiper-pagination',
      }
    }
    return (
      <Swiper {...params}>
        <div style={{ backgroundImage:'url(../../assets/images/frontend/src/assets/images/branding_home.png)' }} />
        <div style={{ backgroundImage:'url(http://lorempixel.com/600/600/nature/2)' }} />
        <div style={{ backgroundImage:'url(http://lorempixel.com/600/600/nature/3)' }} />
        <div style={{ backgroundImage:'url(http://lorempixel.com/600/600/nature/4)' }} />
        <div style={{ backgroundImage:'url(http://lorempixel.com/600/600/nature/5)' }} />
      </Swiper>
    )
  };
  export default CubeEffect;
    