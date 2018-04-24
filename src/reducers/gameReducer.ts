import * as types from '../constants/gameTypes';
import { GameGeneralResult, GameDetailResult } from '../network/producer';
import { Player } from '../model/player';

export const enum GameType {
  unstart = 'UNSTART',
  live = 'LIVE',
  over = 'OVER'
}

export const enum DayType {
  today = 1,
  yesterday = 2
}

export interface GameState {
  id: string
  type: GameType
  home: {
    id: string,
    players?: Player[],
    teamAbbreviate: string,
    score: string,
  },
  visitor: {
    id: string,
    players?: Player[],
    teamAbbreviate: string,
    score: string,
  },
  date: string[],
  process: {
    time: string,
    quarter: string
  },
  detail: {
    loaded: boolean,
    data: Object
    url?: String
  }
}

export interface SingleGameTeamInfo {
  id: string,
  players?: any[],
  teamAbbreviate: string,
  score: string,
}

// const initialState: GameState[] = [];

const initialItem: GameGeneralResult = {
  unstart: [],
  live: [],
  over: [],
};

const initialState: GameGeneralResult[] = []

export function fetchGamesHandler(state = initialState, action: any) {
  let newState: GameGeneralResult[] = state;
  switch(action.type) {
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

const gameDetailInitial: GameDetailResult= {
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
  type: GameType.over,
  process: {
    time: '',
    quarter: ''
  },
  loading: true
}

export function fetchGameDetailHandler(state = gameDetailInitial, action: any) {
  let newState: GameDetailResult = state;
  switch(action.type) {
    case types.DID_START_FETCHING_GAME_DETAIL: {
      return newState;
    }
    case types.DID_FETCH_GAME_DETAIl: {
      newState = action.gameDetail
      newState.loading = false
      return newState;
    }
    default:
      return state;
  }
}

