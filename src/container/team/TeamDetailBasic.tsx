import * as React from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ViewStyle,
  TextStyle,
  TouchableOpacity,
  Image,
  ScrollView
} from 'react-native';
import { commonColors } from '../../utils/colors';
import { TeamDetailInfo } from '../../reducers/teamReducer';

/** 
 * Props pass from parent
*/
interface Props extends ViewStyle {
  teamDetail: TeamDetailInfo,
  tabLabel: string
}

export default class TeamDetailBasic extends React.Component<Props, object> {
  constructor(props: Props) {
    super(props);
  }
  render() {
    const teamDetail = JSON.stringify(this.props.teamDetail);
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
        <ScrollView
          showsVerticalScrollIndicator={true}
        >
          <View style={styles.contentContainer}>
            {this.renderData(nameArray)}
            {this.renderData(dataPartOne)}
            {/* {this.renderData(dataPartTwo, true)} */}
          </View>
        </ScrollView>
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
        {/* 接口返回值全为1，数据不准确，暂时不提供 */}
        {/* <View style={[styles.titleTextContainer, { borderRightWidth: 0 }]}>
          <Text style={styles.titleText}>{'联盟排名'}</Text>
        </View> */}
      </View>
    )
  }

  renderData = (data: any[], hideRightBorder?: boolean): JSX.Element => {
    const hideBorder: ViewStyle = hideRightBorder ? { borderRightWidth: 0 } : {}
    return (
      <View style={styles.itemNameContainer}>
        <View style={[styles.singleContentContainer, hideBorder]}><Text style={styles.singleContentText} key={data[0] + Math.random()}>{data[0]}</Text></View>
        <View style={[styles.singleContentContainer, hideBorder]}><Text style={styles.singleContentText} key={data[1] + Math.random()}>{data[1]}</Text></View>
        <View style={[styles.singleContentContainer, hideBorder]}><Text style={styles.singleContentText} key={data[2] + Math.random()}>{data[2]}</Text></View>
        <View style={[styles.singleContentContainer, hideBorder]}><Text style={styles.singleContentText} key={data[3] + Math.random()}>{data[3]}</Text></View>
        <View style={[styles.singleContentContainer, hideBorder]}><Text style={styles.singleContentText} key={data[4] + Math.random()}>{data[4]}</Text></View>
        <View style={[styles.singleContentContainer, hideBorder]}><Text style={styles.singleContentText} key={data[5] + Math.random()}>{data[5]}</Text></View>
        <View style={[styles.singleContentContainer, hideBorder]}><Text style={styles.singleContentText} key={data[6] + Math.random()}>{data[6]}</Text></View>
        <View style={[styles.singleContentContainer, hideBorder]}><Text style={styles.singleContentText} key={data[7] + Math.random()}>{data[7]}</Text></View>
        <View style={[styles.singleContentContainer, hideBorder]}><Text style={styles.singleContentText} key={data[8] + Math.random()}>{data[8]}</Text></View>
      </View>
    )
  }
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
    flex: 1,
    flexDirection: 'column',
    backgroundColor: commonColors.white
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: commonColors.borderColor,
    borderBottomWidth: 1
  },
  titleTextContainer: {
    flex: 1,
    borderRightColor: commonColors.borderColor,
    borderRightWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5
  },
  titleText: {
    fontSize: 15,
    color: commonColors.black
  },
  contentContainer: {
    flexDirection: 'row',
    marginLeft: 0.5
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
    borderBottomColor: commonColors.borderColor,
    borderBottomWidth: 1
  },
  singleContentText: {
    fontSize: 13,
    color: commonColors.black,
    // fontWeight: 'bold'
  },
});
