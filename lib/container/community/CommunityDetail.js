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
const colors_1 = require("../../utils/colors");
const news_datas_1 = __importDefault(require("../../mock_datas/news_datas"));
const CommentInputForm_1 = __importDefault(require("./CommentInputForm"));
const CommentCard_1 = __importDefault(require("./CommentCard"));
const communityAction = __importStar(require("../../actions/communityAction"));
const Spinner_1 = __importDefault(require("../../component/Spinner"));
class CommunityDetail extends React.Component {
    constructor(props) {
        super(props);
        /**
         * 渲染评论
         */
        this._renderRow = (rowData, sectionID, rowID, highlightRow) => {
            if (rowData) {
                return (React.createElement(CommentCard_1.default, { user: this.props.loginParams.user, commentContent: rowData }));
            }
            else {
                return null;
            }
        };
        /**
         * 接收输入框回调
         */
        this._inputLineOnPress = (visible) => {
            this.setState({ visible: visible });
        };
        /**
         * 模态消失
         */
        this._onModalDismiss = () => {
        };
        /**
         * 点击取消
         */
        this._onCancelPress = () => {
            this.setState({ visible: false });
        };
        /**
         * 点击发表
         */
        this._onPostPress = () => {
            this.setState({
                visible: false
            }, () => {
                if (this.state.commentContent) {
                    this.props.commitComment(this.state.commentContent);
                }
            });
        };
        /**
         * 输入框文本变化监听
         */
        this._onChangeText = (text) => {
            if (text !== '') {
                this.setState({ commentContent: text });
            }
        };
        this.state = {
            visible: false,
            loading: false,
            commentDataSource: new react_native_1.ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2
            }),
        };
    }
    componentDidMount() {
    }
    componentWillReceiveProps(nextProps) {
        this.setState({ loading: nextProps.commentParams.loading });
        this.updateDataSource(nextProps.commentParams.allComments);
        if (this.props.commentParams.loading && nextProps.commentParams.loading) {
            console.log('visit scroll');
            this._scroll.scrollToEnd({ animated: true });
        }
    }
    updateDataSource(commentRows) {
        // console.log('commentRows' + commentRows)
        const { commentDataSource } = this.state;
        let rows = Object.assign([], commentRows);
        this.setState({
            commentDataSource: commentDataSource.cloneWithRows(rows)
        });
    }
    render() {
        const { params } = this.props.navigation.state;
        const newsId = params ? params.id : null;
        const newsTitle = news_datas_1.default[newsId].newsTitle;
        const newsImage = news_datas_1.default[newsId].newsImage;
        const newsDetailOne = news_datas_1.default[newsId].newsDetail[0];
        const newsDetailTwo = news_datas_1.default[newsId].newsDetail[1];
        const newsDetailThree = news_datas_1.default[newsId].newsDetail[2];
        return (React.createElement(react_native_1.View, { style: { flex: 1 } },
            React.createElement(Spinner_1.default, { textContent: '评论提交中...', visible: this.state.loading, color: colors_1.commonColors.white, textStyle: { fontSize: 10, color: colors_1.commonColors.white }, hudBg: true }),
            React.createElement(react_native_1.ScrollView, { style: { flex: 1, marginBottom: 40 }, showsVerticalScrollIndicator: false, ref: (scroll) => this._scroll = scroll },
                React.createElement(react_native_1.View, { style: styles.container },
                    React.createElement(react_native_1.View, { style: styles.titleContainer },
                        React.createElement(react_native_1.Text, { style: styles.titleText }, newsTitle)),
                    React.createElement(react_native_1.View, { style: { height: 1, backgroundColor: colors_1.commonColors.borderColor, marginTop: 5 } }),
                    React.createElement(react_native_1.View, { style: styles.imageContainer },
                        React.createElement(react_native_1.Image, { style: styles.image, source: newsImage })),
                    React.createElement(react_native_1.View, { style: styles.detailContainer },
                        React.createElement(react_native_1.Text, { style: styles.detailText }, newsDetailOne),
                        React.createElement(react_native_1.Text, { style: [styles.detailText, { marginTop: 10 }] }, newsDetailTwo),
                        React.createElement(react_native_1.Text, { style: [styles.detailText, { marginTop: 10 }] }, newsDetailThree)),
                    React.createElement(react_native_1.View, { style: styles.commentTip },
                        React.createElement(react_native_1.Text, { style: styles.commentTipText }, '这些评论亮了')),
                    React.createElement(react_native_1.ListView, { dataSource: this.state.commentDataSource, renderRow: this._renderRow.bind(this), style: styles.listView }))),
            React.createElement(react_native_1.View, { style: styles.commentContainer },
                React.createElement(CommentInputForm_1.default, { onLineTouch: this._inputLineOnPress })),
            React.createElement(react_native_1.View, null,
                React.createElement(react_native_1.Modal, { animationType: "slide", transparent: true, visible: this.state.visible, onRequestClose: this._onModalDismiss },
                    React.createElement(react_native_1.View, { style: styles.modalContainer },
                        React.createElement(react_native_1.View, { style: styles.modalContent },
                            React.createElement(react_native_1.View, { style: styles.partOne },
                                React.createElement(react_native_1.TouchableOpacity, { onPress: this._onCancelPress },
                                    React.createElement(react_native_1.Text, { style: styles.cornerText }, '取消')),
                                React.createElement(react_native_1.Text, { style: styles.centerText }, '我来评论'),
                                React.createElement(react_native_1.TouchableOpacity, { onPress: this._onPostPress },
                                    React.createElement(react_native_1.Text, { style: [styles.cornerText, { color: colors_1.commonColors.topicColor }] }, '发表'))),
                            React.createElement(react_native_1.TextInput, { ref: "input", style: [styles.inputContainer, { textAlignVertical: 'top' }], onChangeText: this._onChangeText, underlineColorAndroid: "transparent", autoFocus: true })))))));
    }
}
CommunityDetail.navigationOptions = {
    title: '话题详情',
    tabBarVisible: false,
};
const styles = react_native_1.StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors_1.commonColors.white,
        paddingVertical: 10
    },
    titleContainer: {
        paddingHorizontal: 10
    },
    titleText: {
        fontSize: 18,
        color: colors_1.commonColors.black,
        fontWeight: 'bold'
    },
    imageContainer: {
        marginTop: 15,
        paddingHorizontal: 10
    },
    image: {
        width: '100%',
        height: 350,
    },
    detailContainer: {
        marginTop: 15,
        paddingHorizontal: 10
    },
    detailText: {
        fontSize: 15,
        color: colors_1.commonColors.black,
        letterSpacing: 5,
        includeFontPadding: true
    },
    commentContainer: {
        position: 'absolute',
        bottom: 0,
        width: '100%'
    },
    modalContainer: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.3)'
    },
    modalContent: {
        flex: 1,
        backgroundColor: colors_1.commonColors.gray,
        marginTop: '40%',
        paddingVertical: 5,
        paddingHorizontal: 10
    },
    partOne: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    cornerText: {
        fontSize: 15,
        color: colors_1.commonColors.underGray
    },
    centerText: {
        fontSize: 18,
        color: colors_1.commonColors.black
    },
    inputContainer: {
        backgroundColor: colors_1.commonColors.white,
        height: 100,
        marginTop: 10
    },
    listView: {
        flexDirection: 'column',
        marginTop: 10
    },
    commentTip: {
        flexDirection: 'row',
        backgroundColor: colors_1.commonColors.white,
        alignItems: 'center',
        paddingVertical: 5,
        borderTopColor: colors_1.commonColors.borderColor,
        borderBottomColor: colors_1.commonColors.borderColor,
        borderTopWidth: 0.5,
        borderBottomWidth: 0.5,
        borderLeftColor: colors_1.commonColors.topicColor,
        borderLeftWidth: 4,
        marginTop: 10
    },
    commentTipText: {
        fontSize: 13,
        color: colors_1.commonColors.topicColor,
        marginLeft: 8
    }
});
function mapStateToProps(reducer) {
    return {
        loginParams: reducer.loginHandler,
        commentParams: reducer.commitCommentHandler
    };
}
function mapDispatchToProps() {
    return (dispatch) => ({
        commitComment: (comment) => dispatch(communityAction.commitComment(comment)),
    });
}
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(CommunityDetail);
//# sourceMappingURL=CommunityDetail.js.map