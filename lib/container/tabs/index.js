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
// const HomeStack = StackNavigator({
// })
// const TeamsStack = StackNavigator({
// })
// const CommunityStack = StackNavigator({
// })
const MineStack = react_navigation_1.StackNavigator({
    MinePage: { screen: MinePage_1.default },
    Hello: { screen: Hello_1.default },
    Login: { screen: Login_1.default },
}, {
    navigationOptions: {
        headerStyle: {
            backgroundColor: colors_1.commonColors.topicColor,
        },
        headerTintColor: colors_1.commonColors.white
    }
});
exports.Tabs = react_navigation_1.TabNavigator({
    MineStack: { screen: MineStack, navigationOptions: { tabBarLabel: '我的' } },
    HomePage: { screen: HomePage_1.default, navigationOptions: { tabBarLabel: '首页' } },
    TeamsPage: { screen: TeamsPage_1.default, navigationOptions: { tabBarLabel: '球队' } },
    CommunityPage: { screen: CommunityPage_1.default, navigationOptions: { tabBarLabel: '社区' } },
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
    swipeEnabled: false
}, {
    initialRouteName: 'MineStack'
});
exports.default = exports.Tabs;
//# sourceMappingURL=index.js.map