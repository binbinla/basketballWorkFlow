
import { GameType, GameState } from '../reducers/gameReducer'; 

export interface GameGeneralResult {
  unstart: GameState[],
  live: GameState[],
  over: GameState[],
  gameDate?: string,
  weekDay?: string 
}


const producer = {

  /**
   * return {live: [], unstart: [], over: []}
   */
  gameGeneral: (res): GameGeneralResult => {
    let result: GameGeneralResult = {
      unstart: [],
      live: [],
      over: []
    };
    let item: GameState;
    res['sports_content']['games']['game'].forEach((game, index) => {
      item = {
        id: game.id,
        date: '',
        type: GameType.unstart,
        home: {
          id: '',
          teamAbbreviate: '',
          score: ''
        },
        visitor: {
          id: '',
          teamAbbreviate: '',
          score: ''
        },
        process: {
          time: '',
          quarter: ''
        },
        detail: {
          loaded: false,
          data: {}
        }
      }
      const sides = ['home', 'visitor']
      // 给item的home和visitor赋值
      sides.forEach(key => {
        item[key]['id'] = game[key]['id']
        item[key]['teamAbbreviate'] = (game[key]['team_key']).toLowerCase();
        item[key]['score'] = game[key]['score']
      })
      // 当前比赛的进程
      const process = game['period_time']
      switch (parseInt(process.game_status, 10)) {
        case 1:
          // Unstart
          item.type = GameType.unstart
          item.date = process.period_status
          item.process = {
            time: '未开始',
            quarter: ''
          }
          result.unstart.push(item)
          break
        case 2:
          // Live
          item.type = GameType.live
          let game_clock
          if (process.game_clock) {
            // 小于10的表示方法：01、02...
            game_clock = parseInt(process.game_clock.split(':')[0], 10) < 10 ? '0' + process.game_clock : process.game_clock
          }
          item.process = {
            time: game_clock || 'End',
            quarter: 'Q' + process.period_value
          }
          result.live.push(item)
          break
        case 3:
          // Over
          item.type = GameType.over
          item.process = {
            time: '已结束',
            quarter: ''
          }
          result.over.push(item)
          break
        default:
          return        
      }
    })
    return result;    
  }
}


export default producer