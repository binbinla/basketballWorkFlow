// 'user strict';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/index';

const middlewares = [thunk]

export default function configureStore(initialState?: any) {
  const store = compose(applyMiddleware(...middlewares))(createStore)(rootReducer, initialState);
  return store;
}