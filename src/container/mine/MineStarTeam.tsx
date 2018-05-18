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
  TextInput,
  ListView,
  Button
} from 'react-native';
import { connect } from 'react-redux'; // 引入connect函数
import { NavigationActions } from 'react-navigation';
import { Navigatable } from '../../types/general-types';
import { allReducer } from '../../reducers/index';
import { Action } from '../../actions/types';
import { commonColors } from '../../utils/colors';
import Toast, { DURATION } from 'react-native-easy-toast';
import StarTeamCard from '../../component/StarTeamCard';
import * as starTeamAction from '../../actions/starTeamAction';
import JPushModule from 'jpush-react-native';

interface StateProps {
  starTeamProps: any 
}

interface DispathProps {
  readonly postStarTeamAttr: (attr: string) => Action<void>
}

interface State {
  remainTeams,
  currentAttr: string   
}

type Props = Navigatable & DispathProps & StateProps

class MineStarTeam extends React.Component<Props, State> {

  private selectedCount: number = 0;

  private selectedIds: number[] = [];

  private allTeams: string[] = [
    'atl',
    'bkn',
    'bos',
    'cha',
    'chi',
    'cle',
    'dal',
    'den',
    'det',
    'gsw',
    'hou',
    'ind',
    'lac',
    'lal',
    'mem',
    'mia',
    'mil',
    'min',
    'nop',
    'nyk',
    'okc',
    'orl',
    'phi',
    'phx',
    'por',
    'sac',
    'sas',
    'tor',
    'uta',
    'was'
  ]

  constructor(props: Props) {
    super(props);
    this.state = {
      remainTeams: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2
      }),
      currentAttr: this.props.starTeamProps.teamAttr
    }
  }

  componentWillMount() {
    const { remainTeams } = this.state
    let rows = Object.assign([], this.allTeams)

    this.setState({
      remainTeams: remainTeams.cloneWithRows(rows)
    })
  }

  componentDidMount() {
    this.props.navigation.setParams({ navigatePress: this._navigatePress })  
  }

  componentWillReceiveProps(nextProps: Props) {
    if (this.props.starTeamProps.teamAttr !== nextProps.starTeamProps.teamAttr) {
      this.setState({ currentAttr: nextProps.starTeamProps.teamAttr });
    }
  }

  /**
   * 监听headerRight
   */
  _navigatePress = () => {
    const toast: any = this.refs.toast;
    if (this.selectedCount === 0) {
      toast.show("您没有选择任何一支球队", DURATION.LONG, () => {
        this.props.navigation.goBack();
      });
      return
    }
    if (this.selectedCount > 1) {
      toast.show("暂时只支持关注单支球队", DURATION.LONG);
      return;
    }
    toast.show("保存成功", DURATION.LONG, () => {
      this.props.postStarTeamAttr(this.allTeams[this.selectedIds[0]]);
      this.setAlias();
      this.props.navigation.goBack();
    });
  }

  static navigationOptions = ({ navigation, screenProps }) => ({
    title: '我的主队',
    tabBarVisible: false,
    headerRight: (
      <Button
        onPress={() => navigation.state.params.navigatePress()}
        title={'保存'} 
        color={commonColors.topicColor}
      />
    )
  });

  /**
   *  上传所选“主队”
   */
  setAlias = () => {
		if (this.state.currentAttr) {
			JPushModule.setAlias(this.state.currentAttr, () => {
				console.log("Set alias succeed");
			});
		}
  }
  
  render() {
    return (
      <View style={styles.container}>
        <ListView
          dataSource={this.state.remainTeams}
          renderRow={this._renderRow.bind(this)}
          style={styles.listView} />    
          <Toast 
            ref="toast"
            position="center"
            />          
      </View>
    )
  }

  _renderRow = (rowData, sectionID, rowID, highlightRow) => {
    console.log('currentAttr ' + this.state.currentAttr)
    const hasSelected = this.state.currentAttr === rowData ? true : false;
    return (
      <StarTeamCard
        teamAttr={rowData}
        id={rowID}
        hasSelected={hasSelected}
        callBackSelected={this.callBackSelected}
      />
    )
  }

  callBackSelected = (selected: boolean, id: number) => {
    if (selected) {
      this.selectedCount = this.selectedCount + 1;
      this.selectedIds.push(id)
    } else {
      this.selectedCount = this.selectedCount - 1;
      const index = this.selectedIds.indexOf(id);
      if (index !== -1) {
        this.selectedIds.splice(index, 1);
      }
    }
  }
}

interface Style {
  container: ViewStyle,
  listView: ViewStyle
}

const styles = StyleSheet.create<Style>({
  container: {
    flex: 1,
    backgroundColor: commonColors.white,
  },
  listView: {
    flex: 1,
    flexDirection: 'column',
    marginTop: 10
  },
})

function mapStateToProps(reducer: any) {
  return {
    starTeamProps: reducer.starTeamHandler
  }
}

function mapDispatchToProps() {
  return (dispatch: any) => ({
    postStarTeamAttr: (attr: string) => dispatch(starTeamAction.postStarTeamAttr(attr))
  })
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MineStarTeam)