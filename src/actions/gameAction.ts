import * as types from '../constants/gameTypes';
import { GameState } from '../reducers/gameReducer';

export function fetchGames() {
  console.log('访问获取比赛的方法');
  return (dispatch: any) => {
    dispatch(didFetchGames());
  }
}

const testItem: GameState = {
  type: 'live',
  home: {
    players: [],
    teamAbbreviate: 'cle',
    score: '105',
  },
  visitor: {
    players: [],
    teamAbbreviate: 'gsw',
    score: '101',
  },
  date: '20151026 0400',
  process: {
    time: '4:32',
    quarter: 'Q4'
  },
  detail: {
    url: '',
    data: {}
  }
}

export const testState: GameState[] = [testItem, testItem, testItem];
// export let testInstance[] = {};
// testInstance[0] = testState;
// testInstance['昨天'] = testState;

function didFetchGames() {
  return {
    type: types.DID_FETCH_GAMES,
    games: testState
  }
}
