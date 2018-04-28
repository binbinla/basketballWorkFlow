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
import TeamDetailCard from './TeamDetailCard';
import Spinner from '../../component/Spinner';
import { BasicTeamInfo, TeamDetailInfo, PlayerPersonalInfo, teamDetailInitial } from '../../reducers/teamReducer';
import teamMap from '../../utils/team-map';
import { Zone } from './TeamDetailCard';
import TeamDetailBasic from './TeamDetailBasic';
import { TeamDetailResult } from '../../network/producer';
import * as teamAction from '../../actions/teamAction';

const ScrollableTabView = require('react-native-scrollable-tab-view');

interface StateProps {
  readonly teamDetailParams: TeamDetailResult
}

interface DispathProps {
  readonly getTeamDetail: (teamId) => Action<void>
}

interface State {
  loading: boolean,
  teamItem:  BasicTeamInfo,
  rank: number,
  teamDetail?: TeamDetailInfo,
  playerPersonal?: PlayerPersonalInfo
}

type Props = Navigatable & DispathProps & StateProps

class TeamDetail extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);
    const { params } = this.props.navigation.state;
    this.state = {
      teamItem: params ? params.teamItem : null,
      rank: params ? params.rank : null,
      loading: true
    }
  }
  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state;
    return {
      title: '',      
      tabBarVisible: false,
      headerStyle: {
        backgroundColor: teamMap[params.teamItem.name].color
      }      
    }
  };

  componentWillMount() {
    this.props.getTeamDetail(this.state.teamItem.id);
  }

  componentWillReceiveProps(nextProps: Props) {
    if (!nextProps.teamDetailParams.loading) {
      this.setState({ loading: false });
      this.setState({ teamDetail: nextProps.teamDetailParams.teamDetail, playerPersonal: nextProps.teamDetailParams.playerPersonal })
    }
  }

  render() {
    const topicColor = teamMap[this.state.teamItem.name].color
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
      return (
        <View style={styles.container}>
          <TeamDetailCard
            teamItem={this.state.teamItem}
            rank={this.state.rank}
            zone={this.state.teamItem.zone}
          />
          <ScrollableTabView 
            initialPage={0}
            tabBarUnderlineStyle={{backgroundColor: topicColor}}
            tabBarActiveTextColor={topicColor}
            // locked={true}
            // renderTabBar={() => <ScrollableTabBar/>}
          >
          <TeamDetailBasic
            teamDetail={this.state.teamDetail ? this.state.teamDetail : teamDetailInitial}
          />          
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
    teamDetailParams: reducer.fetchTeamDetailHandler
  }
}

function mapDispatchToProps() {
  return (dispatch: any) => ({
    getTeamDetail: (teamId) => dispatch(teamAction.getTeamDetail(teamId))
  })
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TeamDetail)