
import { GameType, GameState, SingleGameTeamInfo } from '../reducers/gameReducer'; 
import { BasicTeamInfo, TeamDetailInfo, PlayerPersonalInfo } from '../reducers/teamReducer';
import { Player, TeamPlayer } from '../model/player';

export interface GameGeneralResult {
  unstart: GameState[],
  live: GameState[],
  over: GameState[],
  gameDate?: string,
  weekDay?: string
}

export interface  GameSearchResult {
  gameGeneral: GameGeneralResult,
  loading: boolean
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

export interface TeamDetailResult {
  teamDetail: TeamDetailInfo,
  playerPersonal: PlayerPersonalInfo[],
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
        loss: item[7],
        zone: item[2] // 尚未与接口进行匹配
      })
      anotherItem = westData[index]
      western.push({
        id: anotherItem[0],
        name: anotherItem[5],
        win: anotherItem[8],
        loss: anotherItem[7],
        zone: item[2]
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
  },

  teamDetail: (res): TeamDetailInfo => {
    const dataPartOne = res["resultSets"][0]["rowSet"][0]
    let result: TeamDetailInfo = {
      teamId: dataPartOne[1],
      teamName: dataPartOne[2],
      season: dataPartOne[3],
      win: dataPartOne[5],
      loss: dataPartOne[6],
      w_pct: dataPartOne[7],
      w_pct_rank: dataPartOne[33],
      fg_pct: dataPartOne[11],
      fg_pct_rank: dataPartOne[37],
      fg3_pct: dataPartOne[14],
      fg3_pct_rank: dataPartOne[40],
      reb: dataPartOne[20],
      reb_rank: dataPartOne[46],
      ast: dataPartOne[21],
      ast_rank: dataPartOne[47],
      tov: dataPartOne[22],
      tov_rank: dataPartOne[48],
      stl: dataPartOne[23],
      stl_rank: dataPartOne[49],
      blk: dataPartOne[24],
      blk_rank: dataPartOne[50],
      pts: dataPartOne[28],
      pts_rank: dataPartOne[54],
      players: []
    }
    const dataPartTwo = res["resultSets"][1]["rowSet"]
    for (let i = 0; i < dataPartTwo.length; i++) {
      const current = res["resultSets"][1]["rowSet"][i];
      let makePlayer: TeamPlayer = {
        id: String(current[1]),
        name: current[2],
        gp: current[3],
        pts: current[27],
        reb: current[19],
        ast: current[20],
        min: current[7]
      }      
      result.players.push(makePlayer);
    }
    return result;
  },

  teamDetailBasic:(res): PlayerPersonalInfo[] => {
    const data = res["resultSets"][0]["rowSet"]
    let result: PlayerPersonalInfo[] = []
    for (let i = 0; i < data.length; i++) {
      const current = data[i];
      let makePlayer: PlayerPersonalInfo = {
        id: String(current[12]),
        name: current[3],
        number: current[4],
        position: current[5],
        height: current[6],
        weight: current[7],
        age: String(current[9])
      }
      result.push(makePlayer);      
    }
    return result;
  }
}

export default producer