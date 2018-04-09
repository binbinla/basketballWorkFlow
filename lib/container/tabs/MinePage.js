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
const react_navigation_1 = require("react-navigation");
const FormArrowToDetail_1 = __importDefault(require("../../component/Form/FormArrowToDetail"));
const FormWithPicture_1 = __importDefault(require("../../component/Form/FormWithPicture"));
const FormWithPairText_1 = __importDefault(require("../../component/Form/FormWithPairText"));
const Button_1 = __importDefault(require("../../component/Button"));
const colors_1 = require("../../utils/colors");
const loginAction = __importStar(require("../../actions/loginAction"));
const resetAction = react_navigation_1.NavigationActions.reset({
    index: 0,
    actions: [
        react_navigation_1.NavigationActions.navigate({ routeName: 'Hello' })
    ]
});
class MinePage extends React.Component {
    constructor(props) {
        super(props);
        /**
         * 跳转至 ‘个人资料页面’
         */
        this.personalProfile = () => {
            console.log('点击了个人资料');
            this.props.navigation.navigate('PersonalProfile');
        };
        /**
         * 跳转至 ‘帮助与反馈’
         */
        this.helpAndFeedback = () => {
            console.log('点击了意见与反馈');
            this.props.navigation.navigate('HelpAndFeedback');
        };
        /**
         * 跳转至 ‘关于页面’
         */
        this.aboutTheApp = () => {
            console.log('点击了关于');
            this.props.navigation.navigate('AboutApp');
        };
        /**
         * 跳转至 ‘登录页面’
         */
        this.logout = () => {
            console.log('点击了退出登录');
            const resetAction = react_navigation_1.NavigationActions.reset({
                index: 0,
                actions: [
                    react_navigation_1.NavigationActions.navigate({ routeName: 'Login' })
                ]
            });
            this.props.logout();
            this.props.navigation.dispatch(resetAction);
        };
    }
    render() {
        return (React.createElement(react_native_1.View, { style: styles.container },
            React.createElement(react_native_1.ScrollView, { style: { flex: 1 } },
                React.createElement(react_native_1.View, { style: styles.partContainer },
                    React.createElement(FormWithPicture_1.default, { nickName: '大陈', contactText: '188****6910', pictureUri: '../../../assets/img/indicate/snail.jpg', onFormClick: () => this.personalProfile() }),
                    React.createElement(FormWithPairText_1.default, { leftText: "\u6211\u7684\u79EF\u5206", rightText: "180", onFormClick: () => this.aboutTheApp(), cutOffLine: false })),
                React.createElement(react_native_1.View, { style: styles.partContainer },
                    React.createElement(FormArrowToDetail_1.default, { leftText: '我的主队', onFormClick: () => this.aboutTheApp(), cutOffLine: false })),
                React.createElement(react_native_1.View, { style: styles.partContainer },
                    React.createElement(FormArrowToDetail_1.default, { leftText: '意见与反馈', onFormClick: () => this.helpAndFeedback() }),
                    React.createElement(FormArrowToDetail_1.default, { leftText: '给个好评', onFormClick: () => this.aboutTheApp() }),
                    React.createElement(FormArrowToDetail_1.default, { leftText: '关于App', onFormClick: () => this.aboutTheApp(), cutOffLine: false })),
                React.createElement(Button_1.default, { style: { marginTop: 15, backgroundColor: colors_1.commonColors.topicColor }, text: "\u9000\u51FA\u767B\u5F55", onButtonClick: () => this.logout() }))));
    }
}
MinePage.navigationOptions = {
    title: '个人中心'
};
const styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors_1.commonColors.white,
    },
    partContainer: {
        marginTop: 10,
        borderTopColor: colors_1.commonColors.borderColor,
        borderTopWidth: 0.5,
        borderBottomColor: colors_1.commonColors.borderColor,
        borderBottomWidth: 0.5,
        paddingVertical: 5
    }
});
function mapStateToProps(reducer) {
    return {};
}
function mapDispatchToProps() {
    return (dispatch) => ({
        logout: () => dispatch(loginAction.logout())
    });
}
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(MinePage);
//# sourceMappingURL=MinePage.js.map