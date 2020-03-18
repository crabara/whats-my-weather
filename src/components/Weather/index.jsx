/* eslint-disable max-len */
/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const Weather = ({ weather: { temp = '', feels_like = '', temp_min = '', temp_max = '', pressure = '', humidity = '' } = '', name = 'Error' }) => (
  <>
    {name === 'Error' ? (<div>City Not Found</div>)
      : (
        <>
          <h1>{name}</h1>
          <ul>
            <li>
              Temp:
              {temp}
            </li>
            <li>
              Feels Like:
              {feels_like}
            </li>
            <li>
              Low Temp:
              {temp_min}
            </li>
            <li>
              High Temp:
              {temp_max}
            </li>
            <li>
              Air Pressure:
              {pressure}
            </li>
            <li>
              Humidity:
              {humidity}
            </li>
          </ul>
        </>
      )}
  </>
);

Weather.propTypes = {
  weather: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
};
export default Weather;
