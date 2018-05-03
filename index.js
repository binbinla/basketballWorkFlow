import { AppRegistry } from 'react-native';
import Hello from '../basketballWorkflow/lib/component/Hello';
import Root from '../basketballWorkflow/lib/index';
import { YellowBox } from 'react-native';

YellowBox.ignoreWarnings(['Warning: GiftedListView: isMounted is deprecated.']);
YellowBox.ignoreWarnings(['Warning: In next release empty section headers will be rendered.']);
YellowBox.ignoreWarnings(['Warning: Can only update a mounted or mounting component.']);
AppRegistry.registerComponent('basketballWorkflow', () => Root);
