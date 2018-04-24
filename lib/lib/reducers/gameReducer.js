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
const types = __importStar(require("../constants/gameTypes"));
// const initialState: GameState[] = [];
const initialItem = {
    unstart: [],
    live: [],
    over: [],
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
    }
};
function fetchGameDetailHandler(state = gameDetailInitial, action) {
    let newState = state;
    switch (action.type) {
        case types.DID_FETCH_GAME_DETAIl: {
            newState = action.gameDetail;
        }
    }
}
exports.fetchGameDetailHandler = fetchGameDetailHandler;
//# sourceMappingURL=gameReducer.js.map