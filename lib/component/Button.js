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
class Button extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
        // <View style={[this.props.style, styles.container]}>
        //   <TouchableOpacity style={styles.touch} activeOpacity={0.8} onPress={() => {this.props.onButtonClick()}}>
        // <Text style={[this.props.buttonTextStyle, styles.text]}>
        //   {this.props.text}
        // </Text>          
        //   </TouchableOpacity>
        React.createElement(react_native_1.TouchableOpacity, { activeOpacity: 0.8, onPress: () => { this.props.onButtonClick(); } },
            React.createElement(react_native_1.View, { style: [this.props.style, styles.container] },
                React.createElement(react_native_1.Text, { style: [this.props.buttonTextStyle, styles.text] }, this.props.text))));
    }
}
exports.default = Button;
const styles = react_native_1.StyleSheet.create({
    container: {
        backgroundColor: colors_1.commonColors.buttonBg,
        borderRadius: 5,
        marginHorizontal: 15,
        paddingVertical: 8,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 15,
        color: colors_1.commonColors.white
    }
});
//# sourceMappingURL=Button.js.map