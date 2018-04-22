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
  bgColor?: string,
  atDetail?: boolean
}

export default class GameCard extends React.Component<Props, object> {
  constructor(props: Props){
    super(props);
  }
  render() {
    let containerStyle: ViewStyle
    let timeContainer: ViewStyle
    if (this.props.atDetail) {
      containerStyle = {

      },
      timeContainer = {
        right: 140
      }
    } else {
      containerStyle = {
        borderRadius: 5,
        marginHorizontal: 10
      },
      timeContainer = {
        right: 130
      }
    }
    const homeToLower = this.props.item.home.teamAbbreviate.toLowerCase();
    const visitorToLower = this.props.item.visitor.teamAbbreviate.toLowerCase();
    const homeTeamLogo = teamMap[homeToLower].logo
    const visitorTeamLogo = teamMap[visitorToLower].logo
    const homeTeamCity = teamMap[homeToLower].city
    const visitorTeamCity = teamMap[visitorToLower].city
    const homeTeamName = teamMap[homeToLower].team
    const visitorTeamName = teamMap[visitorToLower].team
    const homeScore = this.props.item.home.score
    const visitorScore = this.props.item.visitor.score
    const process = this.props.item.process.quarter + " " + this.props.item.process.time
    return (
      <View style={[styles.container, containerStyle, {backgroundColor: this.props.bgColor}]}>
        <View style={styles.leftCard}>
          <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <Image style={styles.image} source={homeTeamLogo} />
            <Text style={styles.teamName}>{homeTeamCity}</Text>
            <Text style={styles.teamName}>{homeTeamName}</Text>
          </View>
          <Text style={styles.leftScore}>{homeScore}</Text>
        </View>
        <View style={[styles.timeContainer, timeContainer]}>
         <Text style={styles.time}>{process}</Text>
        </View>
        <View style={styles.cutOffLine}/>
        <View style={styles.rightCard}>
          <Text style={styles.rightScore}>{visitorScore}</Text>
          <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <Image style={styles.image} source={visitorTeamLogo} />
            <Text style={styles.teamName}>{visitorTeamCity}</Text>
            <Text style={styles.teamName}>{visitorTeamName}</Text>
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
    // borderRadius: 5,
    // marginHorizontal: 10,
    flexDirection: 'row',
    backgroundColor: commonColors.white,
    paddingVertical: 8,
    paddingHorizontal: 5
  },
  leftCard: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  rightCard: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  leftScore: {
    fontSize: 18,
    color: commonColors.white,
    marginLeft: 10,
    // marginRight: 10,
    // marginTop: 40
  },
  rightScore: {
    fontSize: 18,
    color: commonColors.white,
    marginRight: 10,
    // marginLeft: 20,
    // marginTop: 40
  },
  image: {
   height: 90,
   width: 90
  },
  cutOffLine: {
    width: 1,
    height: 50, 
    backgroundColor: commonColors.white,
    marginTop: 45 
  },
  timeContainer: {
    position: 'absolute',
    right:  140,
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
