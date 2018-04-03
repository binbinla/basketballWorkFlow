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
const react_navigation_1 = require("react-navigation");
const GameCard_1 = __importDefault(require("../../component/GameCard"));
const GiftedListView = require('react-native-gifted-listview');
const resetAction = react_navigation_1.NavigationActions.reset({
    index: 0,
    actions: [
        react_navigation_1.NavigationActions.navigate({ routeName: 'Hello' })
    ]
});
class HomePage extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (React.createElement(react_native_1.View, { style: styles.container },
            React.createElement(GiftedListView, { rowView: this._renderRowView, onFetch: this._onFetch, firstLoader: true, pagination: true, refreshable: true, withSections: false, customStyles: {
                    paginationView: {
                        backgroundColor: '#eee',
                    },
                }, refreshableTintColor: "blue" })));
    }
    /**
     * will be called when refreshing
     * @param
     */
    _onFetch(page = 1, callback, options) {
    }
    /***
     * Render a row
     * @param
     */
    _renderRowView(left, right) {
        return (React.createElement(react_native_1.TouchableOpacity, { activeOpacity: 0.8, onPress: () => this._onItemPress(left, right) },
            React.createElement(GameCard_1.default, { homeTeamItem: left, guestTeamItem: right })));
    }
    /**
     * when a row was touched
     * @param
     */
    _onItemPress(leftItem, rightItem) {
        console.log(leftItem + rightItem + 'was pressed');
    }
}
HomePage.navigationOptions = {
    title: '放学打球'
};
const styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F5FCFF'
    }
});
function mapStateToProps(reducer) {
    return {};
}
function mapDispatchToProps() {
    return (dispatch) => ({});
}
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(HomePage);
//# sourceMappingURL=HomePage.js.map