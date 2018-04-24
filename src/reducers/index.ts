// 'use strict';
import { combineReducers } from 'redux';
import { LoginState, loginHandler } from "../reducers/loginReducer";
import navigatorReducer from '../reducers/navigatorReducer';
import { fetchGamesHandler, GameState, fetchGameDetailHandler } from '../reducers/gameReducer';
import { FeedBackState, feedbackHandler } from '../reducers/feedbackReducer';
import { fetchNewsHandler, NewsState } from '../reducers/newsReducer';
import { fetchTeamsRankHandler, BasicTeamInfo } from '../reducers/teamReducer';

const rootReducer = combineReducers({
  loginHandler,
  fetchGamesHandler,
  feedbackHandler,
  fetchNewsHandler,
  fetchTeamsRankHandler,
  fetchGameDetailHandler,
  navigatorReducer
});

export default rootReducer;

export interface allReducer {
  login: LoginState,
  game: GameState,
  feedback: FeedBackState,
  news: NewsState,
  teamRankBasic: BasicTeamInfo
} 