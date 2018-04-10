import * as types from '../constants/feedbackTypes';

export interface FeedBackState {
  title?: string,
  content?: string
}

// 初始状态
const initialState: FeedBackState = {
  title: undefined,
  content: undefined
}

export function feedbackHandler(state = initialState, action: any) {
  let newState: FeedBackState = state;
  switch (action.type) {
    case types.DID_SUBMIT_FEEDBACK: {
      newState = action.feedback;
      return newState;
    }
    default:
      return newState;
  }
}