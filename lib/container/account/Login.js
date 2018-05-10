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
const loginAction = __importStar(require("../../actions/loginAction")); // 导入action方法
const react_navigation_1 = require("react-navigation");
const react_native_easy_toast_1 = __importDefault(require("react-native-easy-toast"));
const react_native_textinput_effects_1 = require("react-native-textinput-effects");
const Button_1 = __importDefault(require("../../component/Button"));
const colors_1 = require("../../utils/colors");
const resetAction = react_navigation_1.NavigationActions.reset({
    index: 0,
    actions: [
        react_navigation_1.NavigationActions.navigate({ routeName: 'Tabs' })
    ]
});
class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        // 点击登录按钮
        this.loginInPress = () => {
            // this.props.login();
            const toast = this.refs.toast;
            if (!this.state.account || this.state.account === "") {
                toast.show("账号不可为空", react_native_easy_toast_1.DURATION.SHORT);
                return;
            }
            if (!this.state.password || this.state.password === "") {
                toast.show("密码不可为空", react_native_easy_toast_1.DURATION.SHORT);
                return;
            }
            const re = /^1[3|4|5|7|8][0-9]{9}$/;
            if (!re.test(this.state.account)) {
                toast.show("账号格式不对，应为11位合法手机号码", react_native_easy_toast_1.DURATION.SHORT);
                return;
            }
            toast.show("登录成功", react_native_easy_toast_1.DURATION.SHORT, () => {
                this.props.login();
            });
        };
        this.state = {
            account: undefined,
            password: undefined
        };
    }
    shouldComponentUpdate(nextProps, nextState) {
        // 登录完成,切成功登录
        if (nextProps.loginParams.status === '登陆成功' && nextProps.loginParams.isSuccess) {
            this.props.navigation.dispatch(resetAction);
            return false;
        }
        return true;
    }
    render() {
        return (React.createElement(react_native_1.View, { style: styles.container },
            React.createElement(react_native_1.View, { style: styles.card },
                React.createElement(react_native_textinput_effects_1.Hoshi, { style: { backgroundColor: colors_1.commonColors.white }, label: '账号', maskColor: '#F9F7F6', borderColor: '#b76c94', onChangeText: (text) => { this.setState({ account: text }); } }),
                React.createElement(react_native_textinput_effects_1.Hoshi, { style: { backgroundColor: colors_1.commonColors.white }, label: '密码', maskColor: '#F9F7F6', borderColor: '#b76c94', secureTextEntry: true, onChangeText: (text) => { this.setState({ password: text }); } })),
            React.createElement(Button_1.default, { text: '登录', onButtonClick: () => this.loginInPress() }),
            React.createElement(react_native_easy_toast_1.default, { ref: "toast", position: "center" })));
    }
}
LoginPage.navigationOptions = {
    title: '登录',
    // headerStyle: {
    //   backgroundColor: commonColors.topicColor,
    // },
    // headerTintColor: commonColors.white,
    tabBarVisible: false,
    header: null
};
const styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors_1.commonColors.white
    },
    card: {
        marginTop: 25,
        marginBottom: 25,
        backgroundColor: colors_1.commonColors.textInputBg
    }
});
function mapStateToProps(reducer) {
    return {
        loginParams: reducer.loginHandler
    };
}
function mapDispatchToProps() {
    return (dispatch) => ({
        login: () => dispatch(loginAction.login())
    });
}
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(LoginPage);
//# sourceMappingURL=Login.js.map