"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
}
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
const react_native_1 = require("react-native");
const colors_1 = require("../../utils/colors");
class TeamDetailBasic extends React.Component {
    constructor(props) {
        super(props);
        this.renderTitle = () => {
            return (React.createElement(react_native_1.View, { style: styles.titleContainer },
                React.createElement(react_native_1.View, { style: styles.titleTextContainer },
                    React.createElement(react_native_1.Text, { style: styles.titleText }, '数据项目')),
                React.createElement(react_native_1.View, { style: styles.titleTextContainer },
                    React.createElement(react_native_1.Text, { style: styles.titleText }, '数据值')),
                React.createElement(react_native_1.View, { style: [styles.titleTextContainer, { borderRightWidth: 0 }] },
                    React.createElement(react_native_1.Text, { style: styles.titleText }, '联盟排名'))));
        };
        this.renderData = (data, hideRightBorder) => {
            const hideBorder = hideRightBorder ? { borderRightWidth: 0 } : {};
            return (React.createElement(react_native_1.View, { style: styles.itemNameContainer },
                React.createElement(react_native_1.View, { style: [styles.singleContentContainer, hideBorder] },
                    React.createElement(react_native_1.Text, { style: styles.singleContentText }, data[0])),
                React.createElement(react_native_1.View, { style: [styles.singleContentContainer, hideBorder] },
                    React.createElement(react_native_1.Text, { style: styles.singleContentText }, data[1])),
                React.createElement(react_native_1.View, { style: [styles.singleContentContainer, hideBorder] },
                    React.createElement(react_native_1.Text, { style: styles.singleContentText }, data[2])),
                React.createElement(react_native_1.View, { style: [styles.singleContentContainer, hideBorder] },
                    React.createElement(react_native_1.Text, { style: styles.singleContentText }, data[3])),
                React.createElement(react_native_1.View, { style: [styles.singleContentContainer, hideBorder] },
                    React.createElement(react_native_1.Text, { style: styles.singleContentText }, data[4])),
                React.createElement(react_native_1.View, { style: [styles.singleContentContainer, hideBorder] },
                    React.createElement(react_native_1.Text, { style: styles.singleContentText }, data[5])),
                React.createElement(react_native_1.View, { style: [styles.singleContentContainer, hideBorder] },
                    React.createElement(react_native_1.Text, { style: styles.singleContentText }, data[6])),
                React.createElement(react_native_1.View, { style: [styles.singleContentContainer, hideBorder] },
                    React.createElement(react_native_1.Text, { style: styles.singleContentText }, data[7])),
                React.createElement(react_native_1.View, { style: [styles.singleContentContainer, hideBorder] },
                    React.createElement(react_native_1.Text, { style: styles.singleContentText }, data[8]))));
        };
    }
    render() {
        const nameArray = [
            '胜率',
            '投篮命中率',
            '三分球命中率',
            '篮板',
            '助攻',
            '失误',
            '抢断',
            '盖帽',
            '场均得分'
        ];
        const dataPartOne = [
            this.props.teamDetail.w_pct,
            this.props.teamDetail.fg_pct,
            this.props.teamDetail.fg3_pct,
            this.props.teamDetail.reb,
            this.props.teamDetail.ast,
            this.props.teamDetail.tov,
            this.props.teamDetail.stl,
            this.props.teamDetail.blk,
            this.props.teamDetail.pts
        ];
        const dataPartTwo = [
            this.props.teamDetail.w_pct_rank,
            this.props.teamDetail.fg_pct_rank,
            this.props.teamDetail.fg3_pct_rank,
            this.props.teamDetail.reb_rank,
            this.props.teamDetail.ast_rank,
            this.props.teamDetail.tov_rank,
            this.props.teamDetail.stl_rank,
            this.props.teamDetail.blk_rank,
            this.props.teamDetail.pts_rank
        ];
        return (React.createElement(react_native_1.View, { style: [styles.container] },
            this.renderTitle(),
            React.createElement(react_native_1.View, { style: styles.contentContainer },
                this.renderData(nameArray),
                this.renderData(dataPartOne),
                this.renderData(dataPartTwo, true))));
    }
}
exports.default = TeamDetailBasic;
const styles = react_native_1.StyleSheet.create({
    container: {
        // flex: 1,
        flexDirection: 'column',
        backgroundColor: colors_1.commonColors.white,
    },
    titleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomColor: colors_1.commonColors.borderColor,
        borderBottomWidth: 1
    },
    titleTextContainer: {
        borderRightColor: colors_1.commonColors.borderColor,
        borderRightWidth: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    titleText: {
        fontSize: 15,
        color: colors_1.commonColors.black,
    },
    contentContainer: {
        flex: 3,
        flexDirection: 'row'
    },
    itemNameContainer: {
        flex: 1,
        flexDirection: 'column'
    },
    singleContentContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        borderRightColor: colors_1.commonColors.borderColor,
        borderRightWidth: 1,
    },
    singleContentText: {
        fontSize: 13,
        color: colors_1.commonColors.black,
    },
});
//# sourceMappingURL=TeamDetailBasic.js.map