import { combineReducers } from 'redux';

import weather from './ducks/weather.duck';

const rootReducer = combineReducers({
  weather,
});

export default rootReducer;
