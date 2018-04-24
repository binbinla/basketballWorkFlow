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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
const react_native_1 = require("react-native");
const react_redux_1 = require("react-redux"); // 引入connect函数
const Button_1 = __importDefault(require("../../component/Button"));
const colors_1 = require("../../utils/colors");
const react_native_easy_toast_1 = __importDefault(require("react-native-easy-toast"));
const react_native_star_rating_1 = __importDefault(require("react-native-star-rating"));
class EvaluateApp extends React.Component {
    constructor(props) {
        super(props);
        /**
         * 用户点按星星评价
         */
        this._onStarRatingPress = (count) => {
            this.setState({ buttonDisabled: false, starCount: count });
        };
        /**
         * 提交评分
         */
        this._submitEvaluate = () => {
            // 评分要不要传到reducer?貌似没什么地方会用到。
            const toast = this.refs.toast;
            toast.show("感谢您的评价，我们将再接再厉", react_native_easy_toast_1.DURATION.LONG, () => {
                this.props.navigation.goBack();
            });
        };
        this.state = {
            starCount: 0,
            buttonDisabled: true
        };
    }
    render() {
        return (React.createElement(react_native_1.View, { style: styles.container }, React.createElement(react_native_1.View, { style: styles.starContainer }, React.createElement(react_native_star_rating_1.default, { disabled: false, maxStars: 5, rating: this.state.starCount, selectedStar: this._onStarRatingPress, fullStarColor: colors_1.commonColors.topicColor })), React.createElement(react_native_1.View, { style: styles.illustrationContainer }, React.createElement(react_native_1.Text, { style: styles.text }, "\u8F7B\u70B9\u661F\u5F62\u6765\u8BC4\u5206\uFF0C\u76F8\u4FE1\u6211\u4F1A\u53D8\u5F97\u66F4\u597D\u54E6\uFF01")), React.createElement(Button_1.default, { text: '提交评分', onButtonClick: this._submitEvaluate, disabled: this.state.buttonDisabled }), React.createElement(react_native_easy_toast_1.default, { ref: "toast", position: "center" })));
    }
}
EvaluateApp.navigationOptions = {
    title: '评价',
    tabBarVisible: false,
};
const styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors_1.commonColors.white,
    },
    starContainer: {
        marginVertical: 15,
        marginHorizontal: 10
    },
    illustrationContainer: {
        marginHorizontal: 15,
        padding: 5
    },
    text: {
        fontSize: 12,
        color: colors_1.commonColors.underGray
    }
});
function mapStateToProps(reducer) {
    return {};
}
function mapDispatchToProps() {
    return (dispatch) => ({});
}
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(EvaluateApp);
//# sourceMappingURL=EvaluateApp.js.map