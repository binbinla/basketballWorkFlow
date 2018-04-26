import * as React from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ViewStyle,
  TextStyle,
  TouchableOpacity,
  Image
} from 'react-native';
import { commonColors } from '../../utils/colors';
import {} from '../../'

/** 
 * Props pass from parent
*/
interface Props extends ViewStyle {
  // 
}

export default class TeamDetailPlayers extends React.Component<Props, object> {
  constructor(props: Props){
    super(props);
  }
  render() {
    return (
      <View style={[styles.container]}>

      </View>
    );
  }
}

interface Styles {
  container: ViewStyle,
}

const styles = StyleSheet.create<Styles>({
  container: {
    // flex: 1,
    flexDirection: 'row',
    backgroundColor: commonColors.white,
  },
});
