import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
  ScrollView,
  TextStyle,
  Image
} from 'react-native';
import { connect } from 'react-redux'; // 引入connect函数
import { NavigationActions } from 'react-navigation';
import { Navigatable } from '../../types/general-types';
import { allReducer } from '../../reducers/index';
import { Action } from '../../actions/types';
import FormWithPairText from '../../component/Form/FormWithPairText';
import Button from '../../component/Button';
import { commonColors } from '../../utils/colors';


type Props = Navigatable

class AboutApp extends React.Component<Props, {}> {

  constructor(props: Props) {
    super(props);
  }
  static navigationOptions = {
    title: '关于我们',
    tabBarVisible: false,
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <Text style={styles.appName}>
            {'放学打球'}
          </Text>
          <Text style={styles.version}>
            {'版本：1.0.0'}
          </Text>
        </View>
        <View style={styles.bottomContainer}>
          <Text style={styles.contact}>
            {'微信号：carry7654321'}
          </Text>
          <Text style={styles.copyRight}>
            {'Copyright@2018 by hellobin.chen | Erving'}
          </Text>
        </View>
      </View>
    )
  }
}

interface Style {
  container: ViewStyle,
  topContainer: ViewStyle,
  bottomContainer: ViewStyle,
  appName: TextStyle,
  version: TextStyle,
  contact: TextStyle,
  copyRight: TextStyle
}

const styles = StyleSheet.create<Style>({
  container: {
    flex: 1,
    backgroundColor: commonColors.white,
    justifyContent: 'space-between'
  },
  topContainer: {
    marginTop: 25,
    justifyContent: 'center',
    alignItems: 'center'
  },
  bottomContainer: {
    marginBottom: 15,
    justifyContent: 'center',
    alignItems: 'center'
  },
  appName: {
    fontSize: 25,
    color: commonColors.topicColor,
    fontWeight: 'bold'
  },
  version: {
    fontSize: 13,
    color: '#4E4C4D'
  },
  contact: {
    fontSize: 13,
    color: '#567DDA'
  },
  copyRight: {
    fontSize: 13,
    color: '#B1AEB5'
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
)(AboutApp)