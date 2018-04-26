
import { TeamRankResult } from '../network/producer';
import * as types from '../constants/teamTypes';

export interface TeamDetailInfo {
  teamId: string,
  teamName: string,
  w_pct: number,
  fg_pct: number,
  fg3_pct: number,
  reb: number,
  ast: number,
  tov: number,
  stl: number,
  blk: number,
  pts: number,
  w_pct_rank: number,
  fg_pct_rank: number,
  fg3_pct_rank: number,
  reb_rank: number,
  ast_rank: number,
  tov_rank: number,
  stl_rank: number,
  blk_rank: number,
  pts_rank: number,
  // players: PlayerPersonalInfo[] // 数据类型得改，两种来的
}

export interface BasicTeamInfo {
  id: string,
  name: string,
  win: number,
  loss: number
}

export interface PlayerPersonalInfo {
  id: string,
  name: string,
  number: string,
  position: string,
  height: string,
  weight: string,
  age: string,
}

const initialState: TeamRankResult = {
  eastern: [],
  western: []
}

export function fetchTeamsRankHandler(state = initialState, action: any) {
  let newState: TeamRankResult = state;
  switch(action.type) {
    case types.DID_FETCH_TEAM_RANK: {
      newState = action.teamRank;
      return newState;
    }
    default:
      return state;
  }
}