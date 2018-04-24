import { AppRegistry } from 'react-native';
import Hello from '../basketballWorkflow/lib/component/Hello';
import Root from '../basketballWorkflow/lib/index';
import { YellowBox } from 'react-native';

YellowBox.ignoreWarnings(['Warning: GiftedListView: isMounted is deprecated.']);
AppRegistry.registerComponent('basketballWorkflow', () => Root);
