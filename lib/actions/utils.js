"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// action related utility functions
function actionCreator(type) {
    return Object.assign((payload) => ({ type, payload }), { type });
}
exports.actionCreator = actionCreator;
function isType(action, creator) {
    return action.type === creator.type;
}
exports.isType = isType;
//# sourceMappingURL=utils.js.map