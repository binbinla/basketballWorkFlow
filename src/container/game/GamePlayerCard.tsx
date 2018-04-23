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

/** 
 * Props pass from parent
*/
interface Props extends ViewStyle {
  tabLabel: string 
}

interface State {
  dataSource
}

export default class GamePlayerCard extends React.Component<Props, State> {
  constructor(props: Props){
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2
      })
    }
  }

  componentWillMount() {
    let rows = Object.assign([])
    rows.unshift({}) // unshift an empty object, use it as title row
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(rows)
    })
  }

  render() {
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
            style={styles.listView} />        
        </ScrollView>
      </View>
    );
  }

  renderTitle = (index: number): JSX.Element => {
    return (
      <View style={[styles.playerBox, styles.titleRow]} key={index}>
        <View style={styles.p2}></View>
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

  renderRow = (rowData, sectionID, rowID, highlightRow): JSX.Element => {
    const index = parseInt(rowID, 10)
    if (index === 0) {
      return this.renderTitle(0);
    } else {
      return (
        <View style={[styles.playerBox]}>
        <View style={[styles.p2, { alignItems: 'center' }]}><Text style={styles.p2Name}>{'James'}</Text></View>
        <View style={styles.p1}><View style={{flexDirection: 'column', flex: 1}}><Text style={styles.dataBox}>{'前锋'}</Text></View></View>
        <View style={styles.p1}><View style={{flexDirection: 'column', flex: 1}}><Text style={styles.dataBox}>{28}</Text></View></View>
        <View style={styles.p1}><View style={{flexDirection: 'column', flex: 1}}><Text style={styles.dataBox}>{8}</Text></View></View>
        <View style={styles.p1}><View style={{flexDirection: 'column', flex: 1}}><Text style={styles.dataBox}>{10}</Text></View></View>
        <View style={styles.p1}><View style={{flexDirection: 'column', flex: 1}}><Text style={styles.dataBox}>{'10/21'}</Text></View></View>
        <View style={styles.p1}><View style={{flexDirection: 'column', flex: 1}}><Text style={styles.dataBox}>{2}</Text></View></View>
        <View style={styles.p1}><View style={{flexDirection: 'column', flex: 1}}><Text style={styles.dataBox}>{2}</Text></View></View>
        <View style={styles.p1}><View style={{flexDirection: 'column', flex: 1}}><Text style={styles.dataBox}>{'2/6'}</Text></View></View>
        <View style={styles.p1}><View style={{flexDirection: 'column', flex: 1}}><Text style={styles.dataBox}>{'6/6'}</Text></View></View>
        <View style={styles.p1}><View style={{flexDirection: 'column', flex: 1}}><Text style={styles.dataBox}>{6}</Text></View></View>
        <View style={styles.p1}><View style={{flexDirection: 'column', flex: 1}}><Text style={styles.dataBox}>{3}</Text></View></View>
        <View style={styles.p1}><View style={{flexDirection: 'column', flex: 1}}><Text style={styles.dataBox}>{+12}</Text></View></View>
        <View style={[styles.p1, {borderRightWidth: 0}]}><View style={{flexDirection: 'column', flex: 1}}><Text style={styles.dataBox}>{40}</Text></View></View>
      </View>
      )
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
    // alignItems: 'center',
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
