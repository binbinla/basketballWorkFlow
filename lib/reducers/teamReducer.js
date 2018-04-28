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
exports.teamDetailInitial = {
    teamId: '',
    teamName: '',
    win: 0,
    loss: 0,
    w_pct: 0,
    w_pct_rank: 0,
    fg3_pct: 0,
    fg3_pct_rank: 0,
    fg_pct: 0,
    fg_pct_rank: 0,
    reb: 0,
    reb_rank: 0,
    ast: 0,
    ast_rank: 0,
    tov: 0,
    tov_rank: 0,
    stl: 0,
    stl_rank: 0,
    blk: 0,
    blk_rank: 0,
    pts: 0,
    pts_rank: 0,
    players: []
};
exports.playerPersonalInitial = {
    id: '',
    name: '',
    number: '',
    position: '',
    height: '',
    weight: '',
    age: ''
};
const initial = {
    teamDetail: exports.teamDetailInitial,
    playerPersonal: exports.playerPersonalInitial,
    loading: true
};
function fetchTeamDetailHandler(state = initial, action) {
    let newState = state;
    switch (action.type) {
        case types.DID_START_FETCHING_TEAM_DETAIL: {
            return newState;
        }
        case types.DID_FETCH_TEAM_DETAIL: {
            newState = action.teamDetail;
            newState.loading = false;
            return newState;
        }
        default:
            return state;
    }
}
exports.fetchTeamDetailHandler = fetchTeamDetailHandler;
//# sourceMappingURL=teamReducer.js.map