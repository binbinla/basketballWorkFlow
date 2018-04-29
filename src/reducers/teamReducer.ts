
import { TeamRankResult, TeamDetailResult } from '../network/producer';
import * as types from '../constants/teamTypes';
import { Zone } from '../container/team/TeamDetailCard';
import { TeamPlayer } from '../model/player';

export interface TeamDetailInfo {
  teamId: string,
  teamName: string,
  season: string,
  win: number,
  loss: number,
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
  players: TeamPlayer[] 
}

export interface BasicTeamInfo {
  id: string,
  name: string,
  win: number,
  loss: number,
  zone: Zone
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
export const teamDetailInitial: TeamDetailInfo = {
  teamId: '',
  teamName: '',
  season: '',
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
}

export const playerPersonalInitial: PlayerPersonalInfo = {
  id: '',
  name: '',
  number: '',
  position: '',
  height: '',
  weight: '',
  age: ''
}

const initial: TeamDetailResult = {
  teamDetail: teamDetailInitial,
  playerPersonal: [playerPersonalInitial],
  loading: true
}

export function fetchTeamDetailHandler(state = initial, action: any) {
  let newState: TeamDetailResult = state;
  switch(action.type) {
    case types.DID_START_FETCHING_TEAM_DETAIL: {
      return newState;
    }
    case types.DID_FETCH_TEAM_DETAIL: {
      newState = action.teamDetail
      newState.loading = false
      return newState;
    }
    default:
      return state;
  }
}