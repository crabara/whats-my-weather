import React from 'react';
import Videobanner from 'components/VideoBanner';
import WeatherContainer from 'containers/WeatherContainer/weatherContainer';

import './style.scss';

const Home = () => (
  <div className="container">
    <>
      <Videobanner/>
      <WeatherContainer/>
    </>
  </div>
);

export default Home;
