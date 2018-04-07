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
const colors_1 = require("../../utils/colors");
const gameAction = __importStar(require("../../actions/gameAction"));
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
    // componentWillMount() {
    //   this.props.fetchGames();
    // }
    render() {
        return (React.createElement(react_native_1.View, { style: styles.container },
            React.createElement(GiftedListView, { style: { flex: 1 }, rowView: this._renderRowView, onFetch: this._onFetch, firstLoader: true, pagination: true, refreshable: true, withSections: true, sectionHeaderView: this._renderSectionHeaderView, customStyles: {
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
        setTimeout(() => {
            // const result = this.props.gamesParams ? this.props.gamesParams : []
            let result = {};
            result['今天 周三'] = gameAction.testState;
            result['昨天 周二'] = gameAction.testState;
            callback(result);
        }, 1000);
    }
    /**
    * Render a row
    * @param {object} rowData Row data
    */
    _renderSectionHeaderView(sectionData, sectionID) {
        return (React.createElement(react_native_1.View, { style: styles.header },
            React.createElement(react_native_1.Text, { style: styles.headerTitle }, sectionID)));
    }
    /***
     * Render a row
     * @param
     */
    _renderRowView(item) {
        return (React.createElement(react_native_1.TouchableOpacity, { style: { paddingTop: 10 }, activeOpacity: 0.8, onPress: () => this._onItemPress(item) },
            React.createElement(GameCard_1.default, { item: item, bgColor: colors_1.commonColors.gameOrange })));
    }
    /**
     * when a row was touched
     * @param
     */
    _onItemPress(item) {
        console.log(item + 'was pressed');
    }
}
HomePage.navigationOptions = {
    title: '放学打球'
};
const styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors_1.commonColors.white
    },
    header: {
        backgroundColor: colors_1.commonColors.sectionHeader,
        padding: 5,
        marginTop: 10
    },
    headerTitle: {
        color: colors_1.commonColors.sectionHeaderText,
    }
});
function mapStateToProps(reducer) {
    return {
        gamesParams: reducer.fetchGamesHandler
    };
}
function mapDispatchToProps() {
    return (dispatch) => ({
        fetchGames: () => dispatch(gameAction.fetchGames())
    });
}
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(HomePage);
//# sourceMappingURL=HomePage.js.map