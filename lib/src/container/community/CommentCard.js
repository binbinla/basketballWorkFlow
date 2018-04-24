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
class GameCard extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (React.createElement(react_native_1.View, { style: [styles.container] },
            React.createElement(react_native_1.View, null,
                React.createElement(react_native_1.Image, { style: styles.imageContainer, source: require('../../../assets/img/indicate/snail.jpg') }))));
    }
}
exports.default = GameCard;
const styles = react_native_1.StyleSheet.create({
    container: {
        // flex: 1,
        flexDirection: 'row',
        backgroundColor: colors_1.commonColors.white,
        padding: 10,
        borderBottomColor: colors_1.commonColors.borderColor,
        borderBottomWidth: 0.5
    },
    imageContainer: {}
});
//# sourceMappingURL=CommentCard.js.map