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
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
const react_native_1 = require("react-native");
const react_redux_1 = require("react-redux"); // 引入connect函数
const colors_1 = require("../../utils/colors");
class AboutApp extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (React.createElement(react_native_1.View, { style: styles.container }, React.createElement(react_native_1.View, { style: styles.topContainer }, React.createElement(react_native_1.Text, { style: styles.appName }, '放学打球'), React.createElement(react_native_1.Text, { style: styles.version }, '版本：1.0.0')), React.createElement(react_native_1.View, { style: styles.bottomContainer }, React.createElement(react_native_1.Text, { style: styles.contact }, '微信号：carry7654321'), React.createElement(react_native_1.Text, { style: styles.copyRight }, 'Copyright@2018 by hellobin.chen | Erving'))));
    }
}
AboutApp.navigationOptions = {
    title: '关于我们',
    tabBarVisible: false,
};
const styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors_1.commonColors.white,
        justifyContent: 'space-between'
    },
    topContainer: {
        marginTop: 25,
        justifyContent: 'center',
        alignItems: 'center'
    },
    bottomContainer: {
        marginBottom: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    appName: {
        fontSize: 25,
        color: colors_1.commonColors.topicColor,
        fontWeight: 'bold'
    },
    version: {
        fontSize: 13,
        color: '#4E4C4D'
    },
    contact: {
        fontSize: 13,
        color: '#567DDA'
    },
    copyRight: {
        fontSize: 13,
        color: '#B1AEB5'
    }
});
function mapStateToProps(reducer) {
    return {};
}
function mapDispatchToProps() {
    return (dispatch) => ({});
}
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(AboutApp);
//# sourceMappingURL=AboutApp.js.map