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
import { CombineItem } from './TeamDetail';

/** 
 * Props pass from parent
*/
interface Props extends ViewStyle {
  combinePlayerItem: CombineItem
}

export default class TeamPlayerCard extends React.Component<Props, object> {
  constructor(props: Props){
    super(props);
  }
  render() {
    return (
      <View style={[styles.container]}>
        <View style={styles.leftContainer}>
          <Text style={styles.leftText}>{this.props.combinePlayerItem.personalPlayer.name}</Text>
          <Text style={[styles.leftText, {marginTop: 4}]}>{`${this.props.combinePlayerItem.personalPlayer.position}  ${this.props.combinePlayerItem.personalPlayer.number}`}</Text>
        </View>
        <View style={styles.rightContainer}>
          <View style={styles.rightTop}>
            <Text style={styles.rightTopText}>{`年龄 ${this.props.combinePlayerItem.personalPlayer.age}`}</Text>
            <Text style={styles.rightTopText}>{`身高 ${this.props.combinePlayerItem.personalPlayer.height}`}</Text>
            <Text style={styles.rightTopText}>{`体重 ${this.props.combinePlayerItem.personalPlayer.weight}`}</Text>
          </View>
          <Text style={styles.rightCenterText}>{'场均数据：'}</Text>
          <View style={styles.rightBottom}>
            <Text style={styles.rightTopText}>{`分数 ${this.props.combinePlayerItem.detailPlayer.pts}`}</Text>
            <Text style={styles.rightTopText}>{`篮板 ${this.props.combinePlayerItem.detailPlayer.reb}`}</Text>
            <Text style={styles.rightTopText}>{`助攻 ${this.props.combinePlayerItem.detailPlayer.ast}`}</Text>
          </View>
          <View style={styles.rightBottom}>
            <Text style={styles.rightTopText}>{`上场时间 ${this.props.combinePlayerItem.detailPlayer.min}`}</Text>
            <Text style={styles.rightTopText}>{`出场数 ${this.props.combinePlayerItem.detailPlayer.gp}`}</Text>
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
    flexDirection: 'row',
    backgroundColor: commonColors.white,
    padding: 8,
    borderBottomColor: commonColors.gray,
    borderBottomWidth: 1
  },
  leftContainer: {
    flex: 1.5,
    flexDirection: 'column',
    justifyContent: 'center'
  },
  leftText: {
    fontSize: 14,
    color: commonColors.black
  },
  rightContainer: {
    flex: 2,
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
    color: commonColors.black
  },
  rightCenterText: {
    fontSize: 14,
    color: commonColors.black,
    marginTop: 5,
    marginBottom: 5
  }
}); 
