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
const team_map_1 = __importDefault(require("../../utils/team-map"));
const ScrollableTabView = require('react-native-scrollable-tab-view');
class TeamDetail extends React.Component {
    constructor(props) {
        super(props);
        const { params } = this.props.navigation.state;
        this.state = {
            teamItem: params ? params.teamItem : null,
            rank: params ? params.rank : null,
            zone: params ? params.zone : null,
            loading: true
        };
    }
    componentWillMount() {
    }
    componentWillReceiveProps(nextProps) {
    }
    render() {
        const topicColor = team_map_1.default[this.state.teamItem.name].color;
        if (this.state.loading) {
            return (React.createElement(react_native_1.View, { style: styles.container },
                React.createElement(Spinner_1.default, { textContent: '努力加载中...', visible: this.state.loading, color: colors_1.commonColors.black, textStyle: { fontSize: 10, color: colors_1.commonColors.black } })));
        }
        else {
            return (React.createElement(react_native_1.View, { style: styles.container },
                React.createElement(TeamDetailCard_1.default, { teamItem: this.state.teamItem, rank: this.state.rank, zone: this.state.zone }),
                React.createElement(ScrollableTabView, { initialPage: 0, tabBarUnderlineStyle: { backgroundColor: topicColor }, tabBarActiveTextColor: topicColor })));
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
    return {};
}
function mapDispatchToProps() {
    return (dispatch) => ({});
}
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(TeamDetail);
//# sourceMappingURL=TeamDetail.js.map