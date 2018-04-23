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
const FormWithPairText_1 = __importDefault(require("../../component/Form/FormWithPairText"));
const colors_1 = require("../../utils/colors");
const react_native_action_sheet_1 = __importDefault(require("@yfuks/react-native-action-sheet"));
const acionOption = [
    '拍照',
    '从照片中选择',
    '取消'
];
const CANCEL_INDEX = 2;
class PersonalProfile extends React.Component {
    constructor(props) {
        super(props);
        /**
         * 点击了头像
         */
        this.onPictureClick = () => {
            console.log('点击了头像');
            react_native_action_sheet_1.default.showActionSheetWithOptions({
                title: '请选择',
                options: acionOption,
                cancelButtonIndex: CANCEL_INDEX,
                tintColor: 'blue'
            }, (buttonIndex) => {
                console.log('button clicked :', buttonIndex);
            });
        };
        /**
         * 点击了昵称
         */
        this.onNickNameClick = () => {
            console.log('点击了昵称');
            this.props.navigation.navigate('ChangeNickName');
        };
        /**
         * 点击了性别
         */
        this.onSexClick = () => {
            console.log('点击了性别');
        };
        /**
         * 点击了地址
         */
        this.onAddressClick = () => {
            console.log('点击了地址');
            this.props.navigation.navigate('ChangeAddress');
        };
    }
    render() {
        return (React.createElement(react_native_1.View, { style: styles.container }, React.createElement(react_native_1.View, { style: styles.partContainer }, React.createElement(react_native_1.TouchableOpacity, { activeOpacity: 0.5, onPress: () => { this.onPictureClick(); } }, React.createElement(react_native_1.View, { style: styles.pictureContainer }, React.createElement(react_native_1.Text, { style: [styles.leftText] }, '头像'), React.createElement(react_native_1.Image, { source: require('../../../assets/img/indicate/snail.jpg'), style: styles.image }))), React.createElement(FormWithPairText_1.default, { leftText: '昵称', rightText: this.props.loginParams.user ? this.props.loginParams.user.nickName : '暂无填写', onFormClick: () => this.onNickNameClick(), style: { paddingVertical: 15 }, arrowRight: true }), React.createElement(FormWithPairText_1.default, { leftText: '性别', rightText: this.props.loginParams.user ? this.props.loginParams.user.sex : '暂无填写', onFormClick: () => this.onSexClick(), style: { paddingVertical: 15 }, arrowRight: true }), React.createElement(FormWithPairText_1.default, { leftText: '所在地', rightText: this.props.loginParams.user ? this.props.loginParams.user.address : '暂无填写', onFormClick: () => this.onAddressClick(), cutOffLine: false, style: { paddingVertical: 15 }, arrowRight: true }))));
    }
}
PersonalProfile.navigationOptions = {
    title: '个人资料',
    tabBarVisible: false,
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
    },
    pictureContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 5,
        marginLeft: 15,
        paddingRight: 15,
        borderBottomColor: colors_1.commonColors.borderColor,
        borderBottomWidth: 0.5,
    },
    leftText: {
        fontSize: 15,
        color: colors_1.commonColors.formTextColor
    },
    image: {
        height: 50,
        width: 50,
        borderRadius: 25,
        backgroundColor: colors_1.commonColors.white
    }
});
function mapStateToProps(reducer) {
    return {
        loginParams: reducer.loginHandler
    };
}
function mapDispatchToProps() {
    return (dispatch) => ({});
}
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(PersonalProfile);
//# sourceMappingURL=PersonalProfile.js.map