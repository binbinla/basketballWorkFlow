// 'use strict';
import { combineReducers } from 'redux';
import { LoginState, loginHandler } from "../reducers/loginReducer";
import navigatorReducer from '../reducers/navigatorReducer';
import { fetchGamesHandler, GameState, fetchGameDetailHandler, fetchSearchGamesHandler } from '../reducers/gameReducer';
import { FeedBackState, feedbackHandler } from '../reducers/feedbackReducer';
import { fetchNewsHandler, NewsState, commitCommentHandler } from '../reducers/newsReducer';
import { fetchTeamsRankHandler, BasicTeamInfo, fetchTeamDetailHandler } from '../reducers/teamReducer';

const rootReducer = combineReducers({
  loginHandler,
  fetchGamesHandler,
  fetchSearchGamesHandler,
  feedbackHandler,
  fetchNewsHandler,
  fetchTeamsRankHandler,
  fetchGameDetailHandler,
  commitCommentHandler,
  fetchTeamDetailHandler,
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