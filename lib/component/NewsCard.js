"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
}
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
const react_native_1 = require("react-native");
const colors_1 = require("../utils/colors");
const news_datas_1 = __importDefault(require("../mock_datas/news_datas"));
class NewsCard extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const newsTitle = news_datas_1.default[this.props.newsId].newsTitle;
        const newsImage = news_datas_1.default[this.props.newsId].newsImage;
        return (React.createElement(react_native_1.View, { style: [styles.container] },
            React.createElement(react_native_1.Image, { source: newsImage, style: styles.imageContainer }),
            React.createElement(react_native_1.View, { style: styles.textContainer },
                React.createElement(react_native_1.Text, { style: styles.text }, newsTitle))));
    }
}
exports.default = NewsCard;
const styles = react_native_1.StyleSheet.create({
    container: {
        // flex: 1,
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