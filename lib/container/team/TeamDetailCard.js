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
const team_map_1 = __importDefault(require("../../utils/team-map"));
var Zone;
(function (Zone) {
    Zone[Zone["WEST"] = 1] = "WEST";
    Zone[Zone["EAST"] = 2] = "EAST";
})(Zone = exports.Zone || (exports.Zone = {}));
class TeamDetailCard extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const area = team_map_1.default[this.props.teamItem.name].city;
        const teamName = team_map_1.default[this.props.teamItem.name].team;
        const logo = team_map_1.default[this.props.teamItem.name].logo;
        const zone = this.props.zone === Zone.WEST ? '西部排名第 ' : '东部排名第 ';
        return (React.createElement(react_native_1.View, { style: [styles.container] },
            React.createElement(react_native_1.View, { style: styles.teamNameContainer },
                React.createElement(react_native_1.Text, { style: styles.areaText }, area),
                React.createElement(react_native_1.Text, { style: styles.nameText }, teamName)),
            React.createElement(react_native_1.Image, { style: styles.image, source: logo }),
            React.createElement(react_native_1.View, { style: styles.rightContainer },
                React.createElement(react_native_1.Text, { style: styles.rightText }, `${this.props.teamItem.win}胜-${this.props.teamItem.loss}负`),
                React.createElement(react_native_1.Text, { style: [styles.rightText, { marginTop: 5 }] }, `${zone}${this.props.rank}`))));
    }
}
exports.default = TeamDetailCard;
const styles = react_native_1.StyleSheet.create({
    container: {
        // flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 8
    },
    teamNameContainer: {
        flexDirection: 'column'
    },
    areaText: {
        fontSize: 14,
        color: colors_1.commonColors.white
    },
    nameText: {
        fontSize: 16,
        color: colors_1.commonColors.white,
        marginTop: 5
    },
    image: {
        width: 50,
        height: 50
    },
    rightContainer: {
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    rightText: {
        fontSize: 13,
        color: colors_1.commonColors.white
    }
});
//# sourceMappingURL=TeamDetailCard.js.map