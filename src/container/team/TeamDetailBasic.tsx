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
import { TeamDetailInfo } from '../../reducers/teamReducer';

/** 
 * Props pass from parent
*/
interface Props extends ViewStyle {
  teamDetail: TeamDetailInfo
}

export default class TeamDetailBasic extends React.Component<Props, object> {
  constructor(props: Props) {
    super(props);
  }
  render() {
    const nameArray: string[] = [
      '胜率',
      '投篮命中率',
      '三分球命中率',
      '篮板',
      '助攻',
      '失误',
      '抢断',
      '盖帽',
      '场均得分'
    ];
    const dataPartOne: number[] = [
      this.props.teamDetail.w_pct,
      this.props.teamDetail.fg_pct,
      this.props.teamDetail.fg3_pct,
      this.props.teamDetail.reb,
      this.props.teamDetail.ast,
      this.props.teamDetail.tov,
      this.props.teamDetail.stl,
      this.props.teamDetail.blk,
      this.props.teamDetail.pts
    ];
    const dataPartTwo: number[] = [
      this.props.teamDetail.w_pct_rank,
      this.props.teamDetail.fg_pct_rank,
      this.props.teamDetail.fg3_pct_rank,
      this.props.teamDetail.reb_rank,
      this.props.teamDetail.ast_rank,
      this.props.teamDetail.tov_rank,
      this.props.teamDetail.stl_rank,
      this.props.teamDetail.blk_rank,
      this.props.teamDetail.pts_rank
    ]
    return (
      <View style={[styles.container]}>
        {this.renderTitle()}
        <View style={styles.contentContainer}>
          {this.renderData(nameArray)}
          {this.renderData(dataPartOne)}
          {this.renderData(dataPartTwo, true)}
        </View>
      </View>
    );
  }

  renderTitle = (): JSX.Element => {
    return (
      <View style={styles.titleContainer}>
        <View style={styles.titleTextContainer}>
          <Text style={styles.titleText}>{'数据项目'}</Text>
        </View>
        <View style={styles.titleTextContainer}>
          <Text style={styles.titleText}>{'数据值'}</Text>
        </View>
        <View style={[styles.titleTextContainer, {borderRightWidth: 0}]}>
          <Text style={styles.titleText}>{'联盟排名'}</Text>
        </View>
      </View>
    )
  }

  renderData = (data: any[], hideRightBorder?: boolean): JSX.Element => {
    const hideBorder: ViewStyle = hideRightBorder ? { borderRightWidth: 0 } : {}
    return (
      <View style={styles.itemNameContainer}>
        <View style={[styles.singleContentContainer, hideBorder]}><Text style={styles.singleContentText}>{data[0]}</Text></View>
        <View style={[styles.singleContentContainer, hideBorder]}><Text style={styles.singleContentText}>{data[1]}</Text></View>
        <View style={[styles.singleContentContainer, hideBorder]}><Text style={styles.singleContentText}>{data[2]}</Text></View>
        <View style={[styles.singleContentContainer, hideBorder]}><Text style={styles.singleContentText}>{data[3]}</Text></View>
        <View style={[styles.singleContentContainer, hideBorder]}><Text style={styles.singleContentText}>{data[4]}</Text></View>
        <View style={[styles.singleContentContainer, hideBorder]}><Text style={styles.singleContentText}>{data[5]}</Text></View>
        <View style={[styles.singleContentContainer, hideBorder]}><Text style={styles.singleContentText}>{data[6]}</Text></View>
        <View style={[styles.singleContentContainer, hideBorder]}><Text style={styles.singleContentText}>{data[7]}</Text></View>
        <View style={[styles.singleContentContainer, hideBorder]}><Text style={styles.singleContentText}>{data[8]}</Text></View>
      </View>
    )
  } 

  // renderDataPartOne = (): JSX.Element => {
  //   return (
  //     <View style={styles.itemNameContainer}>
  //       <View style={[styles.singleContentContainer, hideBorder]}><Text style={styles.singleContentText}>{}</Text></View>
  //       <View style={[styles.singleContentContainer, hideBorder]}><Text style={styles.singleContentText}>{}</Text></View>
  //       <View style={[styles.singleContentContainer, hideBorder]}><Text style={styles.singleContentText}>{}</Text></View>
  //       <View style={[styles.singleContentContainer, hideBorder]}><Text style={styles.singleContentText}>{}</Text></View>
  //       <View style={[styles.singleContentContainer, hideBorder]}><Text style={styles.singleContentText}>{}</Text></View>
  //       <View style={[styles.singleContentContainer, hideBorder]}><Text style={styles.singleContentText}>{}</Text></View>
  //       <View style={[styles.singleContentContainer, hideBorder]}><Text style={styles.singleContentText}>{}</Text></View>
  //       <View style={[styles.singleContentContainer, hideBorder]}><Text style={styles.singleContentText}>{}</Text></View>
  //       <View style={[styles.singleContentContainer, hideBorder]}><Text style={styles.singleContentText}>{}</Text></View>
  //     </View>
  //   )
  // }
}

interface Styles {
  container: ViewStyle,
  titleContainer: ViewStyle,
  titleTextContainer: ViewStyle,
  titleText: TextStyle,
  contentContainer: ViewStyle,
  itemNameContainer: ViewStyle,
  singleContentContainer: ViewStyle,
  singleContentText: TextStyle,
}

const styles = StyleSheet.create<Styles>({
  container: {
    flexDirection: 'column',
    backgroundColor: commonColors.white,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomColor: commonColors.borderColor,
    borderBottomWidth: 1
  },
  titleTextContainer: {
    borderRightColor: commonColors.borderColor,
    borderRightWidth: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  titleText: {
    fontSize: 15,
    color: commonColors.black,
  },
  contentContainer: {
    flex: 3,
    flexDirection: 'row'
  },
  itemNameContainer: {
    flex: 1,
    flexDirection: 'column'
  },
  singleContentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    borderRightColor: commonColors.borderColor,
    borderRightWidth: 1,
  },
  singleContentText: {
    fontSize: 13,
    color: commonColors.black,
    // fontWeight: 'bold'
  },
});
