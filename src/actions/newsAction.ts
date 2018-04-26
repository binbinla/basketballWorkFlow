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

export function commitComment(comment: string) {
  console.log('访问新增评论的方法');
  return (dispatch: any) => {
    dispatch(didStartCommitComment());
    setTimeout(() => {
      dispatch(didFinishCommitComment(comment));
    }, 2000)
  }
}

function didStartCommitComment() {
  return {
    type: types.DID_START_COMMIT_COMMENT
  }
}

function didFinishCommitComment(comment: string) {
  return {
    type: types.DID_FINISH_COMMIT_COMMENT,
    commentContent: comment
  }
}


