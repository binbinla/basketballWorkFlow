import { AppRegistry } from 'react-native';
import Hello from '../basketballWorkflow/lib/component/Hello';
import Root from '../basketballWorkflow/lib/index';
import { YellowBox } from 'react-native';

AppRegistry.registerComponent('basketballWorkflow', () => Root);
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);