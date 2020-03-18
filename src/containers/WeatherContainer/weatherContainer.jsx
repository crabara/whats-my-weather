import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { ActionCreators as WeatherActions } from 'ducks/weather.duck';
import Weather from 'components/Weather';
import Location from 'components/Location';

import './style.scss';

const WeatherContainer = ({ weather, weatherActions }) => {
  const getWeather = (location) => {
    // Do magic with location
    weatherActions.getWeather(location);
  };

  const handleError = (error) => {
    if (error.code) {
      console.log(error.code);
    }
  };

  const inputHandler = _.debounce((zipcode) => {
    getWeather(zipcode);
  }, 1000);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(getWeather, handleError);
  }, []);

  return (
    <>
      <div className="contentContainer">
        <div className="content">
          { !_.isEmpty(weather)
            ? (
              <Weather
                weather={weather.main}
                name={weather.name}
              />
            )
            : null}
        </div>
      </div>
      <Location inputHandler={inputHandler}/>
    </>
  );
};

WeatherContainer.propTypes = {
  weather: PropTypes.object.isRequired,
  weatherActions: PropTypes.object.isRequired,
};

const mapStateToProps = ({ weather }) => ({
  ...weather,
});

const mapDispatchToProps = dispatch => ({
  weatherActions: bindActionCreators(WeatherActions, dispatch),
  dispatch,
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(WeatherContainer));
