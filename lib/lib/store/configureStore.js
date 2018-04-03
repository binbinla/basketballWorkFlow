"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// 'user strict';
const redux_1 = require("redux");
const redux_thunk_1 = __importDefault(require("redux-thunk"));
const index_1 = __importDefault(require("../reducers/index"));
const middlewares = [redux_thunk_1.default];
function configureStore(initialState) {
    const store = redux_1.compose(redux_1.applyMiddleware(...middlewares))(redux_1.createStore)(index_1.default, initialState);
    return store;
}
exports.default = configureStore;
//# sourceMappingURL=configureStore.js.map