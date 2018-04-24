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
function fetchNews() {
    console.log('访问获取新闻的方法');
    return (dispatch) => {
        dispatch(didFetchNews());
    };
}
exports.fetchNews = fetchNews;
const testIds = ['100001', '100002', '100003'];
function didFetchNews() {
    return {
        type: types.DID_FETCH_NEWS,
        news: testIds
    };
}
//# sourceMappingURL=newsAction.js.map