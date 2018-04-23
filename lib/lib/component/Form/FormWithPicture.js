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
class FormWithPicture extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (React.createElement(react_native_1.TouchableOpacity, { activeOpacity: 0.5, onPress: () => { this.props.onFormClick(); } }, React.createElement(react_native_1.View, { style: [styles.container] }, React.createElement(react_native_1.Image, { source: require('../../../assets/img/indicate/snail.jpg'), style: styles.leftImage }), React.createElement(react_native_1.View, { style: styles.textContainer }, React.createElement(react_native_1.Text, { style: [styles.nickNameText] }, this.props.nickName), React.createElement(react_native_1.Text, { style: [styles.contactText] }, this.props.contactText)), React.createElement(react_native_1.Image, { source: require('../../../assets/img/indicate/arrow-right.png'), style: styles.rightImage }))));
    }
}
exports.default = FormWithPicture;
const styles = react_native_1.StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: colors_1.commonColors.white,
        marginLeft: 15,
        paddingVertical: 5,
        paddingRight: 15,
        alignItems: 'center',
        borderBottomWidth: 0.5,
        borderBottomColor: colors_1.commonColors.borderColor
    },
    textContainer: {
        marginLeft: 8,
        flexDirection: 'column'
    },
    nickNameText: {
        fontSize: 14,
        color: colors_1.commonColors.formTextColor
    },
    contactText: {
        fontSize: 14,
        color: colors_1.commonColors.formSuperficialColor,
        marginTop: 5
    },
    leftImage: {
        height: 50,
        width: 50,
        borderRadius: 25,
        backgroundColor: colors_1.commonColors.white
    },
    rightImage: {
        height: 15,
        width: 15,
        position: 'absolute',
        right: 15,
    }
});
//# sourceMappingURL=FormWithPicture.js.map