"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
Object.defineProperty(exports, "__esModule", { value: true });
// 'use strict';
const redux_1 = require("redux");
const loginReducer_1 = __importDefault(require("../reducers/loginReducer"));
const navigatorReducer_1 = __importDefault(require("../reducers/navigatorReducer"));
const rootReducer = redux_1.combineReducers({
    loginIn: loginReducer_1.default,
    navigatorReducer: navigatorReducer_1.default
});
exports.default = rootReducer;
//# sourceMappingURL=index.js.map