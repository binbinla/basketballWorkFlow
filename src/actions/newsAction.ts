import * as types from '../constants/newsTypes';
import Channel from '../network/index';

export const fetchNews = (num: number, start: number) => {
  return (dispatch, getStore) => {
    // const channel = new Channel();
    // return channel.getRecentNews(num, start)
    //   .then(data => {
    //     return dispatch({
    //       type: types.DID_FETCH_NEWS,
    //       news: data
    //     })
    //   })
    const channel = new Channel();    
    const data = channel.getRecentNews(num, start)
    return dispatch({
      type: types.DID_FETCH_NEWS,
      news: data
    })
  }
}

