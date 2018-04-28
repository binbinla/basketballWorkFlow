"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
}
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("../network/index"));
const types = __importStar(require("../constants/teamTypes"));
const team_rank_datas_1 = require("../mock_datas/team_rank_datas");
let scrap_result = {
    western: [],
    eastern: []
};
// export const getTeamRank = (year, month, date) => {
//   console.log('visit team rank function')
//   return (dispatch, getStore) => {
//     const channel = new Channel();
//     return channel.getTeamRank(year, month, date)
//       .then(data => {
//         console.log('team rank data' + JSON.stringify(data))
//         return dispatch({
//           type: types.DID_FETCH_TEAM_RANK,
//           teamRank: data
//         })
//       })
//   }
// }
function getTeamRank(year, month, date) {
    return (dispatch) => {
        dispatch(didFetchTeamRank());
    };
}
exports.getTeamRank = getTeamRank;
function didFetchTeamRank() {
    console.log('team rank action');
    scrap_result = { western: team_rank_datas_1.western, eastern: team_rank_datas_1.eastern };
    return {
        type: types.DID_FETCH_TEAM_RANK,
        teamRank: scrap_result
    };
}
exports.getTeamDetail = (teamID) => {
    return (dispatch, getStore) => {
        dispatch(didStartFetchTeamDetail());
        const channel = new index_1.default();
        setTimeout(() => {
            const result = channel.getTeamDetail(teamID);
            return dispatch({
                type: types.DID_FETCH_TEAM_DETAIL,
                teamDetail: result
            });
        }, 1500);
    };
};
function didStartFetchTeamDetail() {
    return {
        type: types.DID_START_FETCHING_TEAM_DETAIL
    };
}
//# sourceMappingURL=teamAction.js.map