"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const App_1 = require("../container/entrance/App"); // app的入口
const AppNavigator = App_1.App;
const initialState = AppNavigator.router.getStateForAction(AppNavigator.router.getActionForPathAndParams('Login'));
function navigatorReducer(state = initialState, action) {
    const nextState = AppNavigator.router.getStateForAction(action, state);
    return nextState || state;
}
exports.default = navigatorReducer;
//# sourceMappingURL=navigatorReducer.js.map