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
import { BasicTeamInfo } from '../../reducers/teamReducer';
import teamMap from '../../utils/team-map';
import { Zone } from './TeamDetailCard';

const ScrollableTabView = require('react-native-scrollable-tab-view');

interface StateProps {
  // readonly loginParams: LoginState
}

interface DispathProps {
  //
}

interface State {
  loading: boolean,
  teamItem:  BasicTeamInfo,
  rank: number,
  zone: Zone
}

type Props = Navigatable & DispathProps & StateProps

class TeamDetail extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);
    const { params } = this.props.navigation.state;
    this.state = {
      teamItem: params ? params.teamItem : null,
      rank: params ? params.rank : null,
      zone:  params ? params.zone : null,
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

  }

  componentWillReceiveProps(nextProps: Props) {

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
            zone={this.state.zone}
          />
          <ScrollableTabView 
            initialPage={0}
            tabBarUnderlineStyle={{backgroundColor: topicColor}}
            tabBarActiveTextColor={topicColor}
            // locked={true}
            // renderTabBar={() => <ScrollableTabBar/>}
          >          
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
    // loginParams: reducer.loginHandler
  }
}

function mapDispatchToProps() {
  return (dispatch: any) => ({
    //
  })
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TeamDetail)