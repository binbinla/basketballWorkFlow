"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
}
Object.defineProperty(exports, "__esModule", { value: true });
const types = __importStar(require("../constants/starTeamTypes"));
const initialState = {
    teamAttr: 'none'
};
function starTeamHandler(state = initialState, action) {
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
exports.starTeamHandler = starTeamHandler;
//# sourceMappingURL=starTeamReducer.js.map