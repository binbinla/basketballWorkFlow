
import * as types from '../constants/communityTypes';

export const fetchCommunity = () => {
  return (dispatch, getStore) => {
    dispatch(didFetchCommunity());
  }
}

const testIds: string[] = ['100001','100002','100003']

function didFetchCommunity() {
  return {
    type: types.DID_FETCH_COMMUNITY,
    topics: testIds
  }
}

export function commitComment(comment: string) {
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