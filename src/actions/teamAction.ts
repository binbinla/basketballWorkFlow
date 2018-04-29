
import Channel from '../network/index';
import * as types from '../constants/teamTypes';
import { western, eastern } from '../mock_datas/team_rank_datas';
import { TeamRankResult } from '../network/producer';

let scrap_result: TeamRankResult = {
  western: [],
  eastern: []
}

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

export function getTeamRank(year, month, date) {
  return (dispatch: any) => {
    dispatch(didFetchTeamRank());
  }
}

function didFetchTeamRank() {
  scrap_result = { western: western, eastern: eastern };
  return {
    type: types.DID_FETCH_TEAM_RANK,
    teamRank: scrap_result
  }
}

export const getTeamDetail = (teamID) => {
  return (dispatch, getStore) => {
    dispatch(didStartFetchTeamDetail());
    const channel = new Channel();
    setTimeout(() => {
      const result = channel.getTeamDetail(teamID)
      return dispatch({
        type: types.DID_FETCH_TEAM_DETAIL,
        teamDetail: result
      })
    }, 1500);
  }
}

function didStartFetchTeamDetail() {
  return {
    type: types.DID_START_FETCHING_TEAM_DETAIL
  }
}