"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
}
Object.defineProperty(exports, "__esModule", { value: true });
const types = __importStar(require("../constants/newsTypes"));
const initialState = [];
function fetchNewsHandler(state = initialState, action) {
    let newState = state;
    switch (action.type) {
        case types.DID_FETCH_NEWS: {
            newState = action.news;
            return newState;
        }
        default:
            return state;
    }
}
exports.fetchNewsHandler = fetchNewsHandler;
//# sourceMappingURL=newsReducer.js.map