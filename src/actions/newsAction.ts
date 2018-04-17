import * as types from '../constants/newsTypes';
import { NewsState } from '../reducers/newsReducer';

export function fetchNews() {
  console.log('访问获取新闻的方法');
  return (dispatch: any) => {
    dispatch(didFetchNews());
  }
}

const testIds: string[] = ['100001','100002','100003']

function didFetchNews() {
  return {
    type: types.DID_FETCH_NEWS,
    news: testIds
  }
}