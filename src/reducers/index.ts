// 'use strict';
import { combineReducers } from 'redux';
import loginHandler, { LoginState } from "../reducers/loginReducer";
import navigatorReducer from '../reducers/navigatorReducer';
import { fetchGamesHandler, GameState } from '../reducers/gameReducer';


const rootReducer = combineReducers({
  loginHandler,
  fetchGamesHandler,
  navigatorReducer
});

export default rootReducer;

export interface allReducer {
  login: LoginState,
  game: GameState
} 