import { login } from '../actions/loginAction';
import { fetchGames } from '../actions/gameAction';

const actions = {};

Object.assign (
  actions, 
  login, 
  fetchGames
);

export default actions
