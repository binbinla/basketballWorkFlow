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
class CommentCard extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const imageUrl = this.props.user ? this.props.user.imageResource : require('../../../assets/img/indicate/snail.jpg');
        const nickName = this.props.user ? this.props.user.nickName : '到此一游';
        return (React.createElement(react_native_1.View, { style: [styles.container] },
            React.createElement(react_native_1.View, { style: styles.imageContainer },
                React.createElement(react_native_1.Image, { style: styles.image, source: imageUrl })),
            React.createElement(react_native_1.View, { style: styles.textContainer },
                React.createElement(react_native_1.Text, { style: styles.nickName }, nickName),
                React.createElement(react_native_1.Text, { style: styles.comment }, this.props.commentContent))));
    }
}
exports.default = CommentCard;
const styles = react_native_1.StyleSheet.create({
    container: {
        // flex: 1,
        flexDirection: 'row',
        backgroundColor: colors_1.commonColors.white,
        padding: 10,
        borderBottomColor: colors_1.commonColors.borderColor,
        borderBottomWidth: 0.5
    },
    imageContainer: {
        marginRight: 8
    },
    image: {
        width: 50,
        height: 50
    },
    textContainer: {
        flexDirection: 'column'
    },
    nickName: {
        fontSize: 10,
        color: colors_1.commonColors.underGray
    },
    comment: {
        fontSize: 12,
        color: colors_1.commonColors.black,
        marginTop: 8
    }
});
//# sourceMappingURL=CommentCard.js.map