"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const loginAction_1 = require("../actions/loginAction");
const gameAction_1 = require("../actions/gameAction");
const teamAction_1 = require("../actions/teamAction");
const actions = {};
Object.assign(actions, loginAction_1.login, gameAction_1.fetchGames, gameAction_1.getGameGeneral, gameAction_1.getYesterdayGameGeneral, teamAction_1.getTeamRank);
exports.default = actions;
//# sourceMappingURL=index.js.map