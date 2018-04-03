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
function fetchGamesHandler(state = initialState, action) {
    let newState = state;
    switch (action.type) {
        case types.DID_FETCH_GAMES: {
            return newState;
        }
        default:
            return state;
    }
}
exports.fetchGamesHandler = fetchGamesHandler;
//# sourceMappingURL=gameReducer.js.map