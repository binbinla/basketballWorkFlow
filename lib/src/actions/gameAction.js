"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
}
Object.defineProperty(exports, "__esModule", { value: true });
const types = __importStar(require("../constants/gameTypes"));
function fetchGames() {
    console.log('访问获取比赛的方法');
    return (dispatch) => {
        dispatch(didFetchGames());
    };
}
exports.fetchGames = fetchGames;
const testItem = {
    type: 'live',
    home: {
        players: [],
        teamAbbreviate: 'cle',
        score: '105',
    },
    visitor: {
        players: [],
        teamAbbreviate: 'gsw',
        score: '101',
    },
    date: '20151026 0400',
    process: {
        time: '4:32',
        quarter: 'Q4'
    },
    detail: {
        url: '',
        data: {}
    }
};
const initialState = [testItem, testItem, testItem];
function didFetchGames() {
    return {
        type: types.DID_FETCH_GAMES
    };
}
//# sourceMappingURL=gameAction.js.map