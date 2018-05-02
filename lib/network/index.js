"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
Object.defineProperty(exports, "__esModule", { value: true });
const address_1 = __importDefault(require("./address"));
const producer_1 = __importDefault(require("./producer"));
const mapTeamJson_1 = require("./mapTeamJson");
class Channel {
    // private options;
    // constructor(options) {
    //   this.options = options;
    // }
    getGameGeneral(year, month, date, search) {
        const gen_url = address_1.default.gameGeneral(`${year}${month}${date}`);
        // console.log('game general url' + gen_url);
        const getDate = [year, month, date];
        return window.fetch(gen_url)
            .then(res => res.json())
            .then(data => {
            const allGames = producer_1.default.gameGeneral(data, getDate);
            if ((allGames.live.length + allGames.unstart.length + allGames.over.length) === 0 && (!search)) {
                // 若当天没有比赛，则请求下一天的比赛数据
                return this.getGameGeneral(year, month, parseInt(date, 10) + 1);
            }
            allGames.gameDate = `${year}-${month}-${Number(date) + 1}`;
            return allGames;
        })
            .catch(error => {
            console.log(error);
            throw error;
        });
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
            formatMonth = parseInt(formatMonth, 10);
        }
        const url = address_1.default.teamRank(`${formatMonth}/${date}/${year}`);
        console.log('teamRank Url' + url);
        return window.fetch("http://stats.nba.com/stats/scoreboard?DayOffset=0&LeagueID=00&gameDate=4/12/2018")
            .then(function (res) {
            res.json();
        })
            .then(data => {
            const result = producer_1.default.teamRank(data);
            return result;
        })
            .catch(error => {
            console.log(error);
            throw error;
        });
    }
    /**
     *
     * @param year
     * @param month
     * @param date
     * @param gameId
     */
    getGameDetail(year, month, date, gameId) {
        const url = address_1.default.gameDetail(`${year}${month}${date}`, gameId);
        return window.fetch(url)
            .then(res => res.json())
            .then(data => {
            const result = producer_1.default.gameDetail(data);
            return result;
        })
            .catch(error => {
            console.log(error);
            throw error;
        });
    }
    getTeamDetail(teamId) {
        let result = {
            teamDetail: producer_1.default.teamDetail(JSON.parse(mapTeamJson_1.mapTeamIdToDetail(teamId))),
            playerPersonal: producer_1.default.teamDetailBasic(JSON.parse(mapTeamJson_1.mapTeamIdToBasic(teamId)))
        };
        return result;
    }
    getRecentNews(num, start) {
        const url = address_1.default.recentNBANews(num, start);
        return window.fetch(url)
            .then(res => res.json())
            .then(data => {
            const result = producer_1.default.recentNBANews(data);
            return result;
        })
            .catch(error => {
            console.log(error);
            throw error;
        });
    }
}
exports.default = Channel;
//# sourceMappingURL=index.js.map