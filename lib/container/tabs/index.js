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
const colors_1 = require("../../utils/colors");
// const HomeStack = StackNavigator({
// })
// const TeamsStack = StackNavigator({
// })
// const CommunityStack = StackNavigator({
// })
// const MineStack = StackNavigator({
// })
const Tabs = react_navigation_1.TabNavigator({
    // MinePage: { screen: MinePage, navigationOptions: { tabBarLabel: '我的'} },
    HomePage: { screen: HomePage_1.default, navigationOptions: { tabBarLabel: '首页' } },
    TeamsPage: { screen: TeamsPage_1.default, navigationOptions: { tabBarLabel: '球队' } },
    CommunityPage: { screen: CommunityPage_1.default, navigationOptions: { tabBarLabel: '社区' } },
    MinePage: { screen: MinePage_1.default, navigationOptions: { tabBarLabel: '我的' } }
}, {
    navigationOptions: ({ navigation }) => ({
        headerStyle: {
            backgroundColor: colors_1.commonColors.topicColor,
        },
        headerTintColor: colors_1.commonColors.white,
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
    initialRouteName: 'MinePage'
});
exports.default = Tabs;
//# sourceMappingURL=index.js.map