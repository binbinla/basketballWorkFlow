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

/** 
 * Props pass from parent
*/
interface Props extends ViewStyle {
  // 
}

export default class TeamPlayerCard extends React.Component<Props, object> {
  constructor(props: Props){
    super(props);
  }
  render() {
    return (
      <View style={[styles.container]}>
        <View style={styles.leftContainer}>
          <Text style={styles.leftText}></Text>
          <Text style={[styles.leftText, {marginTop: 4}]}></Text>
        </View>
        <View style={styles.rightContainer}>
          <View style={styles.rightTop}>
            <Text style={styles.rightTopText}></Text>
            <Text style={styles.rightTopText}></Text>
            <Text style={styles.rightTopText}></Text>
          </View>
          <Text style={styles.rightCenterText}>{'场均数据：'}</Text>
          <View style={styles.rightBottom}>
            <Text style={styles.rightTopText}></Text>
            <Text style={styles.rightTopText}></Text>
            <Text style={styles.rightTopText}></Text>
            <Text style={styles.rightTopText}></Text>
            <Text style={styles.rightTopText}></Text>
          </View>
        </View>
      </View>
    );
  }
}

interface Styles {
  container: ViewStyle,
  leftContainer: ViewStyle,
  leftText: TextStyle,
  rightContainer: ViewStyle,
  rightTop: ViewStyle,
  rightCenter: ViewStyle,
  rightBottom: ViewStyle,
  rightTopText: TextStyle,
  rightCenterText: TextStyle,
}

const styles = StyleSheet.create<Styles>({
  container: {
    // flex: 1,
    flexDirection: 'row',
    backgroundColor: commonColors.white,
    padding: 8,
  },
  leftContainer: {
    flexDirection: 'column',
    justifyContent: 'center'
  },
  leftText: {
    fontSize: 14,
    color: commonColors.black
  },
  rightContainer: {
    flexDirection: 'column',
    marginLeft: 20,
    justifyContent: 'center'
  },
  rightTop: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  rightCenter: {

  },
  rightBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  rightTopText: {
    fontSize: 12,
    color: commonColors.gray
  },
  rightCenterText: {
    fontSize: 14,
    color: commonColors.black,
    marginTop: 5,
    marginBottom: 5
  }
}); 
