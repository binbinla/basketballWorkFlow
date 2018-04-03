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
// const HomeStack = StackNavigator({
// })
// const TeamsStack = StackNavigator({
// })
// const CommunityStack = StackNavigator({
// })
// const MineStack = StackNavigator({
// })
const Tabs = react_navigation_1.TabNavigator({
    HomePage: { screen: HomePage_1.default, navigationOptions: { tabBarLabel: '首页' } },
    TeamsPage: { screen: TeamsPage_1.default, navigationOptions: { tabBarLabel: '球队' } },
    CommunityPage: { screen: CommunityPage_1.default, navigationOptions: { tabBarLabel: '社区' } },
    MinePage: { screen: MinePage_1.default, navigationOptions: { tabBarLabel: '我的' } }
}, {
    // navigationOptions: ({ navigation }) => ({
    // }),
    tabBarComponent: react_navigation_1.TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false
}, {
    initialRouteName: 'HomePage'
});
exports.default = Tabs;
//# sourceMappingURL=index.js.map