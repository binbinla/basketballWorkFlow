import * as types from '../constants/feedbackTypes';
import { FeedBackState } from '../reducers/feedbackReducer';


export function submitFeedbackInfo(info: FeedBackState) {
  console.log('访问提交反馈信息的方法');
  return (dispatch: any) => {
    dispatch(didSubmitFeedbackInfo(info));
  }
}

function didSubmitFeedbackInfo(info: FeedBackState) {
  return {
    type: types.DID_SUBMIT_FEEDBACK,
    feedback: info
  }
}