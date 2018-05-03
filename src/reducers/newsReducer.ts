import * as types from '../constants/newsTypes';
import news_datas from '../mock_datas/news_datas';
import { News } from '../model/news';

const initialState: News[] = []

export function fetchNewsHandler(state = initialState, action: any) {
  let newState: News[] = state;
  switch (action.type) {
    case types.DID_FETCH_NEWS: {
      newState = action.news
      return newState;
    }
    default: 
      return state;
  }  
}
