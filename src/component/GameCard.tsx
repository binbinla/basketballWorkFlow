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
import { GameState } from '../reducers/gameReducer';
import teamMap from '../utils/team-map';

/** 
 * 
*/
interface Props extends ViewStyle {
  // homeTeamItem: GameState,
  // guestTeamItem: GameState,
  item: GameState,
  bgColor?: string
}

export default class GameCard extends React.Component<Props, object> {
  constructor(props: Props){
    super(props);
  }
  render() {
    const homeTeamLogo = teamMap[this.props.item.home.teamAbbreviate].logo
    const visitorTeamLogo = teamMap[this.props.item.visitor.teamAbbreviate].logo
    const homeTeamCity = teamMap[this.props.item.home.teamAbbreviate].city
    const visitorTeamCity = teamMap[this.props.item.visitor.teamAbbreviate].city
    return (
      <View style={[styles.container, {backgroundColor: this.props.bgColor}]}>
        <View style={styles.leftCard}>
          <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <Image style={styles.image} source={homeTeamLogo} />
            <Text style={styles.teamName}>{homeTeamCity}</Text>
          </View>
          <Text style={styles.leftScore}>{100}</Text>
        </View>
        <View style={styles.timeContainer}>
         <Text style={styles.time}>{'Q4 4:32'}</Text>
        </View>
        <View style={styles.cutOffLine}/>
        <View style={styles.rightCard}>
          <Text style={styles.rightScore}>{101}</Text>
          <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <Image style={styles.image} source={visitorTeamLogo} />
            <Text style={styles.teamName}>{visitorTeamCity}</Text>
          </View>
        </View>
      </View>
    );
  }
}

interface Styles {
  container: ViewStyle,
  leftCard: ViewStyle,
  rightCard: ViewStyle,
  leftScore: TextStyle,
  rightScore: TextStyle,
  image: ViewStyle,
  cutOffLine: ViewStyle,
  timeContainer: ViewStyle,
  time: TextStyle,
  teamName: TextStyle
}

const styles = StyleSheet.create<Styles>({
  container: {
    // flex: 1,
    flexDirection: 'row',
    backgroundColor: commonColors.white,
    borderRadius: 5,
    marginHorizontal: 10,
    paddingVertical: 8,
    paddingHorizontal: 10
  },
  leftCard: {
    flex: 1,
    flexDirection: 'row',
  },
  rightCard: {
    flex: 1,
    flexDirection: 'row',
  },
  leftScore: {
    fontSize: 18,
    color: commonColors.white,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 40
  },
  rightScore: {
    fontSize: 18,
    color: commonColors.white,
    marginRight: 10,
    marginLeft: 10,
    marginTop: 40
  },
  image: {
   height: 90,
   width: 90
  },
  cutOffLine: {
    width: 1,
    height: 50, 
    backgroundColor: commonColors.white,
    marginTop: 30
  },
  timeContainer: {
    position: 'absolute',
    right: 125,
    top: 5
  },
  time: {
    fontSize: 13,
    color: commonColors.white
  },
  teamName: {
    fontSize: 15,
    color: commonColors.white
  }
});
