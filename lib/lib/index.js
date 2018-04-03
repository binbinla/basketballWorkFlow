"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule)
        return mod;
    var result = {};
    if (mod != null)
        for (var k in mod)
            if (Object.hasOwnProperty.call(mod, k))
                result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
const react_redux_1 = require("react-redux");
const configureStore_1 = __importDefault(require("./store/configureStore"));
const App_1 = require("./container/entrance/App"); // app的入口
const store = configureStore_1.default();
class Root extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (React.createElement(react_redux_1.Provider, { store: store }, React.createElement(App_1.App, null)));
    }
}
exports.default = Root;
//# sourceMappingURL=index.js.map