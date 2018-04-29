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
import { BasicTeamInfo, TeamDetailInfo, PlayerPersonalInfo, teamDetailInitial, playerPersonalInitial } from '../../reducers/teamReducer';
import { TeamPlayer } from '../../model/player';
import { CombineItem } from './TeamDetail';
import TeamPlayerCard from './TeamPlayerCard';

/** 
 * Props pass from parent
*/
interface Props extends ViewStyle {
  combineDatas: CombineItem[],
  tabLabel: string
}

interface State {
  dataSource
}

export default class TeamDetailPlayers extends React.Component<Props, State> {
  constructor(props: Props){
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    let rows = Object.assign([], this.props.combineDatas);
    this.state = {
      dataSource: ds.cloneWithRows(rows)
    }
  }
  render() {
    return (
      <View style={[styles.container]}>
        <ScrollView
          showsVerticalScrollIndicator={true}
        />
          <ListView
            dataSource={this.state.dataSource}
            renderRow={this.renderRow.bind(this)}
            style={styles.listView} 
          />
      </View>
    )
  }

  renderRow = (rowData: CombineItem, sectionID, rowID, highlightRow): JSX.Element => {
    return (
      <TouchableOpacity
        style={{marginTop: 5}}
        activeOpacity={0.8}
        onPress={() => this._onItemPress(rowData)}
      >
        <TeamPlayerCard
          combinePlayerItem={rowData}
        />
      </TouchableOpacity>      
    )
  }

  /**
   * when a row was touched
   * @param
   */
  _onItemPress(item: CombineItem) {
    console.log(item + 'was pressed');
  }  
}

interface Styles {
  container: ViewStyle,
  listView: ViewStyle,
}

const styles = StyleSheet.create<Styles>({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: commonColors.white
  },
  listView: {
    flexDirection: 'column'
  },
});
