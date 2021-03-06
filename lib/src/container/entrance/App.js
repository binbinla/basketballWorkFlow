"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
Object.defineProperty(exports, "__esModule", { value: true });
const Login_1 = __importDefault(require("../account/Login"));
const index_1 = __importDefault(require("../tabs/index"));
const react_navigation_1 = require("react-navigation");
exports.App = react_navigation_1.StackNavigator({
    Login: { screen: Login_1.default },
    Tabs: { screen: index_1.default },
}, {
    initialRouteName: 'Tabs'
});
// export default App
//# sourceMappingURL=App.js.map