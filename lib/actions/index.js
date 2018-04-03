"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const loginAction_1 = require("../actions/loginAction");
const gameAction_1 = require("../actions/gameAction");
const actions = {};
Object.assign(actions, loginAction_1.login, gameAction_1.fetchGames);
exports.default = actions;
//# sourceMappingURL=index.js.map