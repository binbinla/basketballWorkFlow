
import * as types from '../constants/starTeamTypes';

export function postStarTeamAttr(attr: string) {
  return (dispatch: any) => {
    dispatch(postTeamAttr(attr));
	}
}

function postTeamAttr(attr: string) {
  return {
    type: types.DID_POST_STAR_TEAMATTR,
    teamAttr: attr
  }
}