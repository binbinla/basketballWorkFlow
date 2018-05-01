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
const colors_1 = require("../utils/colors");
class CustomSearchBar extends React.Component {
    constructor(props) {
        super(props);
        /**
       * 内容变更
       */
        this._onChangeText = (text) => {
            if (text !== '') {
                this.setState({ showClearImage: true });
            }
            else {
                this.setState({ showClearImage: false });
            }
            this.props.inputCallback(text);
        };
        /**
         * 点击了清除按钮
         */
        this._clearOnPress = () => {
            const input = this.refs.input;
            input.clear();
            this.setState({ showClearImage: false });
        };
        /**
         * 点击了取消按钮
         */
        this._cancelOnPress = () => {
            this.props.cancelOnPress();
        };
        this.state = {
            showClearImage: false
        };
    }
    render() {
        return (React.createElement(react_native_1.View, { style: [styles.container] },
            React.createElement(react_native_1.View, { style: styles.textInputContainer },
                React.createElement(react_native_1.TextInput, { ref: "input", style: [styles.textInput, { textAlignVertical: 'center' }], onChangeText: this._onChangeText, underlineColorAndroid: "transparent", placeholder: '按日期搜索比赛 eg:2018/03/14', autoFocus: true, onSubmitEditing: () => this.props.onSubmitEditing() }),
                this.state.showClearImage ?
                    React.createElement(react_native_1.TouchableOpacity, { style: styles.imageContainer, onPress: this._clearOnPress },
                        React.createElement(react_native_1.Image, { source: require('../../assets/img/indicate/clear-text.png'), style: styles.image }))
                    :
                        null),
            React.createElement(react_native_1.TouchableOpacity, { onPress: this._cancelOnPress, activeOpacity: 0.5, style: styles.cancelContainer },
                React.createElement(react_native_1.Text, { style: styles.cancelText }, "\u53D6\u6D88"))));
    }
}
exports.default = CustomSearchBar;
const styles = react_native_1.StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: colors_1.commonColors.topicColor,
        padding: 10,
        alignItems: 'center'
    },
    textInputContainer: {
        flex: 1,
        backgroundColor: colors_1.commonColors.white,
        borderRadius: 8
    },
    textInput: {
        backgroundColor: colors_1.commonColors.white,
        height: 40,
        borderRadius: 4
    },
    imageContainer: {
        position: 'absolute',
        right: 10,
        top: 10
    },
    image: {
        width: 20,
        height: 20,
    },
    cancelContainer: {
        flex: 0,
        marginLeft: 10,
        paddingHorizontal: 2
    },
    cancelText: {
        fontSize: 18,
        color: colors_1.commonColors.white
    }
});
//# sourceMappingURL=CustomSearchBar.js.map