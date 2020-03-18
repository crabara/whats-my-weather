import React from 'react';
import { storiesOf } from '@storybook/react';

import Weather from '../src/components/Weather';

const weather = {
  main:
  { temp: 41.94, feels_like: 37.08, temp_min: 39, temp_max: 45, pressure: 1021, humidity: 93 },
  name: 'Ottawa Hills',
};
storiesOf('Home Page', module)
  .add('Renders Home Page', () => {
    return (
      <Weather
        weather={weather.main}
        name={weather.name}
      />
    );
  });
