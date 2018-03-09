"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
Object.defineProperty(exports, "__esModule", { value: true });
const Login_1 = __importDefault(require("../account/Login"));
const Hello_1 = __importDefault(require("../../component/Hello"));
const react_navigation_1 = require("react-navigation");
const App = react_navigation_1.StackNavigator({
    Login: { screen: Login_1.default },
    Hello: { screen: Hello_1.default }
});
exports.default = App;
//# sourceMappingURL=App.js.map