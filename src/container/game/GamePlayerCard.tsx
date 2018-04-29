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
  ScrollView,
  ListView
} from 'react-native';
import { commonColors } from '../../utils/colors';
import { Player } from '../../model/player';
import { PlayerPosition } from '../../model/player';
 
/** 
 * Props pass from parent
*/
interface Props extends ViewStyle {
  tabLabel: string,
  players: Player[]
}

interface State {
  dataSource
}

export default class GamePlayerCard extends React.Component<Props, State> {
  constructor(props: Props){
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    let rows = Object.assign([], this.props.players);
    rows.unshift({
      last_name: '',
      starting_position: '',
      points: '',
      assists: '',
      rebounds_offensive: '',
      rebounds_defensive: '',
      field_goals_made: '',
      field_goals_attempted: '',
      blocks: '',
      steals: '',
      three_pointers_made: '',
      three_pointers_attempted: '',
      free_throws_made: '',
      free_throws_attempted: '',
      turnovers: '',
      fouls: '',
      plus_minus: '',
      minutes: '',
    }) // unshift an empty object, use it as title row    
    this.state = {
      dataSource: ds.cloneWithRows(rows)
    }
  }

  render() {
    // console.log('players card players' + JSON.stringify(this.props.players));
    return (
      <View style={[styles.container]}>
        <ScrollView 
          style={[styles.scrollView]}
          automaticallyAdjustContentInsets={false}
          horizontal={true}
        >
          <ListView
            dataSource={this.state.dataSource}
            renderRow={this.renderRow.bind(this)}
            style={styles.listView} 
          />        
        </ScrollView>
      </View>
    );
  }

  renderTitle = (index: number): JSX.Element => {
    return (
      <View style={[styles.playerBox, styles.titleRow]} key={index}>
        <View style={styles.p2}><View style={{flexDirection: 'column', flex: 1}}><Text style={styles.title}>名字</Text></View></View>
        <View style={styles.p1}><View style={{flexDirection: 'column', flex: 1}}><Text style={styles.title}>位置</Text></View></View>
        <View style={styles.p1}><View style={{flexDirection: 'column', flex: 1}}><Text style={styles.title}>得分</Text></View></View>
        <View style={styles.p1}><View style={{flexDirection: 'column', flex: 1}}><Text style={styles.title}>助攻</Text></View></View>
        <View style={styles.p1}><View style={{flexDirection: 'column', flex: 1}}><Text style={styles.title}>篮板</Text></View></View>
        <View style={styles.p1}><View style={{flexDirection: 'column', flex: 1}}><Text style={styles.title}>投篮</Text></View></View>
        <View style={styles.p1}><View style={{flexDirection: 'column', flex: 1}}><Text style={styles.title}>盖帽</Text></View></View>
        <View style={styles.p1}><View style={{flexDirection: 'column', flex: 1}}><Text style={styles.title}>抢断</Text></View></View>
        <View style={styles.p1}><View style={{flexDirection: 'column', flex: 1}}><Text style={styles.title}>三分</Text></View></View>
        <View style={styles.p1}><View style={{flexDirection: 'column', flex: 1}}><Text style={styles.title}>罚篮</Text></View></View>
        <View style={styles.p1}><View style={{flexDirection: 'column', flex: 1}}><Text style={styles.title}>失误</Text></View></View>
        <View style={styles.p1}><View style={{flexDirection: 'column', flex: 1}}><Text style={styles.title}>犯规</Text></View></View>
        <View style={styles.p1}><View style={{flexDirection: 'column', flex: 1}}><Text style={styles.title}>正负值</Text></View></View>
        <View style={[styles.p1, {borderRightWidth: 0}]}><View style={{flexDirection: 'column', flex: 1}}><Text style={styles.title}>上场时间</Text></View></View>
      </View>
    )
  }

  renderRow = (rowData: Player, sectionID, rowID, highlightRow): JSX.Element => {
    const index = parseInt(rowID, 10)
    if (index === 0) {
      return this.renderTitle(0);
    } else {
      return (
        <View style={[styles.playerBox]}>
        <View style={[styles.p2, { alignItems: 'center' }]}><Text style={styles.p2Name}>{rowData.last_name}</Text></View>
        <View style={styles.p1}><View style={{flexDirection: 'column', flex: 1}}><Text style={styles.dataBox}>{this.mapPositionToChinese(rowData.starting_position)}</Text></View></View>
        <View style={styles.p1}><View style={{flexDirection: 'column', flex: 1}}><Text style={styles.dataBox}>{rowData.points}</Text></View></View>
        <View style={styles.p1}><View style={{flexDirection: 'column', flex: 1}}><Text style={styles.dataBox}>{rowData.assists}</Text></View></View>
        <View style={styles.p1}><View style={{flexDirection: 'column', flex: 1}}><Text style={styles.dataBox}>{String(Number(rowData.rebounds_offensive) + Number(rowData.rebounds_defensive))}</Text></View></View>
        <View style={styles.p1}><View style={{flexDirection: 'column', flex: 1}}><Text style={styles.dataBox}>{`${rowData.field_goals_made}/${rowData.field_goals_attempted}`}</Text></View></View>
        <View style={styles.p1}><View style={{flexDirection: 'column', flex: 1}}><Text style={styles.dataBox}>{rowData.blocks}</Text></View></View>
        <View style={styles.p1}><View style={{flexDirection: 'column', flex: 1}}><Text style={styles.dataBox}>{rowData.steals}</Text></View></View>
        <View style={styles.p1}><View style={{flexDirection: 'column', flex: 1}}><Text style={styles.dataBox}>{`${rowData.three_pointers_made}/${rowData.three_pointers_attempted}`}</Text></View></View>
        <View style={styles.p1}><View style={{flexDirection: 'column', flex: 1}}><Text style={styles.dataBox}>{`${rowData.free_throws_made}/${rowData.free_throws_attempted}`}</Text></View></View>
        <View style={styles.p1}><View style={{flexDirection: 'column', flex: 1}}><Text style={styles.dataBox}>{rowData.turnovers}</Text></View></View>
        <View style={styles.p1}><View style={{flexDirection: 'column', flex: 1}}><Text style={styles.dataBox}>{rowData.fouls}</Text></View></View>
        <View style={styles.p1}><View style={{flexDirection: 'column', flex: 1}}><Text style={styles.dataBox}>{rowData.plus_minus}</Text></View></View>
        <View style={[styles.p1, {borderRightWidth: 0}]}><View style={{flexDirection: 'column', flex: 1}}><Text style={styles.dataBox}>{rowData.minutes}</Text></View></View>
      </View>
      )
    }
  }

  mapPositionToChinese = (position: string): string => {
    if (position === 'C') {
      return  PlayerPosition.C;
    } else if (position === 'PF'){
      return PlayerPosition.PF
    } else if (position === 'PG') {
      return PlayerPosition.PG
    } else if (position === 'SF') {
      return PlayerPosition.SF
    } else {
      return PlayerPosition.SG
    }
  }
}

interface Styles {
  container: ViewStyle,
  scrollView: ViewStyle,
  listView: ViewStyle,
  playerBox: ViewStyle,
  titleRow: ViewStyle,
  p2: ViewStyle,
  title: TextStyle,
  p1: ViewStyle,
  p2Name: TextStyle,
  dataBox: TextStyle
}

const styles = StyleSheet.create<Styles>({
  container: {
    flex: 13,
    // flexDirection: 'row',
    backgroundColor: commonColors.white,
    position: 'relative',
  },
  scrollView: {
    flex: 1,
    width: 400,
  },
  listView: {
    flex: 1,
    flexDirection: 'column',
    marginBottom: 48,
    marginRight: 60,
    width: 1500
  },
  playerBox: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'stretch',
    borderBottomColor: commonColors.borderColor,
    borderBottomWidth: 1,
    height: 30
  },
  titleRow: {
    borderBottomWidth: 2,
    borderStyle: 'solid'
  },
  p1: {
    borderRightColor: commonColors.borderColor,
    borderRightWidth: 1,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  title: {
    alignSelf: 'flex-start',
    color: '#7F7F7F',
    fontSize: 12
  },
  p2: {
    alignItems: 'center',
    borderRightColor: commonColors.borderColor,
    borderRightWidth: 2,
    flex: 1,
    flexDirection: 'row'
  },
  p2Name: {
    color: commonColors.black,
    fontSize: 12,
    paddingLeft: 5
  },
  dataBox: {
    alignSelf: 'center',
    color: commonColors.black,
    fontSize: 10,
  }
});
