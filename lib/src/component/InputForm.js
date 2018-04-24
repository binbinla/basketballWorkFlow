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
class InputForm extends React.Component {
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
            this.setState({ value: text }, () => {
                this.props.inputCallback(text);
            });
        };
        /**
         * 点击了清除按钮
         */
        this._clearOnPress = () => {
            const input = this.refs.input;
            input.clear();
            this.setState({ showClearImage: false });
        };
        this.state = {
            value: this.props.value,
            showClearImage: this.props.value === '' ? false : true
        };
    }
    render() {
        const placeholder = this.props.value === '' ? '未填写' : '';
        return (React.createElement(react_native_1.View, { style: [{ flex: 1 }, this.props.style] },
            React.createElement(react_native_1.TextInput, { ref: "input", value: this.state.value, style: [styles.container, { textAlignVertical: 'center' }], onChangeText: this._onChangeText, underlineColorAndroid: "transparent", placeholder: placeholder, autoFocus: true }),
            this.state.showClearImage ?
                React.createElement(react_native_1.TouchableOpacity, { style: styles.imageContainer, onPress: this._clearOnPress },
                    React.createElement(react_native_1.Image, { source: require('../../assets/img/indicate/clear-text.png'), style: styles.image }))
                :
                    null));
    }
}
exports.default = InputForm;
const styles = react_native_1.StyleSheet.create({
    container: {
        backgroundColor: colors_1.commonColors.white,
        height: 50,
    },
    imageContainer: {
        position: 'absolute',
        right: 15,
        top: 15
    },
    image: {
        width: 20,
        height: 20,
    }
});
//# sourceMappingURL=InputForm.js.map