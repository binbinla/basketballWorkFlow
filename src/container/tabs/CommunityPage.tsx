import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
  TextStyle,
} from 'react-native';
import { connect } from 'react-redux'; // 引入connect函数
import { NavigationActions } from 'react-navigation';
import { Navigatable } from '../../types/general-types';
import { allReducer } from '../../reducers/index';
import { Action } from '../../actions/types';
import { commonColors } from '../../utils/colors';
import CommunityCard from '../../component/CommunityCard';
import { CommunityState } from '../../reducers/communityReducer';
import * as communityAction from '../../actions/communityAction';
import Toast, { DURATION } from 'react-native-easy-toast';
import { News } from '../../model/news';

const GiftedListView = require('react-native-gifted-listview');

interface StateProps {
  readonly communityParams: any
}

interface DispathProps {
  readonly fetchCommunity: () => Action<void>
}

type Props = Navigatable & StateProps & DispathProps

class CommunityPage extends React.Component<Props, {}> {

  constructor(props: Props) {
    super(props);
  }
  static navigationOptions = {
    title: '社区'
  };

  componentWillMount() {
    this.props.fetchCommunity();
  }

  componentWillReceiveProps(nextProps: Props, nextState: any) {
    //
  }

  render() {
    return (
      <View style={styles.container}>
        <Toast
          ref="toast"
          position="center"
        />
        <GiftedListView
          style={{ flex: 1 }}
          rowView={this._renderRowView.bind(this)}
          onFetch={this._onFetch.bind(this)}
          firstLoader={true}
          pagination={false}
          refreshable={false}
          withSections={true} // enable sections
          sectionHeaderView={this._renderSectionHeaderView}
          paginationAllLoadedView={this._renderPaginationAllLoadedView}
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
  _onFetch(page, callback, options) {
    setTimeout(() => {
      const ids: string[] = this.props.communityParams ? this.props.communityParams.ids : []
      let result = {}
      result['社区话题'] = ids
      callback(result);
    }, 1500);
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

  /**
   * 数据已经加载完毕
   */
  _renderPaginationAllLoadedView() {
    return (
      <View style={styles.paginationView}>
        <Text style={styles.paginationText}>
          没有更多了~
        </Text>
      </View>
    );
  }
  
  /***
   * Render a row
   * @param
   */
  _renderRowView(rowData) {
    return (
      <TouchableOpacity
        // style={{marginTop: 10}}
        activeOpacity={0.8}
        onPress={() => this._onItemPress(rowData)}
      >
        <CommunityCard
          communityId={rowData}
        />
      </TouchableOpacity>
    )
  }

  /**
   * when a row was touched
   * @param
   */
  _onItemPress = (rowData: string) => {
    this.props.navigation.navigate('CommunityDetail', {
      id: rowData
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

const styles = StyleSheet.create({
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
    communityParams: reducer.fetchCommunitysHandler
  }
}

function mapDispatchToProps() {
  return (dispatch: any) => ({
    fetchCommunity: () => dispatch(communityAction.fetchCommunity())
  })
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommunityPage)