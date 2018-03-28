import * as React from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import LoginPage from '../account/Login';
import Hello from '../../component/Hello';
import Tabs from '../tabs/index';
import { StackNavigator } from 'react-navigation';

export const App = StackNavigator(
  {
    Tabs: { screen: Tabs },    
    Login: { screen: LoginPage },
  },
  {
    initialRouteName: 'Tabs'
  }
);

// export default App