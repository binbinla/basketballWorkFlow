import { News } from './../model/news';
import address from './address';
import producer, { GameGeneralResult, TeamRankResult, GameDetailResult, TeamDetailResult }  from './producer';
import { mapTeamIdToBasic, mapTeamIdToDetail } from './mapTeamJson';
import news_test from '../mock_datas/news_test_from_api';

export default class Channel {

  // private options;

  // constructor(options) {
  //   this.options = options;
  // }

  getGameGeneral(year, month, date, search?: boolean): Promise<GameGeneralResult> {
    const gen_url = address.gameGeneral(`${year}${month}${date}`);
    // console.log('game general url' + gen_url);
    const getDate: string[] = [year,month,date]
    return window.fetch(gen_url)
      .then(res => res.json())
      .then(data => {
        const allGames = producer.gameGeneral(data, getDate)
        if ((allGames.live.length + allGames.unstart.length + allGames.over.length) === 0 && (!search)) {
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
    return window.fetch("http://stats.nba.com/stats/scoreboard?DayOffset=0&LeagueID=00&gameDate=4/12/2018")
      .then(function(res) {
        res.json();
      })
      .then(data => {
        const result = producer.teamRank(data)
        return result;
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
   * @param gameId 
   */
  getGameDetail(year, month, date, gameId): Promise<GameDetailResult> {
    const url = address.gameDetail(`${year}${month}${date}`, gameId);
    return window.fetch(url)
      .then(res => res.json())
      .then(data => {
        const result = producer.gameDetail(data)
        return result
      })
      .catch(error => {
        console.log(error);
        throw error;
      })
  }

  getTeamDetail(teamId): TeamDetailResult {
    let result: TeamDetailResult = {
      teamDetail: producer.teamDetail(JSON.parse(mapTeamIdToDetail(teamId))),
      playerPersonal: producer.teamDetailBasic(JSON.parse(mapTeamIdToBasic(teamId)))
    }
    return result;
  }

  // getRecentNews(num: number, start: number): Promise<News[]> {
  //   const url = address.recentNBANews(num, start);
  //   return window.fetch(url)
  //     .then(res => res.json())
  //     .then(data => {
  //       const result = producer.recentNBANews(data);
  //       return result;
  //     })
  //     .catch(error => {
  //       console.log(error);
  //       throw error;
  //     })
  // }

  getRecentNews(num: number, start: number) {
    const result: News[] = producer.recentNBANews(JSON.parse(news_test));
    return result;
  }

}


