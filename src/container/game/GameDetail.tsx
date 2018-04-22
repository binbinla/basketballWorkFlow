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
import * as gameAction from '../../actions/gameAction';
import { GameState } from '../../reducers/gameReducer';
import GameCard from '../../component/GameCard';
import teamMap from '../../utils/team-map';
import GamePlayerCard from './GamePlayerCard';
const ScrollableTabView = require('react-native-scrollable-tab-view');

interface StateProps {
  // readonly loginParams: LoginState
}

interface DispathProps {
  readonly getGameDetail: (year, month, date, gameId) => Action<void>
}

interface State {
  // gameId: string,
  // gameDate: string[]
  gameItem: GameState
}
type Props = Navigatable & DispathProps & StateProps

class GameDetail extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);
    const { params } = this.props.navigation.state;
    this.state = {
      // gameId: params ? params.gameId : null,
      // gameDate: params ? params.gameDate : null
      gameItem: params ? params.gameItem : null
    }
  }
  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state;
    return {
      // title: '比赛详情',
      title: '',      
      tabBarVisible: false,
      headerStyle: {
        backgroundColor: teamMap[params.gameItem.home.teamAbbreviate].color
      },      
    }
  };

  componentWillMount() {
    this.props.getGameDetail(this.state.gameItem.date[0], this.state.gameItem.date[1], this.state.gameItem.date[2], this.state.gameItem.id)
  }

  render() {
    const topicColor = teamMap[this.state.gameItem.home.teamAbbreviate].color
    return (
      <View style={styles.container}>
        <GameCard
          item={this.state.gameItem}
          bgColor={topicColor}
          atDetail={true}
        />
        <ScrollableTabView 
          initialPage={0}
          tabBarUnderlineStyle={{backgroundColor: topicColor}}
          tabBarActiveTextColor={topicColor}
          locked={true}
          // renderTabBar={() => <ScrollableTabBar/>}
        >
          <GamePlayerCard tabLabel={`${teamMap[this.state.gameItem.home.teamAbbreviate].team}`}/>
          <GamePlayerCard tabLabel={`${teamMap[this.state.gameItem.visitor.teamAbbreviate].team}`}/>
        </ScrollableTabView>
      </View>
    )
  }
}

interface Style {
  container: ViewStyle,
}

const styles = StyleSheet.create<Style>({
  container: {
    flex: 1,
    backgroundColor: commonColors.white,
  },
})

function mapStateToProps(reducer: any) {
  return {
    // loginParams: reducer.loginHandler
  }
}

function mapDispatchToProps() {
  return (dispatch: any) => ({
    getGameDetail: (year, month, date, gameId) => dispatch(gameAction.getGameDetail(year, month, date,gameId))
  })
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameDetail)