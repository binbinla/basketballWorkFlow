// 'use strict';
import { combineReducers } from 'redux';
import loginIn, { loginState } from "../reducers/loginReducer";
import navigatorReducer from '../reducers/navigatorReducer';

const rootReducer = combineReducers({
  loginIn,
  navigatorReducer
});

export default rootReducer;

export interface allReducer {
  login: loginState
} 