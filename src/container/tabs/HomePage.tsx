import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
  TextStyle,
  YellowBox
} from 'react-native';
import { connect } from 'react-redux'; // 引入connect函数
import { NavigationActions } from 'react-navigation';
import { Navigatable } from '../../types/general-types';
import { allReducer } from '../../reducers/index';
import { Action } from '../../actions/types';
import GameCard from '../../component/GameCard';
import { commonColors } from '../../utils/colors';
import { GameState, DayType } from '../../reducers/gameReducer';
import * as gameAction from '../../actions/gameAction';
import * as date from '../../utils/date';
import { GameGeneralResult } from '../../network/producer';
import teamMap from '../../utils/team-map';
import * as teamAction from '../../actions/teamAction';

const GiftedListView = require('react-native-gifted-listview');
// const jsonData = require('../../mock_datas/teamDetail/teamDetailWestern/team_detail_hou.json');

const resetAction = NavigationActions.reset({
  index: 0,
  actions: [
    NavigationActions.navigate({ routeName: 'Hello' })
  ]
})

interface StateProps {
  readonly gamesParams: GameGeneralResult[]
}

interface DispathProps {
  readonly fetchGames: () => Action<void>
  readonly getGameGeneral: (year, month, date) =>  Action<void>
  readonly getYesterdayGameGeneral: (year, month, date) =>  Action<void>
  readonly getTeamRank: (year, month, date) => Action<void>
}

type Props = Navigatable & StateProps & DispathProps

interface State {
  date: string[]
}

class HomePage extends React.Component<Props, State> {
  
  constructor(props: Props) {
    super(props);
    this.state = {
      date: date.getToday()
    }
  }
  static navigationOptions = {
    title: '赛况'
  };

  componentWillMount() {
    // this.props.fetchGames();
    const today = date.getToday()
    this.props.getGameGeneral(today[0], today[1], today[2]);
    const yesterday = date.getYesterday()
    this.props.getYesterdayGameGeneral(yesterday[0], yesterday[1], yesterday[2])
  }

  componentDidMount() {
    //
  }

  componentWillUnmount() {
    // console.log('jsonData' + jsonData);
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
          paginationWaitingView={this._renderPaginationWaitingView}
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
      const todayResult = this.combineGames(DayType.today);
      const yesterdayResult = this.combineGames(DayType.yesterday);
      result[`${this.props.gamesParams['today'].gameDate}${' '}${date.getWeekDay(DayType.today)}${' '}${todayResult.length}场`] = todayResult
      result[`${this.props.gamesParams['yesterday'].gameDate}${' '}${date.getWeekDay(DayType.yesterday)}${' '}${yesterdayResult.length}场`] = yesterdayResult
      callback(result);
    }, 2000);
  }

  combineGames = (type: DayType): GameState[] => {
    const all: GameState[] = []
    if (type === DayType.today) {
      this.props.gamesParams['today'].live.forEach(item => {
        all.push(item);
      })
      this.props.gamesParams['today'].unstart.forEach(item => {
        all.push(item);
      })
      this.props.gamesParams['today'].over.forEach(item => {
        all.push(item);
      })
    } else if (type === DayType.yesterday) {
      this.props.gamesParams['yesterday'].live.forEach(item => {
        all.push(item);
      })
      this.props.gamesParams['yesterday'].unstart.forEach(item => {
        all.push(item);
      })
      this.props.gamesParams['yesterday'].over.forEach(item => {
        all.push(item);
      })
    }
    return all;
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
  _renderRowView(item: GameState) {
    const color = teamMap[item.home.teamAbbreviate].color
    return (
      <TouchableOpacity
        style={{paddingTop: 10}}
        activeOpacity={0.8}
        onPress={() => this._onItemPress(item)}
      >
        <GameCard
          item={item}
          bgColor={color}
        />
      </TouchableOpacity>
    )    
  }

  /**
   * when a row was touched
   * @param
   */
  _onItemPress(item: GameState) {
    console.log(item + 'was pressed');
    this.props.navigation.navigate('GameDetail', {
      // gameId: item.id,
      // gameDate: item.date
      gameItem: item
    }); 
  }

  _renderPaginationWaitingView(paginateCallback) {
    return (
      <TouchableOpacity
        onPress={paginateCallback}
        style={styles.paginationView}
      >
        <Text style={[styles.paginationText]}>
          加载更多
        </Text>
      </TouchableOpacity>
    );
  }

}

interface Style {
  container: ViewStyle,
  header: ViewStyle,
  headerTitle: TextStyle,
  paginationView: ViewStyle,
  paginationText: TextStyle
}

const styles = StyleSheet.create<Style>({
  container: {
    flex: 1,
    backgroundColor: commonColors.white
  },
  header: {
    backgroundColor: commonColors.sectionHeader,
    padding: 5,
    marginTop: 10
  },
  headerTitle: {
    color: commonColors.sectionHeaderText,
  },
  paginationView: {
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: commonColors.white,
  },
  paginationText: {
    fontSize: 13,
    color: commonColors.underGray,
  }
});

function mapStateToProps(reducer: any) {
  return {
    gamesParams: reducer.fetchGamesHandler
  }
}
 
function mapDispatchToProps() { 
  return (dispatch: any) => ({
    fetchGames: () => dispatch(gameAction.fetchGames()),
    getGameGeneral: (year, month, date) => dispatch(gameAction.getGameGeneral(year, month, date)),
    getYesterdayGameGeneral: (year, month, date) => dispatch(gameAction.getYesterdayGameGeneral(year, month, date)),
    getTeamRank: (year, month, date) => dispatch(teamAction.getTeamRank(year, month, date))
  })
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage)