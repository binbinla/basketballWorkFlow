import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
  ScrollView,
  TextStyle,
  Image,
  TextInput
} from 'react-native';
import { connect } from 'react-redux'; // 引入connect函数
import { NavigationActions } from 'react-navigation';
import { Navigatable } from '../../types/general-types';
import { allReducer } from '../../reducers/index';
import { Action } from '../../actions/types';
import { commonColors } from '../../utils/colors';
import Toast, { DURATION } from 'react-native-easy-toast';
import CustomSearchBar from '../../component/CustomSearchBar';
import Channel from '../../network/index';
import { GameSearchResult } from '../../network/producer';
import { GameState } from '../../reducers/gameReducer';
import * as date from '../../utils/date';
import GameCard from '../../component/GameCard';
import teamMap from '../../utils/team-map';
import * as gameAction from '../../actions/gameAction';
import Spinner from '../../component/Spinner';

const GiftedListView = require('react-native-gifted-listview');

interface StateProps {
  readonly gamesParams: GameSearchResult
}

interface DispathProps {
  readonly getGameSearch: (year, month, date) => Action<void>
  readonly clearSearchGames: () => Action<void>
}

interface State {
  searchText?: string,
  loading: boolean
}

type Props = Navigatable & DispathProps & StateProps

class GameSearch extends React.Component<Props, State> {

  private listview;

  constructor(props: Props) {
    super(props);
    this.state = {
      loading: false
    }
  }

  static navigationOptions = {
    header: null,
    tabBarVisible: false,
  };

  // componentWillReceiveProps无效，为什么？
  // componentWillReceiveProps (nextProps: Props) {
  //   console.log('game search will receive')
  //   this.setState({ loading: nextProps.gamesParams.loading });
  // }

  // componentWillUnmount () {
  //   this.props.clearSearchGames();
  // }

  render() {
    return (
      <View style={styles.container}>
        <CustomSearchBar
          inputCallback={this._inputCallback}
          onSubmitEditing={this._onSubmitEditing}
          cancelOnPress={this._cancelOnPress}
        />
        <Spinner
          textContent={'查询中...'}
          visible={this.state.loading}
          color={commonColors.white}
          textStyle={{ fontSize: 10, color: commonColors.white }}
          hudBg={true}
        />
        <GiftedListView
          ref={(listview) => this.listview = listview}
          style={{ flex: 1 }}
          rowView={this._renderRowView.bind(this)}
          onFetch={this._onFetch.bind(this)}
          firstLoader={false}
          pagination={false}
          refreshable={false}
          withSections={true} // enable sections
          sectionHeaderView={this._renderSectionHeaderView}
          customStyles={{
            paginationView: {
              backgroundColor: commonColors.white,
            },
          }}
          refreshableTintColor="blue"
          emptyView={this._renderEmptyView}
        />
        <Toast
          ref="toast"
          position="center"
        />
      </View>
    )
  }

  _renderEmptyView = () => {
    return (
      <View></View>
    )
  }

  /**
   * will be called when refreshing
   * @param
   */
  _onFetch(page = 1, callback, options) {
    setTimeout(() => {
      let result = {};
      const searchResult = this.combineGames();
      result[`${this.props.gamesParams.gameGeneral.gameDate}${' '}${searchResult.length}场`] = searchResult
      callback(result);
    }, 2000);
  }

  combineGames = (): GameState[] => {
    const all: GameState[] = []
    const toast: any = this.refs.toast;
    if (this.props.gamesParams.gameGeneral.live.length === 0 &&
      this.props.gamesParams.gameGeneral.unstart.length === 0 &&
      this.props.gamesParams.gameGeneral.over.length === 0) {
        if (toast) {
          toast.show("当天没有比赛", DURATION.LONG);
        }
    }
    this.props.gamesParams.gameGeneral.live.forEach(item => {
      all.push(item);
    })
    this.props.gamesParams.gameGeneral.unstart.forEach(item => {
      all.push(item);
    })
    this.props.gamesParams.gameGeneral.over.forEach(item => {
      all.push(item);
    })
    this.setState({ loading: false });
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
        style={{ paddingTop: 10 }}
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
      gameItem: item
    });
  }

  _inputCallback = (text: string) => {
    this.setState({ searchText: text });
  }

  _onSubmitEditing = () => {
    if (this.state.searchText && this.state.searchText !== '') {
      const dates: string[] = this.state.searchText.split('/');
      const day: string = String(Number(dates[2]) - 1); 
      this.props.getGameSearch(dates[0], dates[1], day);
      this.setState({ loading: true }, () => {
        this.listview._refresh();
      })
    }
  }

  _cancelOnPress = () => {
    this.props.clearSearchGames();
    this.listview._refresh();
    this.props.navigation.goBack();
  }
}

interface Style {
  container: ViewStyle,
  header: ViewStyle,
  headerTitle: TextStyle
}

const styles = StyleSheet.create<Style>({
  container: {
    flex: 1,
    backgroundColor: commonColors.white,
  },
  header: {
    backgroundColor: commonColors.sectionHeader,
    padding: 5,
    marginTop: 10
  },
  headerTitle: {
    color: commonColors.sectionHeaderText,
  },
})

function mapStateToProps(reducer: any) {
  return {
    gamesParams: reducer.fetchSearchGamesHandler
  }
}

function mapDispatchToProps() {
  return (dispatch: any) => ({
    getGameSearch: (year, month, date) => dispatch(gameAction.getGameSearch(year, month, date)),
    clearSearchGames: () => dispatch(gameAction.clearSearchGames())
  })
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameSearch)