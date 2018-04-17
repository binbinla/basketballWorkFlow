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
const react_redux_1 = require("react-redux"); // 引入connect函数
const colors_1 = require("../../utils/colors");
const news_datas_1 = __importDefault(require("../../mock_datas/news_datas"));
class NewsDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const { params } = this.props.navigation.state;
        const newsId = params ? params.id : null;
        const newsTitle = news_datas_1.default[newsId].newsTitle;
        const newsImage = news_datas_1.default[newsId].newsImage;
        const newsDetailOne = news_datas_1.default[newsId].newsDetail[0];
        const newsDetailTwo = news_datas_1.default[newsId].newsDetail[1];
        const newsDetailThree = news_datas_1.default[newsId].newsDetail[2];
        return (React.createElement(react_native_1.ScrollView, { style: { flex: 1 }, showsVerticalScrollIndicator: false },
            React.createElement(react_native_1.View, { style: styles.container },
                React.createElement(react_native_1.View, { style: styles.titleContainer },
                    React.createElement(react_native_1.Text, { style: styles.titleText }, newsTitle)),
                React.createElement(react_native_1.View, { style: { height: 1, backgroundColor: colors_1.commonColors.borderColor, marginTop: 5 } }),
                React.createElement(react_native_1.Image, { style: styles.image, source: newsImage }),
                React.createElement(react_native_1.View, { style: styles.detailContainer },
                    React.createElement(react_native_1.Text, { style: styles.detailText }, newsDetailOne),
                    React.createElement(react_native_1.Text, { style: [styles.detailText, { marginTop: 10 }] }, newsDetailTwo),
                    React.createElement(react_native_1.Text, { style: [styles.detailText, { marginTop: 10 }] }, newsDetailThree)))));
    }
}
NewsDetail.navigationOptions = {
    title: '新闻一线',
    tabBarVisible: false,
};
const styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors_1.commonColors.white,
        padding: 10
    },
    titleContainer: {},
    titleText: {
        fontSize: 18,
        color: colors_1.commonColors.black,
        fontWeight: 'bold'
    },
    image: {
        width: '100%',
        height: 350,
        marginTop: 15
    },
    detailContainer: {
        marginTop: 15
    },
    detailText: {
        fontSize: 15,
        color: colors_1.commonColors.black,
        letterSpacing: 5,
        includeFontPadding: true
    }
});
function mapStateToProps(reducer) {
    return {};
}
function mapDispatchToProps() {
    return (dispatch) => ({});
}
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(NewsDetail);
//# sourceMappingURL=NewsDetail.js.map