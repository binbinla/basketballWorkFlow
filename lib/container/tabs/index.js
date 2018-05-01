"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
Object.defineProperty(exports, "__esModule", { value: true });
const react_navigation_1 = require("react-navigation");
const HomePage_1 = __importDefault(require("./HomePage"));
const TeamsPage_1 = __importDefault(require("./TeamsPage"));
const CommunityPage_1 = __importDefault(require("./CommunityPage"));
const MinePage_1 = __importDefault(require("./MinePage"));
const Hello_1 = __importDefault(require("../../component/Hello"));
const Login_1 = __importDefault(require("../account/Login"));
const colors_1 = require("../../utils/colors");
const PersonalProfile_1 = __importDefault(require("../../container/mine/PersonalProfile"));
const AboutApp_1 = __importDefault(require("../../container/mine/AboutApp"));
const HelpAndFeedback_1 = __importDefault(require("../../container/mine/HelpAndFeedback"));
const EvaluateApp_1 = __importDefault(require("../../container/mine/EvaluateApp"));
const ChangeNickName_1 = __importDefault(require("../../container/mine/personalProfile/ChangeNickName"));
const ChangeAddress_1 = __importDefault(require("../../container/mine/personalProfile/ChangeAddress"));
const NewsDetail_1 = __importDefault(require("../../container/community/NewsDetail"));
const GameDetail_1 = __importDefault(require("../../container/game/GameDetail"));
const TeamDetail_1 = __importDefault(require("../team/TeamDetail"));
const GameSearch_1 = __importDefault(require("../../container/game/GameSearch"));
const HomeStack = react_navigation_1.StackNavigator({
    HomePage: { screen: HomePage_1.default },
    GameDetail: { screen: GameDetail_1.default },
    GameSearch: { screen: GameSearch_1.default }
}, {
    navigationOptions: {
        headerStyle: {
            backgroundColor: colors_1.commonColors.topicColor,
        },
        headerTintColor: colors_1.commonColors.white
    }
});
const TeamsStack = react_navigation_1.StackNavigator({
    TeamsPage: { screen: TeamsPage_1.default },
    TeamDetail: { screen: TeamDetail_1.default },
}, {
    navigationOptions: {
        headerStyle: {
            backgroundColor: colors_1.commonColors.topicColor,
        },
        headerTintColor: colors_1.commonColors.white
    }
});
const CommunityStack = react_navigation_1.StackNavigator({
    CommunityPage: { screen: CommunityPage_1.default },
    NewsDetail: { screen: NewsDetail_1.default }
}, {
    navigationOptions: {
        headerStyle: {
            backgroundColor: colors_1.commonColors.topicColor,
        },
        headerTintColor: colors_1.commonColors.white
    }
});
const MineStack = react_navigation_1.StackNavigator({
    MinePage: { screen: MinePage_1.default },
    Hello: { screen: Hello_1.default },
    Login: { screen: Login_1.default },
    PersonalProfile: { screen: PersonalProfile_1.default },
    AboutApp: { screen: AboutApp_1.default },
    HelpAndFeedback: { screen: HelpAndFeedback_1.default },
    EvaluateApp: { screen: EvaluateApp_1.default },
    ChangeNickName: { screen: ChangeNickName_1.default },
    ChangeAddress: { screen: ChangeAddress_1.default }
}, {
    navigationOptions: {
        headerStyle: {
            backgroundColor: colors_1.commonColors.topicColor,
        },
        headerTintColor: colors_1.commonColors.white
    }
});
exports.Tabs = react_navigation_1.TabNavigator({
    // MineStack: { screen: MineStack, navigationOptions: { tabBarLabel: '我的'} },
    HomeStack: { screen: HomeStack, navigationOptions: { tabBarLabel: '赛况' } },
    TeamsStack: { screen: TeamsStack, navigationOptions: { tabBarLabel: '球队' } },
    CommunityStack: { screen: CommunityStack, navigationOptions: { tabBarLabel: '社区' } },
    MineStack: { screen: MineStack, navigationOptions: { tabBarLabel: '我的' } }
}, {
    navigationOptions: ({ navigation }) => ({
        // headerStyle: {
        //   backgroundColor: commonColors.topicColor,
        // },
        // headerTintColor: commonColors.white,
        header: null // 隐藏导航栏
    }),
    tabBarOptions: {
        activeTintColor: colors_1.commonColors.topicColor,
        inactiveTintColor: colors_1.commonColors.underGray,
        labelStyle: {
            fontSize: 15,
        }
    },
    tabBarComponent: react_navigation_1.TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false,
}, {
    initialRouteName: 'MineStack'
});
exports.default = exports.Tabs;
//# sourceMappingURL=index.js.map