"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
}
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
const react_native_1 = require("react-native");
const colors_1 = require("../../utils/colors");
const player_1 = require("../../model/player");
class GamePlayerCard extends React.Component {
    constructor(props) {
        super(props);
        this.renderTitle = (index) => {
            return (React.createElement(react_native_1.View, { style: [styles.playerBox, styles.titleRow], key: index },
                React.createElement(react_native_1.View, { style: styles.p2 },
                    React.createElement(react_native_1.View, { style: { flexDirection: 'column', flex: 1 } },
                        React.createElement(react_native_1.Text, { style: styles.title }, "\u540D\u5B57"))),
                React.createElement(react_native_1.View, { style: styles.p1 },
                    React.createElement(react_native_1.View, { style: { flexDirection: 'column', flex: 1 } },
                        React.createElement(react_native_1.Text, { style: styles.title }, "\u4F4D\u7F6E"))),
                React.createElement(react_native_1.View, { style: styles.p1 },
                    React.createElement(react_native_1.View, { style: { flexDirection: 'column', flex: 1 } },
                        React.createElement(react_native_1.Text, { style: styles.title }, "\u5F97\u5206"))),
                React.createElement(react_native_1.View, { style: styles.p1 },
                    React.createElement(react_native_1.View, { style: { flexDirection: 'column', flex: 1 } },
                        React.createElement(react_native_1.Text, { style: styles.title }, "\u52A9\u653B"))),
                React.createElement(react_native_1.View, { style: styles.p1 },
                    React.createElement(react_native_1.View, { style: { flexDirection: 'column', flex: 1 } },
                        React.createElement(react_native_1.Text, { style: styles.title }, "\u7BEE\u677F"))),
                React.createElement(react_native_1.View, { style: styles.p1 },
                    React.createElement(react_native_1.View, { style: { flexDirection: 'column', flex: 1 } },
                        React.createElement(react_native_1.Text, { style: styles.title }, "\u6295\u7BEE"))),
                React.createElement(react_native_1.View, { style: styles.p1 },
                    React.createElement(react_native_1.View, { style: { flexDirection: 'column', flex: 1 } },
                        React.createElement(react_native_1.Text, { style: styles.title }, "\u76D6\u5E3D"))),
                React.createElement(react_native_1.View, { style: styles.p1 },
                    React.createElement(react_native_1.View, { style: { flexDirection: 'column', flex: 1 } },
                        React.createElement(react_native_1.Text, { style: styles.title }, "\u62A2\u65AD"))),
                React.createElement(react_native_1.View, { style: styles.p1 },
                    React.createElement(react_native_1.View, { style: { flexDirection: 'column', flex: 1 } },
                        React.createElement(react_native_1.Text, { style: styles.title }, "\u4E09\u5206"))),
                React.createElement(react_native_1.View, { style: styles.p1 },
                    React.createElement(react_native_1.View, { style: { flexDirection: 'column', flex: 1 } },
                        React.createElement(react_native_1.Text, { style: styles.title }, "\u7F5A\u7BEE"))),
                React.createElement(react_native_1.View, { style: styles.p1 },
                    React.createElement(react_native_1.View, { style: { flexDirection: 'column', flex: 1 } },
                        React.createElement(react_native_1.Text, { style: styles.title }, "\u5931\u8BEF"))),
                React.createElement(react_native_1.View, { style: styles.p1 },
                    React.createElement(react_native_1.View, { style: { flexDirection: 'column', flex: 1 } },
                        React.createElement(react_native_1.Text, { style: styles.title }, "\u72AF\u89C4"))),
                React.createElement(react_native_1.View, { style: styles.p1 },
                    React.createElement(react_native_1.View, { style: { flexDirection: 'column', flex: 1 } },
                        React.createElement(react_native_1.Text, { style: styles.title }, "\u6B63\u8D1F\u503C"))),
                React.createElement(react_native_1.View, { style: [styles.p1, { borderRightWidth: 0 }] },
                    React.createElement(react_native_1.View, { style: { flexDirection: 'column', flex: 1 } },
                        React.createElement(react_native_1.Text, { style: styles.title }, "\u4E0A\u573A\u65F6\u95F4")))));
        };
        this.renderRow = (rowData, sectionID, rowID, highlightRow) => {
            const index = parseInt(rowID, 10);
            if (index === 0) {
                return this.renderTitle(0);
            }
            else {
                return (React.createElement(react_native_1.View, { style: [styles.playerBox] },
                    React.createElement(react_native_1.View, { style: [styles.p2, { alignItems: 'center' }] },
                        React.createElement(react_native_1.Text, { style: styles.p2Name }, rowData.last_name)),
                    React.createElement(react_native_1.View, { style: styles.p1 },
                        React.createElement(react_native_1.View, { style: { flexDirection: 'column', flex: 1 } },
                            React.createElement(react_native_1.Text, { style: styles.dataBox }, this.mapPositionToChinese(rowData.starting_position)))),
                    React.createElement(react_native_1.View, { style: styles.p1 },
                        React.createElement(react_native_1.View, { style: { flexDirection: 'column', flex: 1 } },
                            React.createElement(react_native_1.Text, { style: styles.dataBox }, rowData.points))),
                    React.createElement(react_native_1.View, { style: styles.p1 },
                        React.createElement(react_native_1.View, { style: { flexDirection: 'column', flex: 1 } },
                            React.createElement(react_native_1.Text, { style: styles.dataBox }, rowData.assists))),
                    React.createElement(react_native_1.View, { style: styles.p1 },
                        React.createElement(react_native_1.View, { style: { flexDirection: 'column', flex: 1 } },
                            React.createElement(react_native_1.Text, { style: styles.dataBox }, String(Number(rowData.rebounds_offensive) + Number(rowData.rebounds_defensive))))),
                    React.createElement(react_native_1.View, { style: styles.p1 },
                        React.createElement(react_native_1.View, { style: { flexDirection: 'column', flex: 1 } },
                            React.createElement(react_native_1.Text, { style: styles.dataBox }, `${rowData.field_goals_made}/${rowData.field_goals_attempted}`))),
                    React.createElement(react_native_1.View, { style: styles.p1 },
                        React.createElement(react_native_1.View, { style: { flexDirection: 'column', flex: 1 } },
                            React.createElement(react_native_1.Text, { style: styles.dataBox }, rowData.blocks))),
                    React.createElement(react_native_1.View, { style: styles.p1 },
                        React.createElement(react_native_1.View, { style: { flexDirection: 'column', flex: 1 } },
                            React.createElement(react_native_1.Text, { style: styles.dataBox }, rowData.steals))),
                    React.createElement(react_native_1.View, { style: styles.p1 },
                        React.createElement(react_native_1.View, { style: { flexDirection: 'column', flex: 1 } },
                            React.createElement(react_native_1.Text, { style: styles.dataBox }, `${rowData.three_pointers_made}/${rowData.three_pointers_attempted}`))),
                    React.createElement(react_native_1.View, { style: styles.p1 },
                        React.createElement(react_native_1.View, { style: { flexDirection: 'column', flex: 1 } },
                            React.createElement(react_native_1.Text, { style: styles.dataBox }, `${rowData.free_throws_made}/${rowData.free_throws_attempted}`))),
                    React.createElement(react_native_1.View, { style: styles.p1 },
                        React.createElement(react_native_1.View, { style: { flexDirection: 'column', flex: 1 } },
                            React.createElement(react_native_1.Text, { style: styles.dataBox }, rowData.turnovers))),
                    React.createElement(react_native_1.View, { style: styles.p1 },
                        React.createElement(react_native_1.View, { style: { flexDirection: 'column', flex: 1 } },
                            React.createElement(react_native_1.Text, { style: styles.dataBox }, rowData.fouls))),
                    React.createElement(react_native_1.View, { style: styles.p1 },
                        React.createElement(react_native_1.View, { style: { flexDirection: 'column', flex: 1 } },
                            React.createElement(react_native_1.Text, { style: styles.dataBox }, rowData.plus_minus))),
                    React.createElement(react_native_1.View, { style: [styles.p1, { borderRightWidth: 0 }] },
                        React.createElement(react_native_1.View, { style: { flexDirection: 'column', flex: 1 } },
                            React.createElement(react_native_1.Text, { style: styles.dataBox }, rowData.minutes)))));
            }
        };
        this.mapPositionToChinese = (position) => {
            if (position === 'C') {
                return player_1.PlayerPosition.C;
            }
            else if (position === 'PF') {
                return player_1.PlayerPosition.PF;
            }
            else if (position === 'PG') {
                return player_1.PlayerPosition.PG;
            }
            else if (position === 'SF') {
                return player_1.PlayerPosition.SF;
            }
            else {
                return player_1.PlayerPosition.SG;
            }
        };
        const ds = new react_native_1.ListView.DataSource({ rowHasChanged: (r1, r2) => r1.person_id !== r2.person_id });
        let rows = Object.assign([], this.props.players);
        rows.unshift({
            last_name: '',
            starting_position: '',
            points: '',
            assists: '',
            rebounds_offensive: '',
            rebounds_defensive: '',
            field_goals_made: '',
            field_goals_attempted: '',
            blocks: '',
            steals: '',
            three_pointers_made: '',
            three_pointers_attempted: '',
            free_throws_made: '',
            free_throws_attempted: '',
            turnovers: '',
            fouls: '',
            plus_minus: '',
            minutes: '',
        }); // unshift an empty object, use it as title row    
        this.state = {
            dataSource: ds.cloneWithRows(rows)
        };
    }
    render() {
        // console.log('players card players' + JSON.stringify(this.props.players));
        return (React.createElement(react_native_1.View, { style: [styles.container] },
            React.createElement(react_native_1.ScrollView, { style: [styles.scrollView], automaticallyAdjustContentInsets: false, horizontal: true },
                React.createElement(react_native_1.ListView, { dataSource: this.state.dataSource, renderRow: this.renderRow.bind(this), style: styles.listView }))));
    }
}
exports.default = GamePlayerCard;
const styles = react_native_1.StyleSheet.create({
    container: {
        flex: 13,
        // flexDirection: 'row',
        backgroundColor: colors_1.commonColors.white,
        position: 'relative',
    },
    scrollView: {
        flex: 1,
        width: 400,
    },
    listView: {
        flex: 1,
        flexDirection: 'column',
        marginBottom: 48,
        marginRight: 60,
        width: 1500
    },
    playerBox: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'stretch',
        borderBottomColor: colors_1.commonColors.borderColor,
        borderBottomWidth: 1,
        height: 30
    },
    titleRow: {
        borderBottomWidth: 2,
        borderStyle: 'solid'
    },
    p1: {
        borderRightColor: colors_1.commonColors.borderColor,
        borderRightWidth: 1,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    title: {
        alignSelf: 'flex-start',
        color: '#7F7F7F',
        fontSize: 12
    },
    p2: {
        alignItems: 'center',
        borderRightColor: colors_1.commonColors.borderColor,
        borderRightWidth: 2,
        flex: 1,
        flexDirection: 'row'
    },
    p2Name: {
        color: colors_1.commonColors.black,
        fontSize: 12,
        paddingLeft: 5
    },
    dataBox: {
        alignSelf: 'center',
        color: colors_1.commonColors.black,
        fontSize: 10,
    }
});
//# sourceMappingURL=GamePlayerCard.js.map