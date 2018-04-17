// 'use strict';
import { combineReducers } from 'redux';
import { LoginState, loginHandler } from "../reducers/loginReducer";
import navigatorReducer from '../reducers/navigatorReducer';
import { fetchGamesHandler, GameState } from '../reducers/gameReducer';
import { FeedBackState, feedbackHandler } from '../reducers/feedbackReducer';
import { fetchNewsHandler, NewsState } from '../reducers/newsReducer';

const rootReducer = combineReducers({
  loginHandler,
  fetchGamesHandler,
  feedbackHandler,
  fetchNewsHandler,
  navigatorReducer
});

export default rootReducer;

export interface allReducer {
  login: LoginState,
  game: GameState,
  feedback: FeedBackState,
  news: NewsState
} 