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
// 初始状态
const initialState = {
    status: '点击登录',
    isSuccess: false,
    user: null
};
// 不同类别的事件使用switch对应处理过程
function loginHandler(state = initialState, action) {
    let newState = state;
    let newUser;
    switch (action.type) {
        case types.LOGIN_IN_DOING:
            newState = Object.assign({}, state, {
                status: '正在登陆',
                isSuccess: false,
                user: null
            });
            return newState;
        case types.LOGIN_IN_DONE:
            newState = Object.assign({}, state, {
                status: '登陆成功',
                isSuccess: true,
                user: action.user
            });
            return newState;
        case types.LOGIN_IN_ERROR:
            newState = Object.assign({}, state, {
                status: '登录出错',
                isSuccess: true,
                user: null
            });
            return newState;
        case types.DID_LOGOUT:
            newState = Object.assign({}, state, {
                status: '退出登录',
                isSuccess: false,
                user: null
            });
            return newState;
        case types.MODIFY_NICKNAME:
            newUser = Object.assign({}, action.user, {
                nickName: action.nickName
            });
            newState = Object.assign({}, state, {
                user: newUser
            });
            return newState;
        case types.MODIFY_ADDRESS:
            newUser = Object.assign({}, action.user, {
                address: action.address
            });
            newState = Object.assign({}, state, {
                user: newUser
            });
            // console.log('reducer change address')
            return newState;
        default:
            return state;
    }
}
exports.loginHandler = loginHandler;
//# sourceMappingURL=loginReducer.js.map