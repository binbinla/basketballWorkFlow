"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
}
Object.defineProperty(exports, "__esModule", { value: true });
const types = __importStar(require("../constants/teamTypes"));
const initialState = {
    eastern: [],
    western: []
};
function fetchTeamsRankHandler(state = initialState, action) {
    let newState = state;
    switch (action.type) {
        case types.DID_FETCH_TEAM_RANK: {
            newState = action.teamRank;
            return newState;
        }
        default:
            return state;
    }
}
exports.fetchTeamsRankHandler = fetchTeamsRankHandler;
//# sourceMappingURL=teamReducer.js.map