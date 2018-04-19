"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
Object.defineProperty(exports, "__esModule", { value: true });
const address_1 = __importDefault(require("./address"));
const producer_1 = __importDefault(require("./producer"));
class Channel {
    // private options;
    // constructor(options) {
    //   this.options = options;
    // }
    getGameGeneral(year, month, date) {
        const gen_url = address_1.default.gameGeneral(`${year}${month}${date}`);
        return window.fetch(gen_url)
            .then(res => res.json())
            .then(data => {
            const allGames = producer_1.default.gameGeneral(data);
            if ((allGames.live.length + allGames.unstart.length + allGames.over.length) === 0) {
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
}
exports.default = Channel;
//# sourceMappingURL=index.js.map