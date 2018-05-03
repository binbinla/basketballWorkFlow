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
const react_redux_1 = require("react-redux"); // 引入connect函数
const colors_1 = require("../../utils/colors");
class NewsWebView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const { params } = this.props.navigation.state;
        const newsUrl = params ? params.url : null;
        return (React.createElement(react_native_1.View, { style: styles.container },
            React.createElement(react_native_1.WebView, { source: { uri: newsUrl }, style: { width: '100%', height: '100%' }, startInLoadingState: true, renderLoading: () => {
                    return React.createElement(react_native_1.View, { style: styles.loadingContainer },
                        React.createElement(react_native_1.Text, { style: styles.loadingText }, "\u6570\u636E\u52A0\u8F7D\u4E2D..."));
                } })));
    }
}
NewsWebView.navigationOptions = {
    title: '新闻详情',
    tabBarVisible: false,
};
const styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors_1.commonColors.white,
    },
    loadingContainer: {
        alignItems: 'center',
        marginTop: '60%'
    },
    loadingText: {
        fontSize: 18,
        color: colors_1.commonColors.black
    }
});
function mapStateToProps(reducer) {
    return {};
}
function mapDispatchToProps() {
    return (dispatch) => ({});
}
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(NewsWebView);
//# sourceMappingURL=NewsWebView.js.map