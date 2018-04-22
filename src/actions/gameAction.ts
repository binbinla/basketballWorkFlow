import * as types from '../constants/gameTypes';
import { GameState, GameType } from '../reducers/gameReducer';
import Channel from '../network/index';

export function fetchGames() {
  console.log('访问获取比赛的方法');
  return (dispatch: any) => {
    dispatch(didFetchGames());
  }
}

const testItem: GameState = {
  id: '',
  type: GameType.live,
  home: {
    id: '',
    players: [],
    teamAbbreviate: 'cle',
    score: '105',
  },
  visitor: {
    id: '',
    players: [],
    teamAbbreviate: 'gsw',
    score: '101',
  },
  date: [],
  process: {
    time: '4:32',
    quarter: 'Q4'
  },
  detail: {
    loaded: false,
    url: '',
    data: {}
  }
}

export const testState: GameState[] = [testItem, testItem, testItem];

function didFetchGames() {
  return {
    type: types.DID_FETCH_TODAY_GAMES,
    games: testState
  }
}

/**
 * Get info of game general
 */
export const getGameGeneral = (year, month, date) => {
  return (dispatch, getStore) => {
    const channel = new Channel();
    return channel.getGameGeneral(year, month, date)
      .then(data => {
        console.log('game data' + JSON.stringify(data))
        return dispatch({
          type: types.DID_FETCH_TODAY_GAMES,
          games: data
        })
      })
  }
}

export const getYesterdayGameGeneral = (year, month, date) => {
  return (dispatch, getStore) => {
    const channel = new Channel();
    return channel.getGameGeneral(year, month, date)
      .then(data => {
        console.log('game data' + JSON.stringify(data))
        return dispatch({
          type: types.DID_FETCH_YESTERDAY_GAMES,
          games: data
        })
      })
  }
}

export const getGameDetail = (year, month, date, gameId) => {
  return (dispatch, getStore) => {
    const channel = new Channel();
    return channel.getGameDetail(year, month, date, gameId)
      .then(data => {
        console.log('game data' + JSON.stringify(data))
        return dispatch({
          type: types.DID_FETCH_GAME_DETAIl,
          gameDetail: data
        })
      })
  }
}