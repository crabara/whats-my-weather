import {
  fetchApi, freezeObject, mkAction, STAGE, buildGetWeatherQuery,
} from '../utils';

export const TYPES = freezeObject(
  false,
  'GET_WEATHER',
  'GET_WEATHER_SUCCESS',
  'GET_WEATHER_ERROR',
);

const ACTIONS = Object.freeze({
  getWeather: coords => mkAction(TYPES.GET_WEATHER, { coords }),
  getWeatherSuccess: data => mkAction(TYPES.GET_WEATHER_SUCCESS, { data }),
  getWeatherError: error => mkAction(TYPES.GET_WEATHER_ERROR, { error }),
});

export const ActionCreators = Object.freeze({
  getWeather: (location) => async dispatch => {
    // Dispatch action of fetching the weather
    dispatch(ACTIONS.getWeather(location));

    return fetchApi('https://api.openweathermap.org/data/2.5/weather', buildGetWeatherQuery(location))
      .then(data => {
        // Dispatch success action
        dispatch(ACTIONS.getWeatherSuccess(data));
      })
      .catch(error => {
        // Dispatch error action
        dispatch(ACTIONS.getWeatherError(error));
      });
  },
});

const initialState = {
  WEATHER_STAGE: STAGE.READY,
  weather: {},
  coords: {},
  error: [],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case TYPES.GET_WEATHER:
      return {
        ...state,
        WEATHER_STAGE: STAGE.LOADING,
        coords: payload.coords,
      };
    case TYPES.GET_WEATHER_SUCCESS:
      return {
        ...state,
        WEATHER_STAGE: STAGE.DONE,
        weather: payload.data,
      };
    case TYPES.GET_WEATHER_ERROR:
      return {
        ...state,
        WEATHER_STAGE: STAGE.ERROR,
        error: payload.error,
      };
    default:
      return state;
  }
};

export default reducer;
