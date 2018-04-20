import address from './address';
import producer, { GameGeneralResult, TeamRankResult }  from './producer';

export default class Channel {

  // private options;

  // constructor(options) {
  //   this.options = options;
  // }

  getGameGeneral(year, month, date): Promise<GameGeneralResult> {
    const gen_url = address.gameGeneral(`${year}${month}${date}`);
    return window.fetch(gen_url)
      .then(res => res.json())
      .then(data => {
        const allGames = producer.gameGeneral(data)
        if ((allGames.live.length + allGames.unstart.length + allGames.over.length) === 0) {
          // 若当天没有比赛，则请求下一天的比赛数据
          return this.getGameGeneral(year, month, parseInt(date, 10) + 1)
        }
        allGames.gameDate = `${year}-${month}-${Number(date) + 1}`
        return allGames;
      })
      .catch(error => {
        console.log(error);
        throw error;
      })
  }

  /**
   * 
   * @param year 
   * @param month 
   * @param date 
   */
  getTeamRank(year, month, date) {
    let formatMonth = month;
    if (parseInt(formatMonth, 10) < 10) {
      formatMonth = parseInt(formatMonth, 10)
    }
    const url = address.teamRank(`${formatMonth}/${date}/${year}`)
    console.log('teamRank Url' + url);
    // fetch("http://blog.parryqiu.com").then(function(response){console.log( 'response' + JSON.stringify(response))})
    // console.log('dayin' + JSON.stringify(fetch("http://stats.nba.com/stats/scoreboard?DayOffset=0&LeagueID=00&gameDate=3/13/2018")));
    return window.fetch("http://stats.nba.com/stats/scoreboard?DayOffset=0&LeagueID=00&gameDate=4/12/2018")
      .then(function(res) {
        res.json();
        // return res.json()
      })
      .then(data => {
        console.log('team rank data' + JSON.stringify(data))
        producer.teamRank(data)
        // return result;
      })
      .catch(error => {
        console.log(error);
        throw error;
      })
  }
}


