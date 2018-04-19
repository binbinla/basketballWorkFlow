
const date = new Date();
const currentMonth = date.getMonth() + 1;

/**
 * 当前赛季
 * example：2017-18赛季
 */
let season: string
if (currentMonth >= 10) {
  season = date.getFullYear().toString() + '-' + (date.getFullYear() + 1).toString().substring(2,4);
} else {
  season = (date.getFullYear() - 1).toString() + '-' + date.getFullYear().toString().substring(2,4);
}

const address = {

  /**
   * All game of the date
   * @params gameDate: {String} {Format: yearmonthdate}
   * @example gameDate: 20151125
   */
  gameGeneral: (gameDate) => {
    return `http://data.nba.com/data/5s/json/cms/noseason/scoreboard/${gameDate}/games.json`
  },
  
  /**
   * Detail of a game in a specific date
   * @params gameDate: {String} {Format: yearmonthdate} & gameId: {String}
   * @example gameDate: 20151128 & gameId: 0021500239
   */
  gameDetail: (gameDate, gameId) => {
    return `http://data.nba.com/data/10s/json/cms/noseason/game/${gameDate}/${gameId}/boxscore.json`
  },
  
  /**
   * Current league standing
   * @params year {String}
   * @example year: 2015
   */
  leagueStanding: (year) => {
    return `http://data.nba.com/data/json/cms/${year}/league/standings.json`
  },

  /**
   * 球员列表
   */
  playerList: () => {
    return `http://stats.nba.com/stats/commonallplayers?IsOnlyCurrentSeason=0&LeagueID=00&Season=${season}`
  },

  /**
   * 某个球员信息
   */
  playerInfo: (id) => {
    return `http://stats.nba.com/stats/commonplayerinfo?LeagueID=00&PlayerID=${id}&SeasonType=Regular+Season`
  },

  /**
   * 某个球员某个赛季的数据日志
   */
  playerLog: (id) => {
    return `http://stats.nba.com/stats/playergamelog?LeagueID=00&PerMode=PerGame&PlayerID=${id}&Season=${season}&SeasonType=Regular+Season`
  },
  
 /**
  * @params gameDate month/date/year
  */
 teamRank: (gameDate) => {
    return `http://stats.nba.com/stats/scoreboard?DayOffset=0&LeagueID=00&gameDate=${gameDate}`
  },

  /**
   * 某个球队某个赛季的信息
   */
  teamInfo: (id) => {
    return `http://stats.nba.com/stats/teaminfocommon?LeagueID=00&SeasonType=Regular+Season&TeamID=${id}&season=${season}`
  },

  /**
   * 某个球队某个赛季的详细信息
   */
  teamDetail: (id) => {
    return `http://stats.nba.com/stats/teamplayerdashboard?DateFrom=&DateTo=&GameSegment=&LastNGames=0&LeagueID=00&Location=&MeasureType=Base&Month=0&OpponentTeamID=0&Outcome=&PaceAdjust=N&PerMode=PerGame&Period=0&PlusMinus=N&Rank=N&Season=${season}&SeasonSegment=&SeasonType=Regular+Season&TeamID=${id}&VsConference=&VsDivision=`
  },  

  /**
   * 某个球队某个赛季的基本详细信息
   */
  teamDetailBasic: (id) => {
    return `http://stats.nba.com/stats/commonteamroster?LeagueID=00&Season=${season}&TeamID=${id}`
  }  
}

export default address
