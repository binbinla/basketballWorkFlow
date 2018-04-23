"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule)
        return mod;
    var result = {};
    if (mod != null)
        for (var k in mod)
            if (Object.hasOwnProperty.call(mod, k))
                result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
const react_native_1 = require("react-native");
const react_redux_1 = require("react-redux"); // 引入connect函数
const react_navigation_1 = require("react-navigation");
const colors_1 = require("../../utils/colors");
const NewsCard_1 = __importDefault(require("../../component/NewsCard"));
const newsAction = __importStar(require("../../actions/newsAction"));
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
    }
    componentWillReceiveProps(nextProps, nextState) {
        //
    }
    render() {
        return (React.createElement(react_native_1.View, { style: styles.container }, React.createElement(GiftedListView, { style: { flex: 1 }, rowView: this._renderRowView.bind(this), onFetch: this._onFetch.bind(this), firstLoader: true, pagination: true, refreshable: true, withSections: true, sectionHeaderView: this._renderSectionHeaderView, customStyles: {
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
        return (React.createElement(react_native_1.View, { style: styles.header }, React.createElement(react_native_1.Text, { style: styles.headerTitle }, sectionID)));
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
            activeOpacity: 0.8, onPress: () => this._onItemPress(rowData)
        }, React.createElement(NewsCard_1.default, { newsId: rowData })));
    }
    _renderPaginationWaitingView(paginateCallback) {
        return (React.createElement(react_native_1.TouchableOpacity, { onPress: paginateCallback, style: styles.paginationView }, React.createElement(react_native_1.Text, { style: [styles.paginationText] }, "\u52A0\u8F7D\u66F4\u591A")));
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