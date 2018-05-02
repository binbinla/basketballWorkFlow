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
class NewsCard extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        // const newsTitle = news_test_data[this.props.newsId].newsTitle;
        // const newsImage = news_test_data[this.props.newsId].newsImage;
        const imageFormat = this.props.news.picSource && this.props.news.picSource !== '' ? { uri: this.props.news.picSource }
            : require('../../assets/img/news/news_default.png');
        return (React.createElement(react_native_1.View, { style: [styles.container] },
            React.createElement(react_native_1.Image, { source: imageFormat, style: styles.imageContainer }),
            React.createElement(react_native_1.View, { style: styles.textContainer },
                React.createElement(react_native_1.Text, { style: styles.text }, this.props.news.title))));
    }
}
exports.default = NewsCard;
const styles = react_native_1.StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: colors_1.commonColors.white,
        padding: 8,
        borderBottomColor: colors_1.commonColors.borderColor,
        borderBottomWidth: 0.5
    },
    imageContainer: {
        width: 80,
        height: 80
    },
    textContainer: {
        marginLeft: 10,
        marginRight: 80,
    },
    text: {
        fontSize: 13,
        color: colors_1.commonColors.black
    }
});
//# sourceMappingURL=NewsCard.js.map