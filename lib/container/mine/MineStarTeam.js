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
const StarTeamCard_1 = __importDefault(require("../../component/StarTeamCard"));
const starTeamAction = __importStar(require("../../actions/starTeamAction"));
class MineStarTeam extends React.Component {
    constructor(props) {
        super(props);
        this.selectedCount = 0;
        this.selectedIds = [];
        this.allTeams = [
            'atl',
            'bkn',
            'bos',
            'cha',
            'chi',
            'cle',
            'dal',
            'den',
            'det',
            'gsw',
            'hou',
            'ind',
            'lac',
            'lal',
            'mem',
            'mia',
            'mil',
            'min',
            'nop',
            'nyk',
            'okc',
            'orl',
            'phi',
            'phx',
            'por',
            'sac',
            'sas',
            'tor',
            'uta',
            'was'
        ];
        /**
         * 监听headerRight
         */
        this._navigatePress = () => {
            const toast = this.refs.toast;
            if (this.selectedCount === 0) {
                toast.show("您没有选择任何一支球队", react_native_easy_toast_1.DURATION.LONG, () => {
                    this.props.navigation.goBack();
                });
                return;
            }
            if (this.selectedCount > 1) {
                toast.show("暂时只支持关注单支球队", react_native_easy_toast_1.DURATION.LONG);
                return;
            }
            toast.show("保存成功", react_native_easy_toast_1.DURATION.LONG, () => {
                this.props.postStarTeamAttr(this.allTeams[this.selectedIds[0]]);
                this.props.navigation.goBack();
            });
        };
        this._renderRow = (rowData, sectionID, rowID, highlightRow) => {
            console.log('currentAttr ' + this.state.currentAttr);
            const hasSelected = this.state.currentAttr === rowData ? true : false;
            return (React.createElement(StarTeamCard_1.default, { teamAttr: rowData, id: rowID, hasSelected: hasSelected, callBackSelected: this.callBackSelected }));
        };
        this.callBackSelected = (selected, id) => {
            if (selected) {
                this.selectedCount = this.selectedCount + 1;
                this.selectedIds.push(id);
            }
            else {
                this.selectedCount = this.selectedCount - 1;
                const index = this.selectedIds.indexOf(id);
                if (index !== -1) {
                    this.selectedIds.splice(index, 1);
                }
            }
        };
        this.state = {
            remainTeams: new react_native_1.ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2
            }),
            currentAttr: this.props.starTeamProps.teamAttr
        };
    }
    componentWillMount() {
        const { remainTeams } = this.state;
        let rows = Object.assign([], this.allTeams);
        this.setState({
            remainTeams: remainTeams.cloneWithRows(rows)
        });
    }
    componentDidMount() {
        this.props.navigation.setParams({ navigatePress: this._navigatePress });
    }
    componentWillReceiveProps(nextProps) {
        if (this.props.starTeamProps.teamAttr !== nextProps.starTeamProps.teamAttr) {
            this.setState({ currentAttr: nextProps.starTeamProps.teamAttr });
        }
    }
    render() {
        return (React.createElement(react_native_1.View, { style: styles.container },
            React.createElement(react_native_1.ListView, { dataSource: this.state.remainTeams, renderRow: this._renderRow.bind(this), style: styles.listView }),
            React.createElement(react_native_easy_toast_1.default, { ref: "toast", position: "center" })));
    }
}
MineStarTeam.navigationOptions = ({ navigation, screenProps }) => ({
    title: '我的主队',
    tabBarVisible: false,
    headerRight: (React.createElement(react_native_1.Button, { onPress: () => navigation.state.params.navigatePress(), title: '保存', color: colors_1.commonColors.topicColor }))
});
const styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors_1.commonColors.white,
    },
    listView: {
        flex: 1,
        flexDirection: 'column',
        marginTop: 10
    },
});
function mapStateToProps(reducer) {
    return {
        starTeamProps: reducer.starTeamHandler
    };
}
function mapDispatchToProps() {
    return (dispatch) => ({
        postStarTeamAttr: (attr) => dispatch(starTeamAction.postStarTeamAttr(attr))
    });
}
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(MineStarTeam);
//# sourceMappingURL=MineStarTeam.js.map