import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './rootReducer';

const middleware = [thunk];

const composeEnhancers = window._REDUX_DEVTOOLD_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ serialize: true })
  : compose;

const configureStore = initialState => createStore(
  rootReducer,
  initialState,
  composeEnhancers(applyMiddleware(...middleware)),
);

export default configureStore;
