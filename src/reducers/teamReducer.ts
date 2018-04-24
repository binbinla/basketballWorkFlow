
import { TeamRankResult } from '../network/producer';
import * as types from '../constants/teamTypes';

export interface TeamInfoState {
  id: string,
  teamName: string,
  teamCity: string,
  teamAbbr: string,
  teamConf: string,
  teamDivi: string,
  confRank: string,
  diviRank: string,
  win: string,
  loss: string,
  ptsRank: string,
  rebRank: string,
  astRank: string,
  oppRank: string
}


export interface BasicTeamInfo {
  id: string,
  name: string,
  win: number,
  loss: number
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