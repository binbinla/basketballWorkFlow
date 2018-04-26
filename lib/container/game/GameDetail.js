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
const gameAction = __importStar(require("../../actions/gameAction"));
const GameCard_1 = __importDefault(require("../../component/GameCard"));
const team_map_1 = __importDefault(require("../../utils/team-map"));
const GamePlayerCard_1 = __importDefault(require("./GamePlayerCard"));
const Spinner_1 = __importDefault(require("../../component/Spinner"));
const ScrollableTabView = require('react-native-scrollable-tab-view');
class GameDetail extends React.Component {
    constructor(props) {
        super(props);
        const { params } = this.props.navigation.state;
        this.state = {
            gameItem: params ? params.gameItem : null,
            loading: true
        };
    }
    componentWillMount() {
        this.props.getGameDetail(this.state.gameItem.date[0], this.state.gameItem.date[1], this.state.gameItem.date[2], this.state.gameItem.id);
    }
    componentWillReceiveProps(nextProps) {
        if (!nextProps.gameDetailParams.loading) {
            this.setState({ loading: false });
            // console.log('next props home players' + JSON.stringify(nextProps.gameDetailParams.home.players))
            this.setState({ homePlayers: nextProps.gameDetailParams.home.players, visitorPlayers: nextProps.gameDetailParams.visitor.players });
        }
    }
    render() {
        const topicColor = team_map_1.default[this.state.gameItem.home.teamAbbreviate].color;
        if (this.state.loading) {
            return (React.createElement(react_native_1.View, { style: styles.container },
                React.createElement(Spinner_1.default, { textContent: '努力加载中...', visible: this.state.loading, color: colors_1.commonColors.black, textStyle: { fontSize: 10, color: colors_1.commonColors.black } })));
        }
        else {
            // console.log('this.state.players' + JSON.stringify(this.state.homePlayers))
            return (React.createElement(react_native_1.View, { style: styles.container },
                React.createElement(GameCard_1.default, { item: this.state.gameItem, bgColor: topicColor, atDetail: true }),
                React.createElement(ScrollableTabView, { initialPage: 0, tabBarUnderlineStyle: { backgroundColor: topicColor }, tabBarActiveTextColor: topicColor, locked: true },
                    React.createElement(GamePlayerCard_1.default, { tabLabel: `${team_map_1.default[this.state.gameItem.home.teamAbbreviate].team}`, players: this.state.homePlayers ? this.state.homePlayers : [] }),
                    React.createElement(GamePlayerCard_1.default, { tabLabel: `${team_map_1.default[this.state.gameItem.visitor.teamAbbreviate].team}`, players: this.state.visitorPlayers ? this.state.visitorPlayers : [] }))));
        }
    }
}
GameDetail.navigationOptions = ({ navigation }) => {
    const { params } = navigation.state;
    return {
        title: '',
        tabBarVisible: false,
        headerStyle: {
            backgroundColor: team_map_1.default[params.gameItem.home.teamAbbreviate].color
        },
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
        gameDetailParams: reducer.fetchGameDetailHandler
    };
}
function mapDispatchToProps() {
    return (dispatch) => ({
        getGameDetail: (year, month, date, gameId) => dispatch(gameAction.getGameDetail(year, month, date, gameId))
    });
}
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(GameDetail);
//# sourceMappingURL=GameDetail.js.map