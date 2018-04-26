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
import { BasicTeamInfo } from '../../reducers/teamReducer';
import teamMap from '../../utils/team-map';

export enum Zone {
  WEST = 1,
  EAST = 2
}

/** 
 * Props pass from parent
*/
interface Props extends ViewStyle {
  teamItem:  BasicTeamInfo,
  rank: number,
  zone: Zone 
}

export default class TeamDetailCard extends React.Component<Props, object> {
  constructor(props: Props){
    super(props);
  }
  render() {
    const area = teamMap[this.props.teamItem.name].city
    const teamName = teamMap[this.props.teamItem.name].team
    const logo = teamMap[this.props.teamItem.name].logo
    const zone = this.props.zone === Zone.WEST ? '西部排名第 ' : '东部排名第 '
    return (
      <View style={[styles.container]}>
        <View style={styles.teamNameContainer}>
          <Text style={styles.areaText}>{area}</Text>
          <Text style={styles.nameText}>{teamName}</Text>
        </View>
        <Image
          style={styles.image}
          source={logo}
        />
        <View style={styles.rightContainer}>
          <Text style={styles.rightText}>{`${this.props.teamItem.win}胜-${this.props.teamItem.loss}负`}</Text>
          <Text style={[styles.rightText, {marginTop: 5}]}>{`${zone}${this.props.rank}`}</Text>
        </View>
      </View>
    );
  }
}

interface Styles {
  container: ViewStyle,
  teamNameContainer: ViewStyle,
  areaText: TextStyle,
  nameText: TextStyle,
  image: ViewStyle,
  rightContainer: ViewStyle,
  rightText: TextStyle
}

const styles = StyleSheet.create<Styles>({
  container: {
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 8
  },
  teamNameContainer: {
    flexDirection: 'column'
  },
  areaText: {
    fontSize: 14,
    color: commonColors.white 
  },
  nameText: {
    fontSize: 16,
    color: commonColors.white,
    marginTop: 5
  },
  image: {
    width: 50,
    height: 50
  },
  rightContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  rightText: {
    fontSize: 13,
    color: commonColors.white
  }
});
