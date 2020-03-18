import {
  ActionCreators as WeatherActions,
  TYPES,
} from '../weather.duck';
import expectedDispatchedActions from './duck.test.helper';


describe('src::ducks::weather.duck', () => {
  const getWeatherAction = {
    type: TYPES.GET_WEATHER,
    payload: {},
  };
  const getWeatherSuccessAction = {
    type: TYPES.GET_WEATHER_SUCCESS,
    payload: {
      data: [],
    },
  };


  describe('Testing Async Actions for weather duck', () => {
    test.skip('dispatch getWeather creates GET_WEATHER and GET_WEATHER_SUCCESS actions', async () => {
      const action = WeatherActions.getWeather();
      const dispatchedActions = [getWeatherAction, getWeatherSuccessAction];

      await expectedDispatchedActions(action, dispatchedActions);
    });
  });
});
