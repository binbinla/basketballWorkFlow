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
const colors_1 = require("../../utils/colors");
class FormWithPairText extends React.Component {
    constructor(props) {
        super(props);
        this.renderArrowRight = () => {
            return (React.createElement(react_native_1.View, { style: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center' } }, React.createElement(react_native_1.Text, { style: [styles.rightText] }, this.props.rightText), React.createElement(react_native_1.Image, { style: styles.image, source: require('../../../assets/img/indicate/arrow-right.png') })));
        };
    }
    render() {
        const defaultCutOffLineStyle = { borderBottomWidth: 0.5, borderBottomColor: colors_1.commonColors.borderColor };
        let cutOffLineStyle;
        cutOffLineStyle = this.props.cutOffLine === undefined ? defaultCutOffLineStyle : this.props.cutOffLine ? defaultCutOffLineStyle : {};
        return (React.createElement(react_native_1.TouchableOpacity, { activeOpacity: 0.5, onPress: () => { this.props.onFormClick(); } }, React.createElement(react_native_1.View, { style: [styles.container, this.props.style, cutOffLineStyle] }, React.createElement(react_native_1.Text, { style: [styles.leftText] }, this.props.leftText), this.props.arrowRight ?
            this.renderArrowRight()
            :
                React.createElement(react_native_1.Text, { style: [styles.rightText] }, this.props.rightText))));
    }
}
exports.default = FormWithPairText;
const styles = react_native_1.StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: colors_1.commonColors.white,
        marginLeft: 15,
        paddingVertical: 5,
        paddingRight: 15,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    leftText: {
        fontSize: 15,
        color: colors_1.commonColors.formTextColor
    },
    rightText: {
        fontSize: 14,
        color: colors_1.commonColors.formSuperficialColor
    },
    image: {
        height: 15,
        width: 15,
        marginLeft: 10
    }
});
//# sourceMappingURL=FormWithPairText.js.map