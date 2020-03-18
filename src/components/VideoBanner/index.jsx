import React from 'react';
import weatherVideo from '../../assets/videos/partlyCloudy.mp4';

import './style.scss';

const VideoBanner = () => (
  <video autoPlay="autoplay" muted loop id="myVideo">
    <source src={weatherVideo} type="video/mp4"/>
  </video>

);

export default VideoBanner;
