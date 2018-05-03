"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
}
Object.defineProperty(exports, "__esModule", { value: true });
const types = __importStar(require("../constants/communityTypes"));
exports.fetchCommunity = () => {
    return (dispatch, getStore) => {
        dispatch(didFetchCommunity());
    };
};
const testIds = ['100001', '100002', '100003'];
function didFetchCommunity() {
    return {
        type: types.DID_FETCH_COMMUNITY,
        topics: testIds
    };
}
function commitComment(comment) {
    return (dispatch) => {
        dispatch(didStartCommitComment());
        setTimeout(() => {
            dispatch(didFinishCommitComment(comment));
        }, 2000);
    };
}
exports.commitComment = commitComment;
function didStartCommitComment() {
    return {
        type: types.DID_START_COMMIT_COMMENT
    };
}
function didFinishCommitComment(comment) {
    return {
        type: types.DID_FINISH_COMMIT_COMMENT,
        commentContent: comment
    };
}
//# sourceMappingURL=communityAction.js.map