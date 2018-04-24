import { login } from '../actions/loginAction';
import { fetchGames, getGameGeneral, getYesterdayGameGeneral } from '../actions/gameAction';
import { getTeamRank } from '../actions/teamAction';

const actions = {};

Object.assign (
  actions, 
  login, 
  fetchGames,
  getGameGeneral,
  getYesterdayGameGeneral,
  getTeamRank
);

export default actions
