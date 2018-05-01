"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
}
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
const react_native_1 = require("react-native");
const react_redux_1 = require("react-redux"); // 引入connect函数
const colors_1 = require("../../utils/colors");
const CustomSearchBar_1 = __importDefault(require("../../component/CustomSearchBar"));
class GameSearch extends React.Component {
    constructor(props) {
        super(props);
        this._inputCallback = (text) => {
            this.setState({ searchText: text });
        };
        this._onSubmitEditing = () => {
        };
        this._cancelOnPress = () => {
            this.props.navigation.goBack();
        };
        this.state = {};
    }
    render() {
        return (React.createElement(react_native_1.View, { style: styles.container },
            React.createElement(CustomSearchBar_1.default, { inputCallback: this._inputCallback, onSubmitEditing: this._onSubmitEditing, cancelOnPress: this._cancelOnPress })));
    }
}
GameSearch.navigationOptions = {
    header: null,
    tabBarVisible: false,
};
const styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors_1.commonColors.white,
    }
});
function mapStateToProps(reducer) {
    return {};
}
function mapDispatchToProps() {
    return (dispatch) => ({});
}
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(GameSearch);
//# sourceMappingURL=GameSearch.js.map