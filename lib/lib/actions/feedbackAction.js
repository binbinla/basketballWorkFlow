"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule)
        return mod;
    var result = {};
    if (mod != null)
        for (var k in mod)
            if (Object.hasOwnProperty.call(mod, k))
                result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const types = __importStar(require("../constants/feedbackTypes"));
function submitFeedbackInfo(info) {
    console.log('访问提交反馈信息的方法');
    return (dispatch) => {
        dispatch(didSubmitFeedbackInfo(info));
    };
}
exports.submitFeedbackInfo = submitFeedbackInfo;
function didSubmitFeedbackInfo(info) {
    return {
        type: types.DID_SUBMIT_FEEDBACK,
        feedback: info
    };
}
//# sourceMappingURL=feedbackAction.js.map