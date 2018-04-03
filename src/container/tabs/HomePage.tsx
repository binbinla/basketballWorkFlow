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
import GameCard from '../../component/GameCard';
import { commonColors } from '../../utils/colors';
import { GameState } from '../../reducers/gameReducer';
import * as gameAction from '../../actions/gameAction';

const GiftedListView = require('react-native-gifted-listview');

const resetAction = NavigationActions.reset({
  index: 0,
  actions: [
    NavigationActions.navigate({ routeName: 'Hello' })
  ]
})

interface StateProps {
  readonly gamesParams: GameState[]
}

interface DispathProps {
  readonly fetchGames: () => Action<void>
}

type Props = Navigatable & StateProps & DispathProps

class HomePage extends React.Component<Props, {}> {

  constructor(props: Props) {
    super(props);
  }
  static navigationOptions = {
    title: '放学打球'
  };

  // componentWillMount() {
  //   this.props.fetchGames();
  // }

  render() {
    return (
      <View style={styles.container}>
        <GiftedListView
          style={{flex: 1}}
          rowView={this._renderRowView}
          onFetch={this._onFetch}
          firstLoader={true}
          pagination={true}
          refreshable={true}
          withSections={true} // enable sections
          sectionHeaderView={this._renderSectionHeaderView}
          customStyles={{
            paginationView: {
              backgroundColor: '#eee',
            },
          }}
          refreshableTintColor="blue"
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
      // const result = this.props.gamesParams ? this.props.gamesParams : []
      let result = {};
      result['今天'] = gameAction.testState;
      result['昨天'] = gameAction.testState;
      callback(result);
    }, 1000);
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
  _renderRowView(item: any) {
    return (
      <TouchableOpacity
        style={{paddingTop: 10}}
        activeOpacity={0.8}
        onPress={() => this._onItemPress(item)}
      >
        <GameCard
          item={item}
          bgColor={commonColors.gameOrange}
        />
      </TouchableOpacity>
    )
  }

  /**
   * when a row was touched
   * @param
   */
  _onItemPress(item: any) {
    console.log(item + 'was pressed')
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
    backgroundColor: commonColors.white
  },
  header: {
    backgroundColor: commonColors.sectionHeader,
    padding: 10,
    marginTop: 10
  },
  headerTitle: {
    color: commonColors.white,
  }
});

function mapStateToProps(reducer: any) {
  return {
    gamesParams: reducer.fetchGamesHandler
  }
}
 
function mapDispatchToProps() { 
  return (dispatch: any) => ({
    fetchGames: () => dispatch(gameAction.fetchGames())
  })
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage)