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
const TeamCard_1 = __importDefault(require("../../component/TeamCard"));
const teamAction = __importStar(require("../../actions/teamAction"));
const date = __importStar(require("../../utils/date"));
const colors_1 = require("../../utils/colors");
const TeamDetailCard_1 = require("../team/TeamDetailCard");
const GiftedListView = require('react-native-gifted-listview');
const resetAction = react_navigation_1.NavigationActions.reset({
    index: 0,
    actions: [
        react_navigation_1.NavigationActions.navigate({ routeName: 'Hello' })
    ]
});
class TeamsPage extends React.Component {
    constructor(props) {
        super(props);
        this.rank = 1;
        this.zone = TeamDetailCard_1.Zone.WEST;
    }
    componentWillMount() {
        const today = date.getToday();
        this.props.getTeamRank(today[0], today[1], today[2]);
    }
    componentWillReceiveProps(nextProps) {
        // console.log('next Props' + JSON.stringify(nextProps));
    }
    render() {
        return (React.createElement(react_native_1.View, { style: styles.container },
            React.createElement(GiftedListView, { style: { flex: 1 }, rowView: this._renderRowView.bind(this), onFetch: this._onFetch.bind(this), firstLoader: true, pagination: false, refreshable: false, withSections: true, sectionHeaderView: this._renderSectionHeaderView, customStyles: {
                    paginationView: {
                        backgroundColor: colors_1.commonColors.white,
                    },
                }, refreshableTintColor: "blue", enableEmptySections: true })));
    }
    /**
     * will be called when refreshing
     * @param
     */
    _onFetch(page = 1, callback, options) {
        setTimeout(() => {
            let result = {};
            result['西部'] = this.props.teamRankParams.western;
            result['东部'] = this.props.teamRankParams.eastern;
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
    _renderRowView(item, index) {
        if (this.rank > 15) {
            this.rank = 1;
        }
        return (React.createElement(react_native_1.TouchableOpacity, { style: { paddingTop: 10 }, activeOpacity: 0.8, onPress: () => this._onItemPress(item) },
            React.createElement(TeamCard_1.default, { item: item, rank: this.rank++ })));
    }
    /**
     * when a row was touched
     * @param
     */
    _onItemPress(item) {
        console.log(item + 'was pressed');
        this.props.navigation.navigate('TeamDetail', {
            teamItem: item,
            rank: this.rank,
        });
    }
}
TeamsPage.navigationOptions = {
    title: '球队'
};
const styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF'
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
        teamRankParams: reducer.fetchTeamsRankHandler
    };
}
function mapDispatchToProps() {
    return (dispatch) => ({
        getTeamRank: (year, month, date) => dispatch(teamAction.getTeamRank(year, month, date))
    });
}
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(TeamsPage);
//# sourceMappingURL=TeamsPage.js.map