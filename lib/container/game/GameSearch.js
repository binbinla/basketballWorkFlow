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
const react_native_easy_toast_1 = __importDefault(require("react-native-easy-toast"));
const CustomSearchBar_1 = __importDefault(require("../../component/CustomSearchBar"));
const GameCard_1 = __importDefault(require("../../component/GameCard"));
const team_map_1 = __importDefault(require("../../utils/team-map"));
const gameAction = __importStar(require("../../actions/gameAction"));
const Spinner_1 = __importDefault(require("../../component/Spinner"));
const GiftedListView = require('react-native-gifted-listview');
class GameSearch extends React.Component {
    constructor(props) {
        super(props);
        this._renderEmptyView = () => {
            return (React.createElement(react_native_1.View, null));
        };
        this.combineGames = () => {
            const all = [];
            const toast = this.refs.toast;
            if (this.props.gamesParams.gameGeneral.live.length === 0 &&
                this.props.gamesParams.gameGeneral.unstart.length === 0 &&
                this.props.gamesParams.gameGeneral.over.length === 0) {
                toast.show("当天没有比赛", react_native_easy_toast_1.DURATION.LONG);
            }
            this.props.gamesParams.gameGeneral.live.forEach(item => {
                all.push(item);
            });
            this.props.gamesParams.gameGeneral.unstart.forEach(item => {
                all.push(item);
            });
            this.props.gamesParams.gameGeneral.over.forEach(item => {
                all.push(item);
            });
            this.setState({ loading: false });
            return all;
        };
        this._inputCallback = (text) => {
            this.setState({ searchText: text });
        };
        this._onSubmitEditing = () => {
            if (this.state.searchText && this.state.searchText !== '') {
                const dates = this.state.searchText.split('/');
                const day = String(Number(dates[2]) - 1);
                this.props.getGameSearch(dates[0], dates[1], day);
                this.setState({ loading: true }, () => {
                    this.listview._refresh();
                });
            }
        };
        this._cancelOnPress = () => {
            this.props.clearSearchGames();
            this.listview._refresh();
            this.props.navigation.goBack();
        };
        this.state = {
            loading: false
        };
    }
    // componentWillReceiveProps无效，为什么？
    // componentWillReceiveProps (nextProps: Props) {
    //   console.log('game search will receive')
    //   this.setState({ loading: nextProps.gamesParams.loading });
    // }
    // componentWillUnmount () {
    //   this.props.clearSearchGames();
    // }
    render() {
        return (React.createElement(react_native_1.View, { style: styles.container },
            React.createElement(CustomSearchBar_1.default, { inputCallback: this._inputCallback, onSubmitEditing: this._onSubmitEditing, cancelOnPress: this._cancelOnPress }),
            React.createElement(Spinner_1.default, { textContent: '查询中...', visible: this.state.loading, color: colors_1.commonColors.white, textStyle: { fontSize: 10, color: colors_1.commonColors.white }, hudBg: true }),
            React.createElement(GiftedListView, { ref: (listview) => this.listview = listview, style: { flex: 1 }, rowView: this._renderRowView.bind(this), onFetch: this._onFetch.bind(this), firstLoader: false, pagination: false, refreshable: false, withSections: true, sectionHeaderView: this._renderSectionHeaderView, customStyles: {
                    paginationView: {
                        backgroundColor: colors_1.commonColors.white,
                    },
                }, refreshableTintColor: "blue", emptyView: this._renderEmptyView }),
            React.createElement(react_native_easy_toast_1.default, { ref: "toast", position: "center" })));
    }
    /**
     * will be called when refreshing
     * @param
     */
    _onFetch(page = 1, callback, options) {
        setTimeout(() => {
            let result = {};
            const searchResult = this.combineGames();
            result[`${this.props.gamesParams.gameGeneral.gameDate}${' '}${searchResult.length}场`] = searchResult;
            callback(result);
        }, 2000);
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
        const color = team_map_1.default[item.home.teamAbbreviate].color;
        return (React.createElement(react_native_1.TouchableOpacity, { style: { paddingTop: 10 }, activeOpacity: 0.8, onPress: () => this._onItemPress(item) },
            React.createElement(GameCard_1.default, { item: item, bgColor: color })));
    }
    /**
     * when a row was touched
     * @param
     */
    _onItemPress(item) {
        console.log(item + 'was pressed');
        this.props.navigation.navigate('GameDetail', {
            gameItem: item
        });
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
    },
    header: {
        backgroundColor: colors_1.commonColors.sectionHeader,
        padding: 5,
        marginTop: 10
    },
    headerTitle: {
        color: colors_1.commonColors.sectionHeaderText,
    },
});
function mapStateToProps(reducer) {
    return {
        gamesParams: reducer.fetchSearchGamesHandler
    };
}
function mapDispatchToProps() {
    return (dispatch) => ({
        getGameSearch: (year, month, date) => dispatch(gameAction.getGameSearch(year, month, date)),
        clearSearchGames: () => dispatch(gameAction.clearSearchGames())
    });
}
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(GameSearch);
//# sourceMappingURL=GameSearch.js.map