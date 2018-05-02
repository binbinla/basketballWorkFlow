"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
}
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
Object.defineProperty(exports, "__esModule", { value: true });
const types = __importStar(require("../constants/newsTypes"));
const index_1 = __importDefault(require("../network/index"));
exports.fetchNews = (num, start) => {
    return (dispatch, getStore) => {
        // dispatch(didFetchNews());
        const channel = new index_1.default();
        return channel.getRecentNews(num, start)
            .then(data => {
            return dispatch({
                type: types.DID_FETCH_NEWS,
                news: data
            });
        });
    };
};
const testIds = ['100001', '100002', '100003'];
function didFetchNews() {
    return {
        type: types.DID_FETCH_NEWS,
        news: testIds
    };
}
function commitComment(comment) {
    console.log('访问新增评论的方法');
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
//# sourceMappingURL=newsAction.js.map