import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';

import authReducer from './auth/reducer';
import globalReducer from './global/reducer';
import searchReducer from './search/reducer';

import productReducer from './product/reducer';
import filterReducer from './filter/reducer';

import nrmSaga from './saga/nrmSaga';

const combinedReducer = combineReducers({
  global: globalReducer,
  auth: authReducer,
  search: searchReducer,

  product: productReducer,
  filter: filterReducer,
});

const rootReducer = (state, action) => {
  if (action.type === 'RESET_APP') {
    state = undefined;
  }
  return combinedReducer(state, action);
};

const sagaMiddleware = createSagaMiddleware();

//FOR DEVELOPMENT WE ARE USING RN DEBUGGER
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware)),
);

//const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(nrmSaga);

export default store;
