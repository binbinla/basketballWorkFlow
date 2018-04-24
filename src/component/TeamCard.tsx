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
import { commonColors } from '../utils/colors';
import teamMap from '../utils/team-map';
import { BasicTeamInfo } from '../reducers/teamReducer';

/** 
 * Props pass from parent
*/
interface Props extends ViewStyle {
  item: BasicTeamInfo
  rank: number
}

export default class TeamCard extends React.Component<Props, object> {
  constructor(props: Props){
    super(props);
  }
  render() {
    const area = teamMap[this.props.item.name].city
    const teamName = teamMap[this.props.item.name].team
    const logo = teamMap[this.props.item.name].logo
    return (
      <View style={[styles.container]}>
        <View style={styles.leftContainer}>
          <Text style={styles.rankingText}>
            { this.props.rank }
          </Text>
          <View style={{marginLeft: 15}}>
            <Text style={styles.areaText}> {area} </Text>
            <Text style={styles.teamNameText}> {teamName} </Text>
          </View>
        </View>
        <View style={styles.rightContainer}>
          <Text style={styles.scoreText}>
            {`${this.props.item.win}胜-${this.props.item.loss}负`}
          </Text>
          <Image
            style={styles.image}
            source={logo}
          />
        </View>
      </View>
    );
  }
}

interface Styles {
  container: ViewStyle,
  leftContainer: ViewStyle,
  rightContainer: ViewStyle,
  rankingText: TextStyle,
  areaText: TextStyle,
  teamNameText: TextStyle,
  scoreText: TextStyle,
  image: ViewStyle
}

const styles = StyleSheet.create<Styles>({
  container: {
    // flex: 1,
    flexDirection: 'row',
    backgroundColor: commonColors.white,
    paddingHorizontal: 15,
    paddingVertical: 8,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: commonColors.borderColor,
    borderBottomWidth: 0.5
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  rightContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  rankingText: {
    fontSize: 14,
    color: '#667893'
  },
  areaText: {
    fontSize: 16,
    color: '#647791'
  },
  teamNameText: {
    fontSize: 14,
    color: '#8D9AAD',
    marginTop: 4
  },
  scoreText: {
    fontSize: 14,
    color: commonColors.black,
    // fontWeight: 'bold'
  },
  image: {
    width: 50,
    height: 50,
    marginLeft: 20
  }
});
