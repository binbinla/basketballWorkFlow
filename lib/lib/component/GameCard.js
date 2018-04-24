"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule)
        return mod;
    var result = {};
    if (mod != null)
        for (var k in mod)
            if (Object.hasOwnProperty.call(mod, k))
                result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
const react_native_1 = require("react-native");
const colors_1 = require("../utils/colors");
const team_map_1 = __importDefault(require("../utils/team-map"));
class GameCard extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let containerStyle;
        let timeContainer;
        if (this.props.atDetail) {
            containerStyle = {},
                timeContainer = {
                    right: 140
                };
        }
        else {
            containerStyle = {
                borderRadius: 5,
                marginHorizontal: 10
            },
                timeContainer = {
                    right: 130
                };
        }
        const homeToLower = this.props.item.home.teamAbbreviate.toLowerCase();
        const visitorToLower = this.props.item.visitor.teamAbbreviate.toLowerCase();
        const homeTeamLogo = team_map_1.default[homeToLower].logo;
        const visitorTeamLogo = team_map_1.default[visitorToLower].logo;
        const homeTeamCity = team_map_1.default[homeToLower].city;
        const visitorTeamCity = team_map_1.default[visitorToLower].city;
        const homeTeamName = team_map_1.default[homeToLower].team;
        const visitorTeamName = team_map_1.default[visitorToLower].team;
        const homeScore = this.props.item.home.score;
        const visitorScore = this.props.item.visitor.score;
        const process = this.props.item.process.quarter + " " + this.props.item.process.time;
        return (React.createElement(react_native_1.View, { style: [styles.container, containerStyle, { backgroundColor: this.props.bgColor }] }, React.createElement(react_native_1.View, { style: styles.leftCard }, React.createElement(react_native_1.View, { style: { alignItems: 'center', justifyContent: 'center' } }, React.createElement(react_native_1.Image, { style: styles.image, source: homeTeamLogo }), React.createElement(react_native_1.Text, { style: styles.teamName }, homeTeamCity), React.createElement(react_native_1.Text, { style: styles.teamName }, homeTeamName)), React.createElement(react_native_1.Text, { style: styles.leftScore }, homeScore)), React.createElement(react_native_1.View, { style: [styles.timeContainer, timeContainer] }, React.createElement(react_native_1.Text, { style: styles.time }, process)), React.createElement(react_native_1.View, { style: styles.cutOffLine }), React.createElement(react_native_1.View, { style: styles.rightCard }, React.createElement(react_native_1.Text, { style: styles.rightScore }, visitorScore), React.createElement(react_native_1.View, { style: { alignItems: 'center', justifyContent: 'center' } }, React.createElement(react_native_1.Image, { style: styles.image, source: visitorTeamLogo }), React.createElement(react_native_1.Text, { style: styles.teamName }, visitorTeamCity), React.createElement(react_native_1.Text, { style: styles.teamName }, visitorTeamName)))));
    }
}
exports.default = GameCard;
const styles = react_native_1.StyleSheet.create({
    container: {
        // flex: 1,
        // borderRadius: 5,
        // marginHorizontal: 10,
        flexDirection: 'row',
        backgroundColor: colors_1.commonColors.white,
        paddingVertical: 8,
        paddingHorizontal: 5
    },
    leftCard: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    rightCard: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    leftScore: {
        fontSize: 18,
        color: colors_1.commonColors.white,
        marginLeft: 10,
    },
    rightScore: {
        fontSize: 18,
        color: colors_1.commonColors.white,
        marginRight: 10,
    },
    image: {
        height: 90,
        width: 90
    },
    cutOffLine: {
        width: 1,
        height: 50,
        backgroundColor: colors_1.commonColors.white,
        marginTop: 45
    },
    timeContainer: {
        position: 'absolute',
        right: 140,
        top: 5
    },
    time: {
        fontSize: 13,
        color: colors_1.commonColors.white
    },
    teamName: {
        fontSize: 15,
        color: colors_1.commonColors.white
    }
});
//# sourceMappingURL=GameCard.js.map