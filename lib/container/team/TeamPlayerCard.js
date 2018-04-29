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
class TeamPlayerCard extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (React.createElement(react_native_1.View, { style: [styles.container] },
            React.createElement(react_native_1.View, { style: styles.leftContainer },
                React.createElement(react_native_1.Text, { style: styles.leftText }, this.props.combinePlayerItem.personalPlayer.name),
                React.createElement(react_native_1.Text, { style: [styles.leftText, { marginTop: 4 }] }, `${this.props.combinePlayerItem.personalPlayer.position}  ${this.props.combinePlayerItem.personalPlayer.number}`)),
            React.createElement(react_native_1.View, { style: styles.rightContainer },
                React.createElement(react_native_1.View, { style: styles.rightTop },
                    React.createElement(react_native_1.Text, { style: styles.rightTopText }, `年龄 ${this.props.combinePlayerItem.personalPlayer.age}`),
                    React.createElement(react_native_1.Text, { style: styles.rightTopText }, `身高 ${this.props.combinePlayerItem.personalPlayer.height}`),
                    React.createElement(react_native_1.Text, { style: styles.rightTopText }, `体重 ${this.props.combinePlayerItem.personalPlayer.weight}`)),
                React.createElement(react_native_1.Text, { style: styles.rightCenterText }, '场均数据：'),
                React.createElement(react_native_1.View, { style: styles.rightBottom },
                    React.createElement(react_native_1.Text, { style: styles.rightTopText }, `分数 ${this.props.combinePlayerItem.detailPlayer.pts}`),
                    React.createElement(react_native_1.Text, { style: styles.rightTopText }, `篮板 ${this.props.combinePlayerItem.detailPlayer.reb}`),
                    React.createElement(react_native_1.Text, { style: styles.rightTopText }, `助攻 ${this.props.combinePlayerItem.detailPlayer.ast}`)),
                React.createElement(react_native_1.View, { style: styles.rightBottom },
                    React.createElement(react_native_1.Text, { style: styles.rightTopText }, `上场时间 ${this.props.combinePlayerItem.detailPlayer.min}`),
                    React.createElement(react_native_1.Text, { style: styles.rightTopText }, `出场数 ${this.props.combinePlayerItem.detailPlayer.gp}`)))));
    }
}
exports.default = TeamPlayerCard;
const styles = react_native_1.StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: colors_1.commonColors.white,
        padding: 8,
        borderBottomColor: colors_1.commonColors.gray,
        borderBottomWidth: 1
    },
    leftContainer: {
        flex: 1.5,
        flexDirection: 'column',
        justifyContent: 'center'
    },
    leftText: {
        fontSize: 14,
        color: colors_1.commonColors.black
    },
    rightContainer: {
        flex: 2,
        flexDirection: 'column',
        marginLeft: 20,
        justifyContent: 'center'
    },
    rightTop: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    rightCenter: {},
    rightBottom: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    rightTopText: {
        fontSize: 12,
        color: colors_1.commonColors.black
    },
    rightCenterText: {
        fontSize: 14,
        color: colors_1.commonColors.black,
        marginTop: 5,
        marginBottom: 5
    }
});
//# sourceMappingURL=TeamPlayerCard.js.map