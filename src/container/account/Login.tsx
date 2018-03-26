import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ViewStyle
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
import { Hoshi } from 'react-native-textinput-effects';
import Button from '../../component/Button';
import { commonColors } from '../../utils/colors';

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

interface State {
  account?: string,
  password?: string
}

type Props = Navigatable & StateProps & DispathProps

class LoginPage extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.state = {
      account: undefined,
      password: undefined
    }
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
    return (
      <View style={styles.container}>
        <View style={styles.card}>
        <Hoshi
          style={{marginLeft: 15, marginRight: 15}}
          label={'账号'}
          maskColor={'#F9F7F6'}
          borderColor={'#b76c94'}
          onChangeText={(text: any) => {this.setState({account: text})}}
        />
        <Hoshi
          style={{marginTop: 20, marginLeft: 15, marginRight: 15}}
          label={'密码'}
          maskColor={'#F9F7F6'}
          borderColor={'#b76c94'}
          secureTextEntry={true}
          onChangeText={(text: any) => {this.setState({password: text})}}          
        />
        </View>
        <Button
          text={'登录'}
          onButtonClick={() => this.loginInPress()}
        />
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
    if (!this.state.account || this.state.account === "") {
      toast.show("账号不可为空", DURATION.SHORT);
      return;
    }
    if (!this.state.password || this.state.password === "") {
      toast.show("密码不可为空", DURATION.SHORT);
      return;
    }
    toast.show("登录成功", DURATION.SHORT, () => {
      this.props.login();
    });
  }

}

interface Styles {
  container: ViewStyle,
  card: ViewStyle
}

const styles = StyleSheet.create<Styles>({
  container: {
    flex: 1,
    backgroundColor: commonColors.white    
  },
  card: {
    paddingVertical: 25,
    backgroundColor: commonColors.textInputBg
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