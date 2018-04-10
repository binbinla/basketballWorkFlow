// 'use strict';
import * as types from '../constants/loginType';
import { User } from '../reducers/loginReducer';

// 模拟用户登录信息
const user: User = {
	name: 'erving',
	age: 23,
	nickName: 'hello_bin',
	phoneNumber: '188****6910',
	sex: '男',
	address: '广东省广州市'
}

// 访问登录接口,根据返回结果来划分action属于哪个type,然后返回对象,给reducer处理
export function login() {
	console.log("访问登录方法");
	return (dispatch: any) => {
		dispatch(isLogining());
		const result = fetch('https://www.baidu.com/')
			.then(res => {
				dispatch(loginSuccess(true, user));
			}).catch(e => {
				dispatch(loginError(false));
			})
	}
}

export function logout() {
	return (dispatch: any) => {
		dispatch(() => {
			return {
				type: types.DID_LOGOUT
			}
		})
	}
}

export function modifyNickName(newNickName: string) {
	console.log('changeNickName' + newNickName)
	return (dispatch: any) => {
		dispatch(changeNickName(newNickName));
	}
}

export function modifyAddress(newAddress: string) {
	console.log('changeAddress' + newAddress)
	return (dispatch: any) => {
		dispatch(changeAddress(newAddress));
	}
}

function changeAddress(newAddress: string) {
	return {
		type: types.MODIFY_ADDRESS,
		address: newAddress,
		user: user,
	}
}

function changeNickName(newNickName: string) {
	return {
		type: types.MODIFY_NICKNAME,
		nickName: newNickName,
		user: user,
	}
}

function isLogining() {
	return {
		type: types.LOGIN_IN_DOING
	}
}

function loginSuccess(isSuccess: boolean, user: User) {
	console.log('success');
	return {
		type: types.LOGIN_IN_DONE,
		user: user,
	}
}

function loginError(isSuccess: boolean) {
	console.log('error');
	return {
		type: types.LOGIN_IN_ERROR,
	}
}

