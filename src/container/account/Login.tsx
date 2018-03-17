import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux'; // 引入connect函数
import * as loginAction from '../../actions/loginAction';// 导入action方法
import { NavigationActions } from 'react-navigation';
import Hello from '../../component/Hello';
import Tabs from '../tabs/index';
import { Navigatable } from '../../types/general-types';
import { loginState } from '../../reducers/loginReducer';
import { allReducer } from '../../reducers/index';
import { Action } from '../../actions/types';
import Toast, {DURATION} from 'react-native-easy-toast';

const resetAction = NavigationActions.reset({
  index: 0,
  actions: [
    NavigationActions.navigate({ routeName: 'Tabs' })
  ]
})

interface StateProps {
  readonly loginParams: loginState
}

interface DispathProps {
  readonly login: () => Action<void>
}

type Props = Navigatable & StateProps & DispathProps

class LoginPage extends React.Component<Props, {}> {

  constructor(props: Props) {
    super(props);
  }
  static navigationOptions = {
    title: 'LoginPage'
  };

  shouldComponentUpdate(nextProps: Props, nextState: any) {
    // 登录完成,切成功登录
    if (nextProps.loginParams.status === '登陆成功' && nextProps.loginParams.isSuccess) {
      this.props.navigation.dispatch(resetAction)
      return false;
    }
    return true;
  }

  render() {
    // const { login } = this.props;
    return (
      <View style={styles.container}>
        <Text>状态: {this.props.loginParams.status}
        </Text>
        <TouchableOpacity onPress={() => this.loginInPress()} style={{ marginTop: 50 }}>
          <View style={styles.loginBtn}>
            <Text>登录
            </Text>
          </View>
        </TouchableOpacity>
        <Toast 
          ref="toast"
          position="center"
          />
      </View>
    )
  }

  // 点击登录按钮
  loginInPress = () => {
    // this.props.login();
    const toast: any = this.refs.toast;
    toast.show("登录成功", DURATION.SHORT, () => {
      this.props.login();
    });
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5FCFF'
  },
  loginBtn: {
    borderWidth: 1,
    padding: 5,
  }
});

function mapStateToProps(reducer: any) {
  return {
    loginParams: reducer.loginIn
  }
}

function mapDispatchToProps() { 
  return (dispatch: any) => ({
    login: () => dispatch(loginAction.login())
  })
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPage)