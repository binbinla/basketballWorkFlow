// 'use strict';
import { combineReducers } from 'redux';
import loginIn, { loginState } from "../reducers/loginReducer";

const rootReducer = combineReducers({
  loginIn
});

export default rootReducer;

export interface allReducer {
  login: loginState
} 