"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
Object.defineProperty(exports, "__esModule", { value: true });
const moment_timezone_1 = __importDefault(require("moment-timezone"));
/** Get date format(Today)
 *  获取日期的时候要考虑 美国与中国的时差
 */
exports.getToday = () => {
    const dateString = moment_timezone_1.default.tz(Date.now(), 'America/Los_Angeles').format();
    const dateArray = dateString.replace('T', '-').split('-');
    console.log("dateArray" + dateArray);
    return dateArray.splice(0, 3);
    // let d = new Date()
    // d.setDate(d.getDate() - 5)
    // const dateString = moment.tz(d, 'America/Los_Angeles').format()
    // const dateArray = dateString.replace('T', '-').split('-')
    // return dateArray.splice(0, 3)
};
/**
 * Get date format(Yesterday)
 * 获取日期的时候要考虑 美国与中国的时差
 */
exports.getYesterday = () => {
    let d = new Date();
    d.setDate(d.getDate() - 1);
    const dateString = moment_timezone_1.default.tz(d, 'America/Los_Angeles').format();
    const dateArray = dateString.replace('T', '-').split('-');
    return dateArray.splice(0, 3);
};
/**
 * 获取今日的weekday
 */
exports.getWeekDay = (type) => {
    const date = new Date();
    const day = type === 1 /* today */ ? date.getDay() : date.getDay() === 0 ? 6 : date.getDay() - 1;
    switch (day) {
        case 0:
            return '星期天';
        case 1:
            return '星期一';
        case 2:
            return '星期二';
        case 3:
            return '星期三';
        case 4:
            return '星期四';
        case 5:
            return '星期五';
        case 6:
            return '星期六';
        default:
            return '天马行空';
    }
};
//# sourceMappingURL=date.js.map