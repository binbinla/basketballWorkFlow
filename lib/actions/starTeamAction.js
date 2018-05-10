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
function postStarTeamAttr(attr) {
    return (dispatch) => {
        dispatch(postTeamAttr(attr));
    };
}
exports.postStarTeamAttr = postStarTeamAttr;
function postTeamAttr(attr) {
    return {
        type: types.DID_POST_STAR_TEAMATTR,
        teamAttr: attr
    };
}
//# sourceMappingURL=starTeamAction.js.map