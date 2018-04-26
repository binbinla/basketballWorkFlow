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
import { Player } from '../../model/player';
import { GameDetailResult } from '../../network/producer';
import Channel from '../../network/index';
import * as types from '../../constants/gameTypes';
import Spinner from '../../component/Spinner';

const ScrollableTabView = require('react-native-scrollable-tab-view');

interface StateProps {
  readonly gameDetailParams: GameDetailResult
}

interface DispathProps {
  readonly getGameDetail: (year, month, date, gameId) => Action<void>
}

interface State {
  gameItem: GameState,
  homePlayers?: Player[],
  visitorPlayers?: Player[]
  loading: boolean 
}

type Props = Navigatable & DispathProps & StateProps

class GameDetail extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);
    const { params } = this.props.navigation.state;
    this.state = {
      gameItem: params ? params.gameItem : null,
      loading: true
    }
  }
  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state;
    return {
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

  componentWillReceiveProps(nextProps: Props) {
    if (!nextProps.gameDetailParams.loading) {
      this.setState({ loading: false })
      // console.log('next props home players' + JSON.stringify(nextProps.gameDetailParams.home.players))
      this.setState({ homePlayers: nextProps.gameDetailParams.home.players, visitorPlayers: nextProps.gameDetailParams.visitor.players })
    }
  }

  render() {
    const topicColor = teamMap[this.state.gameItem.home.teamAbbreviate].color
    if (this.state.loading) {
      return (
        <View style={styles.container}>
          <Spinner 
            textContent={'努力加载中...'}
            visible={this.state.loading}
            color={commonColors.black}
            textStyle={{ fontSize: 10, color: commonColors.black }}
          />               
        </View>
      )
    } else {
      // console.log('this.state.players' + JSON.stringify(this.state.homePlayers))
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
            {/* <GamePlayerCard tabLabel={`${teamMap[this.state.gameItem.home.teamAbbreviate].team}`} players={this.props.gameDetailParams.home.players ? this.props.gameDetailParams.home.players: []}/>
            <GamePlayerCard tabLabel={`${teamMap[this.state.gameItem.visitor.teamAbbreviate].team}`} players={this.props.gameDetailParams.visitor.players ? this.props.gameDetailParams.visitor.players: []}/> */}
            <GamePlayerCard tabLabel={`${teamMap[this.state.gameItem.home.teamAbbreviate].team}`} players={this.state.homePlayers ? this.state.homePlayers : []}/>
            <GamePlayerCard tabLabel={`${teamMap[this.state.gameItem.visitor.teamAbbreviate].team}`} players={this.state.visitorPlayers ? this.state.visitorPlayers: []}/>            
          </ScrollableTabView>
        </View>
      )
    }
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
    gameDetailParams: reducer.fetchGameDetailHandler
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