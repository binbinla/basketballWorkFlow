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
class FormArrowToDetail extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const defaultCutOffLineStyle = { borderBottomWidth: 0.5, borderBottomColor: colors_1.commonColors.borderColor };
        let cutOffLineStyle;
        cutOffLineStyle = this.props.cutOffLine === undefined ? defaultCutOffLineStyle : this.props.cutOffLine ? defaultCutOffLineStyle : {};
        return (React.createElement(react_native_1.TouchableOpacity, { activeOpacity: 0.5, onPress: () => { this.props.onFormClick(); } },
            React.createElement(react_native_1.View, { style: [styles.container, cutOffLineStyle] },
                React.createElement(react_native_1.Text, { style: [styles.text] }, this.props.leftText),
                React.createElement(react_native_1.Image, { source: require('../../../assets/img/indicate/arrow-right.png'), style: styles.image }))));
    }
}
exports.default = FormArrowToDetail;
const styles = react_native_1.StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: colors_1.commonColors.white,
        marginLeft: 15,
        paddingVertical: 10,
        paddingRight: 15,
        alignItems: 'center',
    },
    text: {
        fontSize: 15,
        color: colors_1.commonColors.formTextColor
    },
    image: {
        height: 15,
        width: 15,
        position: 'absolute',
        right: 15,
    }
});
//# sourceMappingURL=FormArrowToDetail.js.map