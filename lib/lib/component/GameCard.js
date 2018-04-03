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
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
const react_native_1 = require("react-native");
const colors_1 = require("../utils/colors");
class GameCard extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (React.createElement(react_native_1.View, { style: [styles.container, { backgroundColor: this.props.bgColor }] }, React.createElement(react_native_1.View, { style: styles.leftCard }, React.createElement(react_native_1.View, { style: { alignItems: 'center', justifyContent: 'center' } }, React.createElement(react_native_1.Image, { style: styles.image, source: require(this.props.homeTeamItem.logo) }), React.createElement(react_native_1.Text, { style: styles.teamName }, this.props.homeTeamItem.city)), React.createElement(react_native_1.Text, { style: styles.leftScore }, 100)), React.createElement(react_native_1.View, { style: styles.timeContainer }, React.createElement(react_native_1.Text, { style: styles.time }, 'Q4 4:32')), React.createElement(react_native_1.View, { style: styles.cutOffLine }), React.createElement(react_native_1.View, { style: styles.rightCard }, React.createElement(react_native_1.Text, { style: styles.rightScore }, 101), React.createElement(react_native_1.View, { style: { alignItems: 'center', justifyContent: 'center' } }, React.createElement(react_native_1.Image, { style: styles.image, source: require(this.props.guestTeamItem.logo) }), React.createElement(react_native_1.Text, { style: styles.teamName }, this.props.guestTeamItem.city)))));
    }
}
exports.default = GameCard;
const styles = react_native_1.StyleSheet.create({
    container: {
        // flex: 1,
        flexDirection: 'row',
        backgroundColor: colors_1.commonColors.white,
        borderRadius: 5,
        marginHorizontal: 10,
        paddingVertical: 8,
        paddingHorizontal: 10
    },
    leftCard: {
        flex: 1,
        flexDirection: 'row',
    },
    rightCard: {
        flex: 1,
        flexDirection: 'row',
    },
    leftScore: {
        fontSize: 18,
        color: colors_1.commonColors.white,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 40
    },
    rightScore: {
        fontSize: 18,
        color: colors_1.commonColors.white,
        marginRight: 10,
        marginLeft: 10,
        marginTop: 40
    },
    image: {
        height: 90,
        width: 90
    },
    cutOffLine: {
        width: 1,
        height: 50,
        backgroundColor: colors_1.commonColors.white,
        marginTop: 30
    },
    timeContainer: {
        position: 'absolute',
        right: 125,
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