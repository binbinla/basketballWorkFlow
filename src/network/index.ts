import address from './address';
import producer, { GameGeneralResult }  from './producer';

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
}