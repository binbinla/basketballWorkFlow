import * as types from '../constants/gameTypes';

export interface GameState {
  type: string
  home: {
    players: any[],
    teamAbbreviate: string,
    score: string,
  },
  visitor: {
    players: any[],
    teamAbbreviate: string,
    score: string,
  },
  date: string,
  process: {
    time: string,
    quarter: string
  },
  detail: {
    url: String
    data: Object
  }
}

const initialState: GameState[] = [];

export function fetchGamesHandler(state = initialState, action: any) {
  let newState: GameState[] = state;
  switch(action.type) {
    case types.DID_FETCH_GAMES: {
      newState = action.games;
      return newState;
    }
    default: 
      return state;
  }
}
