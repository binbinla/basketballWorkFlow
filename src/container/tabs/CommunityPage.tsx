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
import { commonColors } from '../../utils/colors';
import NewsCard from '../../component/NewsCard';
import { NewsState } from '../../reducers/newsReducer';
import * as newsAction from '../../actions/newsAction';

const GiftedListView = require('react-native-gifted-listview');

const resetAction = NavigationActions.reset({
  index: 0,
  actions: [
    NavigationActions.navigate({ routeName: 'Hello' })
  ]
})

interface StateProps {
  readonly newsParams: any
}

interface DispathProps {
  readonly fetchNews: () => Action<void>
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
    this.props.fetchNews();
  }

  componentWillReceiveProps(nextProps: Props, nextState: any) {
    //
  }

  render() {
    return (
      <View style={styles.container}>
        <GiftedListView
          style={{flex: 1}}
          rowView={this._renderRowView.bind(this)}
          onFetch={this._onFetch.bind(this)}
          firstLoader={true}
          pagination={true}
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
      const ids = this.props.newsParams.ids ? this.props.newsParams.ids : []
      let result = {}
      result['周一'] = ids;
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
  _renderRowView(rowData) {
    return (
      <TouchableOpacity
        // style={{marginTop: 10}}
        activeOpacity={0.8}
        onPress={() => this._onItemPress(rowData)}
      >
        <NewsCard
          newsId={rowData}
        />
      </TouchableOpacity>
    )
  }

  /**
   * when a row was touched
   * @param
   */
  _onItemPress = (rowData) => {
    console.log(rowData + 'was pressed');
    this.props.navigation.navigate('NewsDetail', {
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
    newsParams: reducer.fetchNewsHandler
  }
}

function mapDispatchToProps() { 
  return (dispatch: any) => ({
    fetchNews: () => dispatch(newsAction.fetchNews())
  })
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommunityPage)