// 'use strict';
import { combineReducers } from 'redux';
import { LoginState, loginHandler } from "../reducers/loginReducer";
import navigatorReducer from '../reducers/navigatorReducer';
import { fetchGamesHandler, GameState } from '../reducers/gameReducer';
import { FeedBackState, feedbackHandler } from '../reducers/feedbackReducer';

const rootReducer = combineReducers({
  loginHandler,
  fetchGamesHandler,
  feedbackHandler,
  navigatorReducer
});

export default rootReducer;

export interface allReducer {
  login: LoginState,
  game: GameState,
  feedback: FeedBackState
} 