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
const react_native_1 = require("react-native");
const react_redux_1 = require("react-redux"); // 引入connect函数
const react_navigation_1 = require("react-navigation");
const GameCard_1 = __importDefault(require("../../component/GameCard"));
const colors_1 = require("../../utils/colors");
const gameAction = __importStar(require("../../actions/gameAction"));
const date = __importStar(require("../../utils/date"));
const team_map_1 = __importDefault(require("../../utils/team-map"));
const teamAction = __importStar(require("../../actions/teamAction"));
const GiftedListView = require('react-native-gifted-listview');
const resetAction = react_navigation_1.NavigationActions.reset({
    index: 0,
    actions: [
        react_navigation_1.NavigationActions.navigate({ routeName: 'Hello' })
    ]
});
react_native_1.YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);
class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.combineGames = (type) => {
            const all = [];
            if (type === 1 /* today */) {
                this.props.gamesParams['today'].live.forEach(item => {
                    all.push(item);
                });
                this.props.gamesParams['today'].unstart.forEach(item => {
                    all.push(item);
                });
                this.props.gamesParams['today'].over.forEach(item => {
                    all.push(item);
                });
            }
            else if (type === 2 /* yesterday */) {
                this.props.gamesParams['yesterday'].live.forEach(item => {
                    all.push(item);
                });
                this.props.gamesParams['yesterday'].unstart.forEach(item => {
                    all.push(item);
                });
                this.props.gamesParams['yesterday'].over.forEach(item => {
                    all.push(item);
                });
            }
            return all;
        };
        this.state = {
            date: date.getToday()
        };
    }
    componentWillMount() {
        // this.props.fetchGames();
        const today = date.getToday();
        this.props.getGameGeneral(today[0], today[1], today[2]);
        const yesterday = date.getYesterday();
        this.props.getYesterdayGameGeneral(yesterday[0], yesterday[1], yesterday[2]);
    }
    componentDidMount() {
        //
    }
    componentWillUnmount() {
        //
    }
    render() {
        return (React.createElement(react_native_1.View, { style: styles.container }, React.createElement(GiftedListView, { style: { flex: 1 }, rowView: this._renderRowView.bind(this), onFetch: this._onFetch.bind(this), firstLoader: true, pagination: false, refreshable: true, withSections: true, sectionHeaderView: this._renderSectionHeaderView, customStyles: {
                paginationView: {
                    backgroundColor: colors_1.commonColors.white,
                },
            }, refreshableTintColor: "blue", paginationWaitingView: this._renderPaginationWaitingView })));
    }
    /**
     * will be called when refreshing
     * @param
     */
    _onFetch(page = 1, callback, options) {
        setTimeout(() => {
            let result = {};
            const todayResult = this.combineGames(1 /* today */);
            const yesterdayResult = this.combineGames(2 /* yesterday */);
            result[`${this.props.gamesParams['today'].gameDate}${' '}${date.getWeekDay(1 /* today */)}${' '}${todayResult.length}场`] = todayResult;
            result[`${this.props.gamesParams['yesterday'].gameDate}${' '}${date.getWeekDay(2 /* yesterday */)}${' '}${yesterdayResult.length}场`] = yesterdayResult;
            // let result = {};
            // result['周三'] = gameAction.testState;
            // result['周二'] = gameAction.testState;
            callback(result);
        }, 2000);
    }
    /**
    * Render a row
    * @param {object} rowData Row data
    */
    _renderSectionHeaderView(sectionData, sectionID) {
        return (React.createElement(react_native_1.View, { style: styles.header }, React.createElement(react_native_1.Text, { style: styles.headerTitle }, sectionID)));
    }
    /***
     * Render a row
     * @param
     */
    _renderRowView(item) {
        const color = team_map_1.default[item.home.teamAbbreviate].color;
        return (React.createElement(react_native_1.TouchableOpacity, { style: { paddingTop: 10 }, activeOpacity: 0.8, onPress: () => this._onItemPress(item) }, React.createElement(GameCard_1.default, { item: item, bgColor: color })));
    }
    /**
     * when a row was touched
     * @param
     */
    _onItemPress(item) {
        console.log(item + 'was pressed');
        this.props.navigation.navigate('GameDetail', {
            // gameId: item.id,
            // gameDate: item.date
            gameItem: item
        });
    }
    _renderPaginationWaitingView(paginateCallback) {
        return (React.createElement(react_native_1.TouchableOpacity, { onPress: paginateCallback, style: styles.paginationView }, React.createElement(react_native_1.Text, { style: [styles.paginationText] }, "\u52A0\u8F7D\u66F4\u591A")));
    }
}
HomePage.navigationOptions = {
    title: '赛况'
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
    },
    paginationView: {
        height: 44,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors_1.commonColors.white,
    },
    paginationText: {
        fontSize: 13,
        color: colors_1.commonColors.underGray,
    }
});
function mapStateToProps(reducer) {
    return {
        gamesParams: reducer.fetchGamesHandler
    };
}
function mapDispatchToProps() {
    return (dispatch) => ({
        fetchGames: () => dispatch(gameAction.fetchGames()),
        getGameGeneral: (year, month, date) => dispatch(gameAction.getGameGeneral(year, month, date)),
        getYesterdayGameGeneral: (year, month, date) => dispatch(gameAction.getYesterdayGameGeneral(year, month, date)),
        getTeamRank: (year, month, date) => dispatch(teamAction.getTeamRank(year, month, date))
    });
}
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(HomePage);
//# sourceMappingURL=HomePage.js.map