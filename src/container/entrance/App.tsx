import * as React from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import LoginPage from '../account/Login';
import Hello from '../../component/Hello';
import { StackNavigator } from 'react-navigation';

const App = StackNavigator({
  Login: { screen: LoginPage},
  Hello: {screen: Hello}
});

export default App