import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
  TextStyle
} from 'react-native';
import { connect } from 'react-redux'; // 引入connect函数
import { NavigationActions } from 'react-navigation';
import { Navigatable } from '../../types/general-types';
import { allReducer } from '../../reducers/index';
import { Action } from '../../actions/types';
import TeamCard from '../../component/TeamCard';
import { TeamRankResult } from '../../network/producer';
import * as teamAction from '../../actions/teamAction';
import * as date from '../../utils/date';
import { commonColors } from '../../utils/colors';
import { BasicTeamInfo } from '../../reducers/teamReducer';
import moment from 'moment-timezone';
import { western, eastern } from '../../mock_datas/team_rank_datas';
import { Zone } from '../team/TeamDetailCard';

const GiftedListView = require('react-native-gifted-listview');

const resetAction = NavigationActions.reset({
  index: 0,
  actions: [
    NavigationActions.navigate({ routeName: 'Hello' })
  ]
});

interface StateProps {
  readonly teamRankParams: TeamRankResult
}

interface DispathProps {
  readonly getTeamRank: (year, month, date) => Action<void>
}

type Props = Navigatable & StateProps & DispathProps

class TeamsPage extends React.Component<Props, {}> {

  private rank: number = 1
  private zone: Zone = Zone.WEST

  constructor(props: Props) {
    super(props);
  }
  static navigationOptions = {
    title: '球队'
  };

  componentWillMount() {
    const today = date.getToday();
    this.props.getTeamRank(today[0], today[1], today[2]);
  }

  componentWillReceiveProps(nextProps: Props) {
    // console.log('next Props' + JSON.stringify(nextProps));
  }

  render() {
    return (
      <View style={styles.container}>
        <GiftedListView
          style={{flex: 1}}
          rowView={this._renderRowView.bind(this)}
          onFetch={this._onFetch.bind(this)}
          firstLoader={true}
          pagination={false}
          refreshable={true}
          withSections={true} // enable sections
          sectionHeaderView={this._renderSectionHeaderView}
          customStyles={{
            paginationView: {
              backgroundColor: commonColors.white,
            },
          }}
          refreshableTintColor="blue"
          enableEmptySections={true}
        />
      </View>
    )
  }

  /**
   * will be called when refreshing
   * @param
   */
  _onFetch(page = 1, callback, options) {
    setTimeout(() => {
      let result = {};
      result['西部'] = this.props.teamRankParams.western
      result['东部'] = this.props.teamRankParams.eastern
      callback(result);
    }, 2000);
  }  

   /**
   * Render a row
   * @param {object} rowData Row data
   */
  _renderSectionHeaderView(sectionData, sectionID) {
    return (
      <View style={styles.header}>
        <Text style={styles.headerTitle}>
          {sectionID}
        </Text>
      </View>
    );
  }

  /***
   * Render a row
   * @param
   */
  _renderRowView(item: BasicTeamInfo, index: string) {
    if (this.rank > 15) {
      this.rank = 1;
    }    
    return (
      <TouchableOpacity
        style={{paddingTop: 10}}
        activeOpacity={0.8}
        onPress={() => this._onItemPress(item)}
      >
        <TeamCard
          item={item}
          rank={this.rank++}
        />
      </TouchableOpacity>
    )    
  }

  /**
   * when a row was touched
   * @param
   */
  _onItemPress(item: BasicTeamInfo) {
    console.log(item + 'was pressed');
    this.props.navigation.navigate('TeamDetail', {
      teamItem: item,
      rank: this.rank,
    }); 
  }

}

interface Style {
  container: ViewStyle,
  header: ViewStyle,
  headerTitle: TextStyle,
}

const styles = StyleSheet.create<Style>({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF'
  },
  header: {
    backgroundColor: commonColors.sectionHeader,
    padding: 5,
    marginTop: 10
  },
  headerTitle: {
    color: commonColors.sectionHeaderText,
  },
});

function mapStateToProps(reducer: any) {
  return {
    teamRankParams: reducer.fetchTeamsRankHandler
  }
}

function mapDispatchToProps() { 
  return (dispatch: any) => ({
    getTeamRank: (year, month, date) => dispatch(teamAction.getTeamRank(year, month, date))
  })
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TeamsPage)