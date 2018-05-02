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
const types = __importStar(require("../constants/gameTypes"));
const index_1 = __importDefault(require("../network/index"));
function fetchGames() {
    console.log('访问获取比赛的方法');
    return (dispatch) => {
        dispatch(didFetchGames());
    };
}
exports.fetchGames = fetchGames;
const testItem = {
    id: '',
    type: "LIVE" /* live */,
    home: {
        id: '',
        players: [],
        teamAbbreviate: 'cle',
        score: '105',
    },
    visitor: {
        id: '',
        players: [],
        teamAbbreviate: 'gsw',
        score: '101',
    },
    date: [],
    process: {
        time: '4:32',
        quarter: 'Q4'
    },
    detail: {
        loaded: false,
        url: '',
        data: {}
    }
};
exports.testState = [testItem, testItem, testItem];
function didFetchGames() {
    return {
        type: types.DID_FETCH_TODAY_GAMES,
        games: exports.testState
    };
}
/**
 * Get info of game general
 */
exports.getGameGeneral = (year, month, date) => {
    return (dispatch, getStore) => {
        const channel = new index_1.default();
        return channel.getGameGeneral(year, month, date)
            .then(data => {
            // console.log('game data' + JSON.stringify(data))
            return dispatch({
                type: types.DID_FETCH_TODAY_GAMES,
                games: data
            });
        });
    };
};
exports.getYesterdayGameGeneral = (year, month, date) => {
    return (dispatch, getStore) => {
        const channel = new index_1.default();
        return channel.getGameGeneral(year, month, date)
            .then(data => {
            // console.log('game data' + JSON.stringify(data))
            return dispatch({
                type: types.DID_FETCH_YESTERDAY_GAMES,
                games: data
            });
        });
    };
};
exports.getGameSearch = (year, month, date) => {
    return (dispatch, getStore) => {
        dispatch(didStartFetchSearchGames());
        const channel = new index_1.default();
        return channel.getGameGeneral(year, month, date, true)
            .then(data => {
            return dispatch({
                type: types.DID_FETCH_SEARCH_GAMES,
                games: data
            });
        });
    };
};
function didStartFetchSearchGames() {
    return {
        type: types.DID_START_FETCH_SEARCH_GAMES
    };
}
function clearSearchGames() {
    return (dispatch, getStore) => {
        dispatch(didClearSearchGames());
    };
}
exports.clearSearchGames = clearSearchGames;
function didClearSearchGames() {
    return {
        type: types.DID_CLEAR_SEARCH_GAMES
    };
}
exports.getGameDetail = (year, month, date, gameId) => {
    return (dispatch, getStore) => {
        dispatch(didStartFetchGameDetail());
        const channel = new index_1.default();
        return channel.getGameDetail(year, month, date, gameId)
            .then(data => {
            // console.log('game detail action' +  JSON.stringify(data.visitor.players))
            return dispatch({
                type: types.DID_FETCH_GAME_DETAIl,
                gameDetail: data
            });
        });
    };
};
function didStartFetchGameDetail() {
    return {
        type: types.DID_START_FETCHING_GAME_DETAIL
    };
}
//# sourceMappingURL=gameAction.js.map