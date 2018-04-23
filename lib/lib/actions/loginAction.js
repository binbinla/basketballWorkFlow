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
// 'use strict';
const types = __importStar(require("../constants/loginType"));
// 模拟用户登录信息
const user = {
    name: 'erving',
    age: 23,
    nickName: 'hello_bin',
    phoneNumber: '188****6910',
    sex: '男',
    address: '广东省广州市'
};
// 访问登录接口,根据返回结果来划分action属于哪个type,然后返回对象,给reducer处理
function login() {
    console.log("访问登录方法");
    return (dispatch) => {
        dispatch(isLogining());
        const result = fetch('https://www.baidu.com/')
            .then(res => {
            dispatch(loginSuccess(true, user));
        }).catch(e => {
            dispatch(loginError(false));
        });
    };
}
exports.login = login;
function logout() {
    return (dispatch) => {
        dispatch(() => {
            return {
                type: types.DID_LOGOUT
            };
        });
    };
}
exports.logout = logout;
function modifyNickName(newNickName) {
    console.log('changeNickName' + newNickName);
    return (dispatch) => {
        dispatch(changeNickName(newNickName));
    };
}
exports.modifyNickName = modifyNickName;
function modifyAddress(newAddress) {
    console.log('changeAddress' + newAddress);
    return (dispatch) => {
        dispatch(changeAddress(newAddress));
    };
}
exports.modifyAddress = modifyAddress;
function changeAddress(newAddress) {
    return {
        type: types.MODIFY_ADDRESS,
        address: newAddress,
        user: user,
    };
}
function changeNickName(newNickName) {
    return {
        type: types.MODIFY_NICKNAME,
        nickName: newNickName,
        user: user,
    };
}
function isLogining() {
    return {
        type: types.LOGIN_IN_DOING
    };
}
function loginSuccess(isSuccess, user) {
    console.log('success');
    return {
        type: types.LOGIN_IN_DONE,
        user: user,
    };
}
function loginError(isSuccess) {
    console.log('error');
    return {
        type: types.LOGIN_IN_ERROR,
    };
}
//# sourceMappingURL=loginAction.js.map