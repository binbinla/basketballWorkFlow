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
const colors_1 = require("../../utils/colors");
const TeamPlayerCard_1 = __importDefault(require("./TeamPlayerCard"));
class TeamDetailPlayers extends React.Component {
    constructor(props) {
        super(props);
        this.renderRow = (rowData, sectionID, rowID, highlightRow) => {
            return (React.createElement(react_native_1.TouchableOpacity, { style: { marginTop: 5 }, activeOpacity: 0.8, onPress: () => this._onItemPress(rowData) },
                React.createElement(TeamPlayerCard_1.default, { combinePlayerItem: rowData })));
        };
        const ds = new react_native_1.ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        let rows = Object.assign([], this.props.combineDatas);
        this.state = {
            dataSource: ds.cloneWithRows(rows)
        };
    }
    render() {
        return (React.createElement(react_native_1.View, { style: [styles.container] },
            React.createElement(react_native_1.ScrollView, { showsVerticalScrollIndicator: true }),
            React.createElement(react_native_1.ListView, { dataSource: this.state.dataSource, renderRow: this.renderRow.bind(this), style: styles.listView })));
    }
    /**
     * when a row was touched
     * @param
     */
    _onItemPress(item) {
        console.log(item + 'was pressed');
    }
}
exports.default = TeamDetailPlayers;
const styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: colors_1.commonColors.white
    },
    listView: {
        flexDirection: 'column'
    },
});
//# sourceMappingURL=TeamDetailPlayers.js.map