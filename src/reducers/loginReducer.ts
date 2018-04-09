// 'use strict';
import * as types from '../constants/loginType';

export interface LoginState {
  status: string,
  isSuccess: boolean,
  user: User | null
}

export interface User {
  name: string,
  age: number,
  nickName: string,
  phoneNumber: string,
  sex: string,
  address: string
}

// 初始状态
const initialState: LoginState = {
  status: '点击登录',
  isSuccess: false,
  user: null
}

// 不同类别的事件使用switch对应处理过程
export function loginHandler(state = initialState, action: any) {
  let newState: LoginState = state;
  switch (action.type) {
    case types.LOGIN_IN_DOING:
      newState = Object.assign({}, state, {
        status: '正在登陆',
        isSuccess: false,
        user: null
      });
      return newState
    case types.LOGIN_IN_DONE:
      newState = Object.assign({}, state, {
        status: '登陆成功',
        isSuccess: true,
        user: action.user        
      });
      return newState
    case types.LOGIN_IN_ERROR:
      newState = Object.assign({}, state, {
        status: '登录出错',
        isSuccess: true,
        user: null        
      });
      return newState
    case types.DID_LOGOUT:
      newState = Object.assign({}, state, {
        status: '退出登录',
        isSuccess: false,
        user: null
      });
      return newState
    default:
      return state;
  }
}

