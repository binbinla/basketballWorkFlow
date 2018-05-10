"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
Object.defineProperty(exports, "__esModule", { value: true });
// 'use strict';
const redux_1 = require("redux");
const loginReducer_1 = require("../reducers/loginReducer");
const navigatorReducer_1 = __importDefault(require("../reducers/navigatorReducer"));
const gameReducer_1 = require("../reducers/gameReducer");
const feedbackReducer_1 = require("../reducers/feedbackReducer");
const newsReducer_1 = require("../reducers/newsReducer");
const teamReducer_1 = require("../reducers/teamReducer");
const communityReducer_1 = require("../reducers/communityReducer");
const starTeamReducer_1 = require("./starTeamReducer");
const rootReducer = redux_1.combineReducers({
    loginHandler: loginReducer_1.loginHandler,
    fetchGamesHandler: gameReducer_1.fetchGamesHandler,
    fetchSearchGamesHandler: gameReducer_1.fetchSearchGamesHandler,
    feedbackHandler: feedbackReducer_1.feedbackHandler,
    fetchNewsHandler: newsReducer_1.fetchNewsHandler,
    fetchTeamsRankHandler: teamReducer_1.fetchTeamsRankHandler,
    fetchGameDetailHandler: gameReducer_1.fetchGameDetailHandler,
    fetchCommunitysHandler: communityReducer_1.fetchCommunitysHandler,
    commitCommentHandler: communityReducer_1.commitCommentHandler,
    fetchTeamDetailHandler: teamReducer_1.fetchTeamDetailHandler,
    starTeamHandler: starTeamReducer_1.starTeamHandler,
    navigatorReducer: navigatorReducer_1.default
});
exports.default = rootReducer;
//# sourceMappingURL=index.js.map