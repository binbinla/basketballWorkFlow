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
import news_test_data from '../../mock_datas/news_datas';

interface StateProps {
  // readonly loginParams: LoginState
}

interface DispathProps {
  //
}

interface State {
  //  
}
type Props = Navigatable & DispathProps & StateProps

class NewsDetail extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.state = {
      //
    }
  }
  static navigationOptions = {
    title: '新闻一线',
    tabBarVisible: false,
  };

  render() {
    const { params } = this.props.navigation.state;
    const newsId = params ? params.id : null;

    const newsTitle = news_test_data[newsId].newsTitle;
    const newsImage = news_test_data[newsId].newsImage;
    const newsDetailOne = news_test_data[newsId].newsDetail[0];
    const newsDetailTwo = news_test_data[newsId].newsDetail[1];
    const newsDetailThree = news_test_data[newsId].newsDetail[2];

    return (
      <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>
            {newsTitle}
            </Text>
          </View>
          <View style={{height: 1, backgroundColor: commonColors.borderColor, marginTop: 5}}/>
          <Image
            style={styles.image}
            source={newsImage}
          />
          <View style={styles.detailContainer}>
            <Text style={styles.detailText}>
              {newsDetailOne}
            </Text>
            <Text style={[styles.detailText, {marginTop: 10}]}>
              {newsDetailTwo}
            </Text>
            <Text style={[styles.detailText, {marginTop: 10}]}>
              {newsDetailThree}
            </Text>
          </View>
        </View>
      </ScrollView>
    )
  }
}

interface Style {
  container: ViewStyle,
  titleContainer: ViewStyle,
  titleText: TextStyle,
  image: ViewStyle,
  detailContainer: ViewStyle,
  detailText: TextStyle
}

const styles = StyleSheet.create<Style>({
  container: {
    flex: 1,
    backgroundColor: commonColors.white,
    padding: 10
  },
  titleContainer: {
    //
  },
  titleText: {
    fontSize: 18,
    color: commonColors.black,
    fontWeight: 'bold'
  },
  image: {
    width: '100%',
    height: 350,
    marginTop: 15
  },
  detailContainer: {
    marginTop: 15
  },
  detailText: {
    fontSize: 15,
    color: commonColors.black,
    letterSpacing: 5,
    includeFontPadding: true
  }
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
)(NewsDetail)