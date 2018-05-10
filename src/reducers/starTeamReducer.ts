
import * as types from '../constants/starTeamTypes';

const initialState = {
  teamAttr: 'none'
}

export function starTeamHandler(state = initialState, action: any) {
  let newState = state;
  switch (action.type) {
    case types.DID_POST_STAR_TEAMATTR: {
      newState.teamAttr = action.teamAttr;
      return newState;
    }
    default: 
      return state;
  }
}