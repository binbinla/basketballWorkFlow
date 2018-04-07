import * as React from 'react';
import { TabNavigator, StackNavigator, TabBarBottom, navigationOptions } from 'react-navigation';
import HomePage from './HomePage';
import TeamsPage from './TeamsPage';
import CommunityPage from './CommunityPage';
import MinePage from './MinePage';
import Hello from '../../component/Hello';
import LoginPage from '../account/Login';
import { commonColors } from '../../utils/colors';
import { App } from '../entrance/App';

// const HomeStack = StackNavigator({

// })

// const TeamsStack = StackNavigator({

// })

// const CommunityStack = StackNavigator({

// })

const MineStack = StackNavigator(
  {
    MinePage: { screen: MinePage },
    Hello: { screen: Hello},
    Login: { screen: LoginPage},
    // Tabs: { screen: Tabs}
  },
  {
    navigationOptions: {
      headerStyle: {
        backgroundColor: commonColors.topicColor,
      },
      headerTintColor: commonColors.white
    }
  }
)

export const Tabs = TabNavigator(
  {
    MineStack: { screen: MineStack, navigationOptions: { tabBarLabel: '我的'} },
    HomePage: { screen: HomePage, navigationOptions: { tabBarLabel: '首页'}},
    TeamsPage: { screen: TeamsPage, navigationOptions: { tabBarLabel: '球队'} },
    CommunityPage: { screen: CommunityPage, navigationOptions: { tabBarLabel: '社区'} },
    // MineStack: { screen: MineStack, navigationOptions: { tabBarLabel: '我的'} }
  },
  {
    navigationOptions: ({ navigation }) => ({
      // headerStyle: {
      //   backgroundColor: commonColors.topicColor,
      // },
      // headerTintColor: commonColors.white,
      header: null // 隐藏导航栏
    }),
    tabBarOptions: {
      activeTintColor: commonColors.topicColor,
      inactiveTintColor: commonColors.underGray,
      labelStyle: {
        fontSize: 15,
      }
    },
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false
  },
  {
    initialRouteName: 'MineStack'
  }
);


export default Tabs