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
const loginAction = __importStar(require("../../actions/loginAction")); // 导入action方法
const react_navigation_1 = require("react-navigation");
const resetAction = react_navigation_1.NavigationActions.reset({
    index: 0,
    actions: [
        react_navigation_1.NavigationActions.navigate({ routeName: 'Tabs' })
    ]
});
class LoginPage extends React.Component {
    constructor(props) {
        super(props);
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
        // const { login } = this.props;
        return (React.createElement(react_native_1.View, { style: styles.container },
            React.createElement(react_native_1.Text, null,
                "\u72B6\u6001: ",
                this.props.loginParams.status),
            React.createElement(react_native_1.TouchableOpacity, { onPress: () => this.props.login(), style: { marginTop: 50 } },
                React.createElement(react_native_1.View, { style: styles.loginBtn },
                    React.createElement(react_native_1.Text, null, "\u767B\u5F55")))));
    }
}
LoginPage.navigationOptions = {
    title: 'LoginPage'
};
const styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F5FCFF'
    },
    loginBtn: {
        borderWidth: 1,
        padding: 5,
    }
});
function mapStateToProps(reducer) {
    return {
        loginParams: reducer.loginIn
    };
}
function mapDispatchToProps() {
    return (dispatch) => ({
        login: () => dispatch(loginAction.login())
    });
}
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(LoginPage);
//# sourceMappingURL=Login.js.map