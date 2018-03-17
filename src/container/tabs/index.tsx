import * as React from 'react';
import { TabNavigator, StackNavigator, TabBarBottom, navigationOptions } from 'react-navigation';
import HomePage from './HomePage';
import TeamsPage from './TeamsPage';
import CommunityPage from './CommunityPage';
import MinePage from './MinePage';


// const HomeStack = StackNavigator({

// })

// const TeamsStack = StackNavigator({

// })

// const CommunityStack = StackNavigator({

// })

// const MineStack = StackNavigator({

// })

const Tabs = TabNavigator(
  {
    HomePage: { screen: HomePage, navigationOptions: { tabBarLabel: '首页'}},
    TeamsPage: { screen: TeamsPage, navigationOptions: { tabBarLabel: '球队'} },
    CommunityPage: { screen: CommunityPage, navigationOptions: { tabBarLabel: '社区'} },
    MinePage: { screen: MinePage, navigationOptions: { tabBarLabel: '我的'} }
  },
  {
    // navigationOptions: ({ navigation }) => ({

    // }),
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false
  },
  {
    initialRouteName: 'HomePage'
  }
);


export default Tabs