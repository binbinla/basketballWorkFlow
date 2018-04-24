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
const colors_1 = require("../../../utils/colors");
const react_native_easy_toast_1 = __importDefault(require("react-native-easy-toast"));
const InputForm_1 = __importDefault(require("../../../component/InputForm"));
const loginAction = __importStar(require("../../../actions/loginAction"));
class ChangeNickName extends React.Component {
    constructor(props) {
        super(props);
        /**
         * 监听headerRight
         */
        this._navigatePress = () => {
            console.log('点击headerRight');
            const toast = this.refs.toast;
            this.props.modifyNickName(this.state.currentText);
            toast.show("更改成功", react_native_easy_toast_1.DURATION.LONG, () => {
                this.props.navigation.goBack();
            });
        };
        /**
         * 输入框的内容回调
         */
        this._inputCallback = (text) => {
            this.setState({ currentText: text });
        };
        this.state = {
            originText: this.props.loginParams.user ? this.props.loginParams.user.nickName : '',
            currentText: this.props.loginParams.user ? this.props.loginParams.user.nickName : ''
        };
    }
    componentDidMount() {
        this.props.navigation.setParams({ navigatePress: this._navigatePress });
    }
    render() {
        return (React.createElement(react_native_1.View, { style: styles.container }, React.createElement(InputForm_1.default, { style: { marginTop: 15 }, value: this.state.originText, inputCallback: this._inputCallback }), React.createElement(react_native_easy_toast_1.default, { ref: "toast", position: "center" })));
    }
}
ChangeNickName.navigationOptions = ({ navigation, screenProps }) => ({
    title: '昵称',
    tabBarVisible: false,
    headerRight: (React.createElement(react_native_1.Button, { onPress: () => navigation.state.params.navigatePress(), title: '保存', color: colors_1.commonColors.topicColor }))
});
const styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors_1.commonColors.gray
    },
});
function mapStateToProps(reducer) {
    return {
        loginParams: reducer.loginHandler
    };
}
function mapDispatchToProps() {
    return (dispatch) => ({
        modifyNickName: (nickName) => dispatch(loginAction.modifyNickName(nickName))
    });
}
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(ChangeNickName);
//# sourceMappingURL=ChangeNickName.js.map