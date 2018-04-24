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
class CommentInputForm extends React.Component {
    constructor(props) {
        super(props);
        /**
         * 点击输入框
         */
        this._inputLineOnPress = () => {
            this.props.onLineTouch(true);
        };
        this.state = {};
    }
    render() {
        return (React.createElement(react_native_1.View, { style: [styles.container] },
            React.createElement(react_native_1.TouchableOpacity, { style: styles.touchLine, onPress: this._inputLineOnPress.bind(this) },
                React.createElement(react_native_1.Text, { style: styles.text }, '我来评论...'))));
    }
}
exports.default = CommentInputForm;
const styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: colors_1.commonColors.white,
        height: 50,
        borderTopColor: colors_1.commonColors.borderColor,
        borderTopWidth: 0.5,
        paddingHorizontal: 10,
        paddingVertical: 5
    },
    touchLine: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'center',
        borderRadius: 10,
        backgroundColor: colors_1.commonColors.gray,
        paddingVertical: 5,
        paddingHorizontal: 10
    },
    text: {
        fontSize: 12,
        color: colors_1.commonColors.underGray,
    }
});
//# sourceMappingURL=CommentInputForm.js.map