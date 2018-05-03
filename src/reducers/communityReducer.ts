
import * as types from '../constants/communityTypes';

export interface CommunityState {
  newsId: number,
  newsTitle: string,
  newsImage: string,
  newsDetail: string[],
  newsComments: string[]
}

const test_item_one: CommunityState = {
  newsId: 100001,
  newsTitle: 'Shams：伦纳德预计将缺席季后赛剩余全部赛程',
  newsImage: require('../../assets/img/news/shams_kawhi.jpg'),
  newsDetail: ['虎扑4月16日讯 根据雅虎记者Shams Charania报道，多位消息人士透露，马刺前锋科怀-伦纳德预计将缺席季后赛剩余的赛程，继续股四头肌伤势的恢复。', '多位消息人士透露，伦纳德一直在纽约与他的医疗团队进行恢复，目前未得到上场许可。多位消息人士透露，伦纳德在最近的训练中已加强强度，并专注于完全康复。消息人士透露，伦纳德在纽约的恢复项目得到了马刺医疗团队的许可。', '本赛季常规赛，伦纳德共上场9次，场均上场23.4分钟能得到16.2分4.7篮板2.3助攻2抢断1盖帽。'],
  newsComments: []
}

const test_item_two: CommunityState = {
  newsId: 100002,
  newsTitle: '詹姆斯：首轮0-1落后？我曾在总决赛1-3落后',
  newsImage: require('../../assets/img/news/james_interview.jpg'),
  newsDetail: ['虎扑4月16日讯 在今天的季后赛G1中，骑士以80-98输给了步行者。赛后，勒布朗-詹姆斯接受了采访。', '谈到本场的失利，詹姆斯表示：“我一直在季后赛中保持平稳心态。我想说，我现在是在首轮0-1落后，但我曾在总决赛中1-3落后。如果你们要提问未来两天有何感受，你们应该最后一个来问我这个问题。”骑士后卫罗德尼-胡德表示：“我们的出手不能这么紧，我们要出手投篮，进了就是进了，没进就是没进。但我感觉今晚我们的出手都很紧张，我们也需要命中一些罚球。我感觉下一场里我们会更放松的。”', '本场比赛，詹姆斯出场44分钟，17投7中得到24分10篮板12助攻；胡德出场21分钟，8投4中得到9分2篮板1助攻。'],
  newsComments: []
}

const test_item_three: CommunityState = {
  newsId: 100003,
  newsTitle: '詹姆斯生涯季后赛运动战进球数超越乔丹，升至历史第二',
  newsImage: require('../../assets/img/news/james_record.jpg'),
  newsDetail: ['虎扑4月16日讯 骑士与步行者的系列赛首场比赛正在进行当中，目前骑士前锋勒布朗-詹姆斯登场36分钟，投篮15中7得到22分8篮板11助攻。', '加上这7次运动战进球，詹姆斯的生涯季后赛运动战进球总数达到2189个，超越了迈克尔-乔丹（2188个），排名升至历史第二，排在第一位的是卡里姆-阿卜杜尔-贾巴尔（2356个）。', ''],
  newsComments: []  
}

const initialState = {
  ids: []
};

export function fetchCommunitysHandler(state = initialState, action: any) {
  let newState = state;
  switch (action.type) {
    case types.DID_FETCH_COMMUNITY: {
      newState = Object.assign({}, state, {
        ids: action.topics
      });
      return newState;
    }
    default: 
      return state;
  }  
}

export interface CommentState {
  loading: boolean,
  allComments: string[]
}

const commentInitialState: CommentState = {
  loading: true,
  allComments: []
}

export function commitCommentHandler(state: CommentState = commentInitialState, action: any) {
  state.allComments.push(action.commentContent);
  let newState = state;
  switch (action.type) {
    case types.DID_START_COMMIT_COMMENT: {
      newState = Object.assign({}, state, {
        loading: true
      })
      return newState;
    }
    case types.DID_FINISH_COMMIT_COMMENT: {
      newState = Object.assign({}, state, {
        loading: false,
        // allComment: newAllComments
      })
      return newState;
    }
    default: 
      return state;
  }
}