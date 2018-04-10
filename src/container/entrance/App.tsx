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
    Login: { screen: LoginPage },
    Tabs: { screen: Tabs },    
  },
  {
    initialRouteName: 'Login'
  }
);

// export default App