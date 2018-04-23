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
const colors_1 = require("../utils/colors");
const team_map_1 = __importDefault(require("../utils/team-map"));
class TeamCard extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const area = team_map_1.default[this.props.item.name].city;
        const teamName = team_map_1.default[this.props.item.name].team;
        const logo = team_map_1.default[this.props.item.name].logo;
        return (React.createElement(react_native_1.View, { style: [styles.container] },
            React.createElement(react_native_1.View, { style: styles.leftContainer },
                React.createElement(react_native_1.Text, { style: styles.rankingText }, this.props.rank),
                React.createElement(react_native_1.View, { style: { marginLeft: 15 } },
                    React.createElement(react_native_1.Text, { style: styles.areaText },
                        " ",
                        area,
                        " "),
                    React.createElement(react_native_1.Text, { style: styles.teamNameText },
                        " ",
                        teamName,
                        " "))),
            React.createElement(react_native_1.View, { style: styles.rightContainer },
                React.createElement(react_native_1.Text, { style: styles.scoreText }, `${this.props.item.win}胜-${this.props.item.loss}负`),
                React.createElement(react_native_1.Image, { style: styles.image, source: logo }))));
    }
}
exports.default = TeamCard;
const styles = react_native_1.StyleSheet.create({
    container: {
        // flex: 1,
        flexDirection: 'row',
        backgroundColor: colors_1.commonColors.white,
        paddingHorizontal: 15,
        paddingVertical: 8,
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomColor: colors_1.commonColors.borderColor,
        borderBottomWidth: 0.5
    },
    leftContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    rightContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    rankingText: {
        fontSize: 14,
        color: '#667893'
    },
    areaText: {
        fontSize: 16,
        color: '#647791'
    },
    teamNameText: {
        fontSize: 14,
        color: '#8D9AAD',
        marginTop: 4
    },
    scoreText: {
        fontSize: 14,
        color: colors_1.commonColors.black,
    },
    image: {
        width: 50,
        height: 50,
        marginLeft: 20
    }
});
//# sourceMappingURL=TeamCard.js.map