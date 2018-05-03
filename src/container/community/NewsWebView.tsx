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
  WebView
} from 'react-native';
import { connect } from 'react-redux'; // 引入connect函数
import { NavigationActions } from 'react-navigation';
import { Navigatable } from '../../types/general-types';
import { allReducer } from '../../reducers/index';
import { Action } from '../../actions/types';
import { commonColors } from '../../utils/colors';
import Toast, { DURATION } from 'react-native-easy-toast';

interface StateProps {
  //
}

interface DispathProps {
  //
}

interface State {
  //  
}
type Props = Navigatable & DispathProps & StateProps

class NewsWebView extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.state = {
      //
    }
  }
  static navigationOptions = {
    title: '新闻详情',
    tabBarVisible: false,
  };

  render() {
    const { params } = this.props.navigation.state;
    const newsUrl = params ? params.url : null;

    return (
      <View style={styles.container}>
        <WebView
          source={{uri: newsUrl}}
          style={{width:'100%',height:'100%'}}  
          startInLoadingState={true}  
          renderLoading={() => {
            return <View style={styles.loadingContainer}><Text style={styles.loadingText}>数据加载中...</Text></View>
        }}              
        />
      </View>
    )
  }
}

interface Style {
  container: ViewStyle,
  loadingContainer: ViewStyle,
  loadingText: TextStyle
}

const styles = StyleSheet.create<Style>({
  container: {
    flex: 1,
    backgroundColor: commonColors.white,
  },
  loadingContainer: {
    alignItems: 'center',
    marginTop: '60%'
  },
  loadingText: {
    fontSize: 18,
    color: commonColors.black
  }
})

function mapStateToProps(reducer: any) {
  return {
    //
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
)(NewsWebView)