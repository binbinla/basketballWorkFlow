
import { GameType, GameState, SingleGameTeamInfo } from '../reducers/gameReducer'; 
import { BasicTeamInfo } from '../reducers/teamReducer';
import { Player } from '../model/player';

export interface GameGeneralResult {
  unstart: GameState[],
  live: GameState[],
  over: GameState[],
  gameDate?: string,
  weekDay?: string 
}

export interface TeamRankResult {
  eastern: BasicTeamInfo[],
  western: BasicTeamInfo[]
}

export interface GameDetailResult {
  home: SingleGameTeamInfo,
  visitor: SingleGameTeamInfo,
  type: GameType
  process: {
    time: string,
    quarter: string
  },
  loading?: boolean
}

const producer = {

  /**
   * return {live: [], unstart: [], over: []}
   */
  gameGeneral: (res, date): GameGeneralResult => {
    let result: GameGeneralResult = {
      unstart: [],
      live: [],
      over: []
    };
    let item: GameState;
    res['sports_content']['games']['game'].forEach((game, index) => {
      item = {
        id: game.id,
        date: date,
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
  },


  /**
   * @return {eastern: [{id, name, win, loss}], western:[]}
   */
  teamRank: (res): TeamRankResult => {
    const eastData = res.resultSets[4].rowSet
    const westData = res.resultSets[5].rowSet
    let eastern: BasicTeamInfo[] = []
    let western: BasicTeamInfo[] = []
    let anotherItem = {}
    eastData.forEach((item, index) => {
      eastern.push({
        id: item[0],
        name: item[5],
        win: item[8],
        loss: item[7]
      })
      anotherItem = westData[index]
      western.push({
        id: anotherItem[0],
        name: anotherItem[5],
        win: anotherItem[8],
        loss: anotherItem[7]
      }) 
    })
    return {
      eastern,
      western
    }
  },    

  /**
   *  @return {type, home: {players: {Array}, team, score}, visitor: {<=same}, process: {time, quarter}}
   */
  gameDetail:(res): GameDetailResult => {
    const data = res['sports_content']['game']
    let result: GameDetailResult = {
      home: {
        id: '',
        teamAbbreviate: '',
        score: '',
        players: []
      },
      visitor: {
        id: '',
        teamAbbreviate: '',
        score: '',
        players: []
      },
      type: GameType.over,
      process: {
        time: '',
        quarter: ''
      }
    }
    const sides = ['home', 'visitor']
    sides.forEach(key => {
      result[key].teamAbbreviate = (data[key].team_key).toLowerCase();
      result[key].score = data[key].score
      result[key].players = data[key].players.player
    })
    const gameType = parseInt(data['period_time'].game_status, 10)
    result.type = gameType === 3 ? GameType.over : (gameType === 2 ? GameType.live : GameType.unstart)
    if (result.type === GameType.live) {
      const process = data.period_time
      result.process = {
        time:  process.game_clock || 'End',
        quarter: 'Q' + process.period_value
      }
    }
    return result;
  }
}


export default producer