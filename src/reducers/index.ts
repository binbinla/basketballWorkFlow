// 'use strict';
import { combineReducers } from 'redux';
import { LoginState, loginHandler } from "../reducers/loginReducer";
import navigatorReducer from '../reducers/navigatorReducer';
import { fetchGamesHandler, GameState, fetchGameDetailHandler, fetchSearchGamesHandler } from '../reducers/gameReducer';
import { FeedBackState, feedbackHandler } from '../reducers/feedbackReducer';
import { fetchNewsHandler } from '../reducers/newsReducer';
import { fetchTeamsRankHandler, BasicTeamInfo, fetchTeamDetailHandler } from '../reducers/teamReducer';
import { commitCommentHandler, fetchCommunitysHandler, CommunityState} from '../reducers/communityReducer';
import { starTeamHandler } from './starTeamReducer';

const rootReducer = combineReducers({
  loginHandler,
  fetchGamesHandler,
  fetchSearchGamesHandler,
  feedbackHandler,
  fetchNewsHandler,
  fetchTeamsRankHandler,
  fetchGameDetailHandler,
  fetchCommunitysHandler,
  commitCommentHandler,
  fetchTeamDetailHandler,
  starTeamHandler,
  navigatorReducer
});

export default rootReducer;

export interface allReducer {
  login: LoginState,
  game: GameState,
  feedback: FeedBackState,
  community: CommunityState,
  teamRankBasic: BasicTeamInfo
} 