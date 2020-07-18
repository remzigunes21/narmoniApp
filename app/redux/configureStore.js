import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';
import productReducer from './product/reducer';
import globalReducer from './global/reducer';
import searchReducer from './search/reducer';
import Saga from './saga/Saga';

const combinedReducer = combineReducers({
  productReducer: productReducer,
  global: globalReducer,
  search: searchReducer,
});

const rootReducer = (state, action) => {
  if (action.type === 'RESET_APP') {
    state = undefined;
  }
  return combinedReducer(state, action);
};

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware)),
);

sagaMiddleware.run(Saga);

export default store;
