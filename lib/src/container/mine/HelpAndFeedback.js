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
const Button_1 = __importDefault(require("../../component/Button"));
const colors_1 = require("../../utils/colors");
const feedbackAction = __importStar(require("../../actions/feedbackAction"));
const react_native_easy_toast_1 = __importDefault(require("react-native-easy-toast"));
class HelpAndFeedback extends React.Component {
    constructor(props) {
        super(props);
        /**
         * 变更标题内容
         */
        this._onChangeTitleText = (text) => {
            this.setState({ feedbackTitle: text });
        };
        /**
         * 变更文本内容
         */
        this._onChangeContentText = (text) => {
            this.setState({ feedbackContent: text }, () => {
                if (text === '') {
                    this.setState({ disabled: true });
                }
                else {
                    this.setState({ disabled: false });
                }
            });
        };
        /**
         * 点击提交按钮
         */
        this._submitClick = () => {
            const toast = this.refs.toast;
            const info = {
                title: this.state.feedbackTitle,
                content: this.state.feedbackContent
            };
            this.props.submitFeedbackInfo(info);
            toast.show("您的反馈我们已经收到，感谢您的建议。", react_native_easy_toast_1.DURATION.LONG, () => {
                this.props.navigation.goBack();
            });
        };
        this.state = {
            feedbackTitle: undefined,
            feedbackContent: undefined,
            disabled: true
        };
    }
    render() {
        return (React.createElement(react_native_1.View, { style: styles.container },
            React.createElement(react_native_1.TextInput, { style: [styles.titleContainer, { textAlignVertical: 'top' }], onChangeText: this._onChangeTitleText, underlineColorAndroid: "transparent", multiline: true, placeholder: '请输入您的反馈主题' }),
            React.createElement(react_native_1.TextInput, { style: [styles.inputContainer, { textAlignVertical: 'top' }], onChangeText: this._onChangeContentText, 
                // onChange={this._onChange}
                underlineColorAndroid: "transparent", multiline: true, placeholder: '请提出您宝贵的意见' }),
            React.createElement(Button_1.default, { text: '提交', onButtonClick: this._submitClick, disabled: this.state.disabled }),
            React.createElement(react_native_easy_toast_1.default, { ref: "toast", position: "center" })));
    }
}
HelpAndFeedback.navigationOptions = {
    title: '意见与反馈',
    tabBarVisible: false,
};
const styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors_1.commonColors.white,
    },
    inputContainer: {
        height: 180,
        borderColor: colors_1.commonColors.borderColor,
        borderWidth: 1,
        padding: 5,
        margin: 15
    },
    titleContainer: {
        height: 40,
        borderColor: colors_1.commonColors.borderColor,
        borderWidth: 1,
        padding: 5,
        margin: 15
    }
});
function mapStateToProps(reducer) {
    return {};
}
function mapDispatchToProps() {
    return (dispatch) => ({
        submitFeedbackInfo: (info) => dispatch(feedbackAction.submitFeedbackInfo(info))
    });
}
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(HelpAndFeedback);
//# sourceMappingURL=HelpAndFeedback.js.map