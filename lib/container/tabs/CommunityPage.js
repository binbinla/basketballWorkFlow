"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
}
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
const react_native_1 = require("react-native");
const react_redux_1 = require("react-redux"); // 引入connect函数
const react_navigation_1 = require("react-navigation");
const colors_1 = require("../../utils/colors");
const NewsCard_1 = __importDefault(require("../../component/NewsCard"));
const newsAction = __importStar(require("../../actions/newsAction"));
const react_native_easy_toast_1 = __importDefault(require("react-native-easy-toast"));
const GiftedListView = require('react-native-gifted-listview');
const resetAction = react_navigation_1.NavigationActions.reset({
    index: 0,
    actions: [
        react_navigation_1.NavigationActions.navigate({ routeName: 'Hello' })
    ]
});
class CommunityPage extends React.Component {
    constructor(props) {
        super(props);
        /**
         * when a row was touched
         * @param
         */
        this._onItemPress = (rowData) => {
            console.log(rowData + 'was pressed');
            this.props.navigation.navigate('NewsDetail', {
                id: rowData
            });
        };
    }
    componentWillMount() {
        this.props.fetchNews();
        // console.log('news fetch');
        // fetch("http://stats.nba.com/stats/commonplayerinfo?LeagueID=00&PlayerID=203584&SeasonType=Regular+Season", {
        //   method: 'GET',
        //   credentials: "include",
        //   headers: {
        //     cookie: JSON.stringify(getCookie('__guid=65800172.4031362203156968000.1522065220488.3794; __gads=ID=03a5ac0aa1827b17:T=1522065226:S=ALNI_Ma9lOh3ONwDqugSEzOaY0KekVMR_Q; AMCV_248F210755B762187F000101%40AdobeOrg=-1891778711%7CMCAID%7C2D5C6FA5052A639F-6000012AA050E45B%7CMCIDTS%7C17641%7CMCMID%7C10509461825900863961656828769582452970%7CMCAAMLH-1524748627%7C11%7CMCAAMB-1524748627%7CRKhpRz8krg2tLO6pguXWp5olkAcUniQYPHaMWWgdJ3xzPWQmdj0y%7CMCOPTOUT-1524151027s%7CNONE%7CMCSYNCSOP%7C411-17648%7CvVersion%7C2.4.0; pgv_pvid=3730815700; ug=5ab8df450778880a3c732e47be0074cb; s_vi=[CS]v1|2D5C6FA5052A639F-6000012AA050E45B[CE]; s_fid=2282642745FE8062-049F91B355DBFE06; _ga=GA1.2.956194348.1522065224; mbox=PC#2eb8928a49b94e778e5b1c6bb51882d6.24_13#1585310027|session#ef08aee812e347138faa184078a75091#1524636763; ak_bmsc=3100331DA9FCEB334F0F0648C4C91E4DDF7732BD2E0D000021E2E35A0ADDF638~pl/FuDh2Fb5zu1QomlkraNb1fjOk4Nq2LaL+LrAbDuxUqbiMmEZafpxt1uBY34aGvj7flJELH2mTszMOORZvVHb4ugDJ+mPZ7O8CaX1ZnbKvaxlzhg9Ld9G3W+19qi/sUgMj/Xi+BBqFIC3h2PPx3+9NqgGstezvdp4dnoi38Q9KxuRY+IdiqDOLoaSD4OQh6qf3gYL57XUxaMNdRLDDzEBLedIoxKHPu1r+uf2wmorOg=; bm_sv=177DA7646B70D64CF778591832C6C508~3Ay5CASaeqXjLhVEMyrqsbEvptMSZP36qBaz8+564Lb3xS5uNVQwNhL8aVVh/DpSbr42DiRFdX8m7Rk9I3LN80WV5PBwpPjY/2H7YIVQRHbDlyTuAVRSFaAPgU7VRdT+PJ85lAPwuJdYHyHIyv9EFQ==; monitor_count=6')) 
        //     // 'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.87 Safari/537.36'
        //   }
        // })
        //   // .then(res => res.json())
        //   .then(data => {
        //     console.log('component will mount ' + JSON.stringify(data));
        //     const toast: any = this.refs.toast;
        //     toast.show("请求成功", DURATION.SHORT);
        //   })
        //   .catch(error => {
        //     console.log('point out errror' + error);
        //     const toast: any = this.refs.toast;
        //     toast.show("请求失败", DURATION.SHORT);
        //   })    
    }
    componentWillReceiveProps(nextProps, nextState) {
        //
    }
    render() {
        return (React.createElement(react_native_1.View, { style: styles.container },
            React.createElement(react_native_easy_toast_1.default, { ref: "toast", position: "center" }),
            React.createElement(GiftedListView, { style: { flex: 1 }, rowView: this._renderRowView.bind(this), onFetch: this._onFetch.bind(this), firstLoader: true, pagination: true, refreshable: true, withSections: true, sectionHeaderView: this._renderSectionHeaderView, customStyles: {
                    paginationView: {
                        backgroundColor: colors_1.commonColors.white,
                    },
                }, refreshableTintColor: "blue", paginationWaitingView: this._renderPaginationWaitingView })));
    }
    /**
     * will be called when refreshing
     * @param
     */
    _onFetch(page = 1, callback, options) {
        setTimeout(() => {
            const ids = this.props.newsParams.ids ? this.props.newsParams.ids : [];
            let result = {};
            result['周一'] = ids;
            callback(result);
        }, 1000);
    }
    /**
    * Render a row
    * @param {object} rowData Row data
    */
    _renderSectionHeaderView(sectionData, sectionID) {
        return (React.createElement(react_native_1.View, { style: styles.header },
            React.createElement(react_native_1.Text, { style: styles.headerTitle }, sectionID)));
    }
    /***
     * Render a row
     * @param
     */
    _renderRowView(rowData) {
        return (React.createElement(react_native_1.TouchableOpacity
        // style={{marginTop: 10}}
        , { 
            // style={{marginTop: 10}}
            activeOpacity: 0.8, onPress: () => this._onItemPress(rowData) },
            React.createElement(NewsCard_1.default, { newsId: rowData })));
    }
    _renderPaginationWaitingView(paginateCallback) {
        return (React.createElement(react_native_1.TouchableOpacity, { onPress: paginateCallback, style: styles.paginationView },
            React.createElement(react_native_1.Text, { style: [styles.paginationText] }, "\u52A0\u8F7D\u66F4\u591A")));
    }
}
CommunityPage.navigationOptions = {
    title: '社区'
};
const styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors_1.commonColors.white
    },
    header: {
        backgroundColor: colors_1.commonColors.sectionHeader,
        padding: 5,
        marginTop: 10
    },
    headerTitle: {
        color: colors_1.commonColors.sectionHeaderText,
    },
    paginationView: {
        height: 44,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors_1.commonColors.white,
    },
    paginationText: {
        fontSize: 13,
        color: colors_1.commonColors.underGray,
    }
});
function mapStateToProps(reducer) {
    return {
        newsParams: reducer.fetchNewsHandler
    };
}
function mapDispatchToProps() {
    return (dispatch) => ({
        fetchNews: () => dispatch(newsAction.fetchNews())
    });
}
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(CommunityPage);
//# sourceMappingURL=CommunityPage.js.map