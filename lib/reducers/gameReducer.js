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
// const initialState: GameState[] = [];
const initialItem = {
    unstart: [],
    live: [],
    over: []
};
const initialState = [];
function fetchGamesHandler(state = initialState, action) {
    let newState = state;
    switch (action.type) {
        case types.DID_FETCH_TODAY_GAMES: {
            newState['today'] = action.games;
            return newState;
        }
        case types.DID_FETCH_YESTERDAY_GAMES: {
            newState['yesterday'] = action.games;
            return newState;
        }
        default:
            return state;
    }
}
exports.fetchGamesHandler = fetchGamesHandler;
const gameSearchInitial = {
    gameGeneral: {
        unstart: [],
        over: [],
        live: []
    },
    loading: true
};
function fetchSearchGamesHandler(state = gameSearchInitial, action) {
    let newState = state;
    switch (action.type) {
        case types.DID_START_FETCH_SEARCH_GAMES: {
            return newState;
        }
        case types.DID_FETCH_SEARCH_GAMES: {
            newState.gameGeneral = action.games;
            newState.loading = false;
            return newState;
        }
        case types.DID_CLEAR_SEARCH_GAMES: {
            newState.gameGeneral = gameSearchInitial.gameGeneral;
            newState = Object.assign({}, state, {
                gameGeneral: {
                    unstart: [],
                    over: [],
                    live: []
                }
            });
            return newState;
        }
        default:
            return state;
    }
}
exports.fetchSearchGamesHandler = fetchSearchGamesHandler;
const gameDetailInitial = {
    home: {
        id: '',
        teamAbbreviate: '',
        score: ''
    },
    visitor: {
        id: '',
        teamAbbreviate: '',
        score: ''
    },
    type: "OVER" /* over */,
    process: {
        time: '',
        quarter: ''
    },
    loading: true
};
function fetchGameDetailHandler(state = gameDetailInitial, action) {
    let newState = state;
    switch (action.type) {
        case types.DID_START_FETCHING_GAME_DETAIL: {
            return newState;
        }
        case types.DID_FETCH_GAME_DETAIl: {
            newState = action.gameDetail;
            newState.loading = false;
            return newState;
        }
        default:
            return state;
    }
}
exports.fetchGameDetailHandler = fetchGameDetailHandler;
//# sourceMappingURL=gameReducer.js.map