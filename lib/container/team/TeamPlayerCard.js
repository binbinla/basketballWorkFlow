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
                React.createElement(react_native_1.Text, { style: styles.leftText }),
                React.createElement(react_native_1.Text, { style: [styles.leftText, { marginTop: 4 }] })),
            React.createElement(react_native_1.View, { style: styles.rightContainer },
                React.createElement(react_native_1.View, { style: styles.rightTop },
                    React.createElement(react_native_1.Text, { style: styles.rightTopText }),
                    React.createElement(react_native_1.Text, { style: styles.rightTopText }),
                    React.createElement(react_native_1.Text, { style: styles.rightTopText })),
                React.createElement(react_native_1.Text, { style: styles.rightCenterText }, '场均数据：'),
                React.createElement(react_native_1.View, { style: styles.rightBottom },
                    React.createElement(react_native_1.Text, { style: styles.rightTopText }),
                    React.createElement(react_native_1.Text, { style: styles.rightTopText }),
                    React.createElement(react_native_1.Text, { style: styles.rightTopText }),
                    React.createElement(react_native_1.Text, { style: styles.rightTopText }),
                    React.createElement(react_native_1.Text, { style: styles.rightTopText })))));
    }
}
exports.default = TeamPlayerCard;
const styles = react_native_1.StyleSheet.create({
    container: {
        // flex: 1,
        flexDirection: 'row',
        backgroundColor: colors_1.commonColors.white,
        padding: 8,
    },
    leftContainer: {
        flexDirection: 'column',
        justifyContent: 'center'
    },
    leftText: {
        fontSize: 14,
        color: colors_1.commonColors.black
    },
    rightContainer: {
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
        color: colors_1.commonColors.gray
    },
    rightCenterText: {
        fontSize: 14,
        color: colors_1.commonColors.black,
        marginTop: 5,
        marginBottom: 5
    }
});
//# sourceMappingURL=TeamPlayerCard.js.map