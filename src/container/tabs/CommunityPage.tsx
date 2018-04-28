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
import NewsCard from '../../component/NewsCard';
import { NewsState } from '../../reducers/newsReducer';
import * as newsAction from '../../actions/newsAction';
import Toast, {DURATION} from 'react-native-easy-toast';

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
    // console.log('news fetch');
    // fetch("http://stats.nba.com/stats/commonplayerinfo?LeagueID=00&PlayerID=203584&SeasonType=Regular+Season", {
    //   method: 'GET',
    //   credentials: "include",
    //   headers: {
    //     cookie: JSON.stringify(getCookie('__guid=65800172.4031362203156968000.1522065220488.3794; __gads=ID=03a5ac0aa1827b17:T=1522065226:S=ALNI_Ma9lOh3ONwDqugSEzOaY0KekVMR_Q; AMCV_248F210755B762187F000101%40AdobeOrg=-1891778711%7CMCAID%7C2D5C6FA5052A639F-6000012AA050E45B%7CMCIDTS%7C17641%7CMCMID%7C10509461825900863961656828769582452970%7CMCAAMLH-1524748627%7C11%7CMCAAMB-1524748627%7CRKhpRz8krg2tLO6pguXWp5olkAcUniQYPHaMWWgdJ3xzPWQmdj0y%7CMCOPTOUT-1524151027s%7CNONE%7CMCSYNCSOP%7C411-17648%7CvVersion%7C2.4.0; pgv_pvid=3730815700; ug=5ab8df450778880a3c732e47be0074cb; s_vi=[CS]v1|2D5C6FA5052A639F-6000012AA050E45B[CE]; s_fid=2282642745FE8062-049F91B355DBFE06; _ga=GA1.2.956194348.1522065224; mbox=PC#2eb8928a49b94e778e5b1c6bb51882d6.24_13#1585310027|session#ef08aee812e347138faa184078a75091#1524636763; ak_bmsc=3100331DA9FCEB334F0F0648C4C91E4DDF7732BD2E0D000021E2E35A0ADDF638~pl/FuDh2Fb5zu1QomlkraNb1fjOk4Nq2LaL+LrAbDuxUqbiMmEZafpxt1uBY34aGvj7flJELH2mTszMOORZvVHb4ugDJ+mPZ7O8CaX1ZnbKvaxlzhg9Ld9G3W+19qi/sUgMj/Xi+BBqFIC3h2PPx3+9NqgGstezvdp4dnoi38Q9KxuRY+IdiqDOLoaSD4OQh6qf3gYL57XUxaMNdRLDDzEBLedIoxKHPu1r+uf2wmorOg=; bm_sv=177DA7646B70D64CF778591832C6C508~3Ay5CASaeqXjLhVEMyrqsbEvptMSZP36qBaz8+564Lb3xS5uNVQwNhL8aVVh/DpSbr42DiRFdX8m7Rk9I3LN80WV5PBwpPjY/2H7YIVQRHbDlyTuAVRSFaAPgU7VRdT+PJ85lAPwuJdYHyHIyv9EFQ==; monitor_count=6')) 
    //     // 'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.87 Safari/537.36'
    //   }
    // })
    //   // .then(res => res.json())
    //   .then(data => {
    //     console.log('component will mount ' + JSON.stringify(data));
    //     const toast: any = this.refs.toast;
    //     toast.show("请求成功", DURATION.SHORT);
    //   })
    //   .catch(error => {
    //     console.log('point out errror' + error);
    //     const toast: any = this.refs.toast;
    //     toast.show("请求失败", DURATION.SHORT);
    //   })    
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