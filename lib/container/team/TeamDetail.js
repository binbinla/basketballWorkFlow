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
const TeamDetailCard_1 = __importDefault(require("./TeamDetailCard"));
const Spinner_1 = __importDefault(require("../../component/Spinner"));
const teamReducer_1 = require("../../reducers/teamReducer");
const team_map_1 = __importDefault(require("../../utils/team-map"));
const TeamDetailBasic_1 = __importDefault(require("./TeamDetailBasic"));
const teamAction = __importStar(require("../../actions/teamAction"));
const TeamDetailPlayers_1 = __importDefault(require("./TeamDetailPlayers"));
const ScrollableTabView = require('react-native-scrollable-tab-view');
class TeamDetail extends React.Component {
    constructor(props) {
        super(props);
        const { params } = this.props.navigation.state;
        this.state = {
            teamItem: params ? params.teamItem : null,
            rank: params ? params.rank : null,
            loading: true,
            combineItems: []
        };
    }
    componentWillMount() {
        this.props.getTeamDetail(this.state.teamItem.id);
    }
    componentWillReceiveProps(nextProps) {
        if (!nextProps.teamDetailParams.loading) {
            this.setState({ loading: false });
            this.setState({ teamDetail: nextProps.teamDetailParams.teamDetail, playerPersonal: nextProps.teamDetailParams.playerPersonal }, () => {
                let datas = [];
                if (this.state.playerPersonal) {
                    const length = this.state.playerPersonal.length;
                    for (let i = 0; i < length; i++) {
                        let data = {
                            personalPlayer: teamReducer_1.playerPersonalInitial,
                            detailPlayer: {
                                id: '',
                                name: '',
                                gp: 0,
                                pts: 0,
                                reb: 0,
                                ast: 0,
                                min: 0
                            }
                        };
                        const current = this.state.playerPersonal[i];
                        if (this.state.teamDetail) {
                            const index = this.state.teamDetail.players.findIndex((itemTwo) => { return itemTwo.id === current.id; });
                            console.log('index' + index);
                            if (index !== -1) {
                                data.detailPlayer = this.state.teamDetail.players[index];
                                data.personalPlayer = current;
                            }
                        }
                        if (data.detailPlayer.name !== '') {
                            // 过滤匹配不上的数据
                            datas.push(data);
                        }
                    }
                }
                this.setState({ combineItems: datas });
            });
        }
    }
    render() {
        const topicColor = team_map_1.default[this.state.teamItem.name].color;
        if (this.state.loading) {
            return (React.createElement(react_native_1.View, { style: styles.container },
                React.createElement(Spinner_1.default, { textContent: '努力加载中...', visible: this.state.loading, color: colors_1.commonColors.black, textStyle: { fontSize: 10, color: colors_1.commonColors.black } })));
        }
        else {
            return (React.createElement(react_native_1.View, { style: styles.container },
                React.createElement(TeamDetailCard_1.default, { teamDetail: this.state.teamDetail ? this.state.teamDetail : teamReducer_1.teamDetailInitial, teamItem: this.state.teamItem, rank: this.state.rank, zone: this.state.teamItem.zone }),
                React.createElement(ScrollableTabView, { initialPage: 0, tabBarUnderlineStyle: { backgroundColor: topicColor }, tabBarActiveTextColor: topicColor },
                    React.createElement(TeamDetailBasic_1.default, { teamDetail: this.state.teamDetail ? this.state.teamDetail : teamReducer_1.teamDetailInitial, tabLabel: '基本数据' }),
                    React.createElement(TeamDetailPlayers_1.default, { combineDatas: this.state.combineItems, tabLabel: '球员数据' }))));
        }
    }
}
TeamDetail.navigationOptions = ({ navigation }) => {
    const { params } = navigation.state;
    return {
        title: '',
        tabBarVisible: false,
        headerStyle: {
            backgroundColor: team_map_1.default[params.teamItem.name].color
        }
    };
};
const styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors_1.commonColors.white,
    },
});
function mapStateToProps(reducer) {
    return {
        teamDetailParams: reducer.fetchTeamDetailHandler
    };
}
function mapDispatchToProps() {
    return (dispatch) => ({
        getTeamDetail: (teamId) => dispatch(teamAction.getTeamDetail(teamId))
    });
}
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(TeamDetail);
//# sourceMappingURL=TeamDetail.js.map