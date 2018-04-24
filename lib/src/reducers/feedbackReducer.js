"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
}
Object.defineProperty(exports, "__esModule", { value: true });
const types = __importStar(require("../constants/feedbackTypes"));
// 初始状态
const initialState = {
    title: undefined,
    content: undefined
};
function feedbackHandler(state = initialState, action) {
    let newState = state;
    switch (action.type) {
        case types.DID_SUBMIT_FEEDBACK: {
            newState = action.feedback;
            return newState;
        }
        default:
            return newState;
    }
}
exports.feedbackHandler = feedbackHandler;
//# sourceMappingURL=feedbackReducer.js.map