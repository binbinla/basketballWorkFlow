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
  Button
} from 'react-native';
import { connect } from 'react-redux'; // 引入connect函数
import { NavigationActions } from 'react-navigation';
import { Navigatable } from '../../../types/general-types';
import { allReducer } from '../../../reducers/index';
import { Action } from '../../../actions/types';
import { commonColors } from '../../../utils/colors';
import Toast, { DURATION } from 'react-native-easy-toast';
import InputForm from '../../../component/InputForm';
import { LoginState } from '../../../reducers/loginReducer';
import * as loginAction from '../../../actions/loginAction';

interface StateProps {
  readonly loginParams: LoginState
}

interface DispathProps {
  readonly modifyAddress: (address: string) => Action<void>
}

interface State {
  originText: string,
  currentText: string
}

type Props = Navigatable & DispathProps & StateProps

class ChangeAddress extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.state = {
      originText: this.props.loginParams.user ? this.props.loginParams.user.address : '',
      currentText: this.props.loginParams.user ? this.props.loginParams.user.address : ''
    }
  }

  componentDidMount() {
    this.props.navigation.setParams({ navigatePress: this._navigatePress })  
  }

  /**
   * 监听headerRight
   */
  _navigatePress = () => {
    const toast: any = this.refs.toast;
    this.props.modifyAddress(this.state.currentText);
    toast.show("更改成功", DURATION.LONG, () => {
      this.props.navigation.goBack();
    });
  }

  static navigationOptions = ({ navigation, screenProps }) => ({
    title: '地址',
    tabBarVisible: false,
    headerRight: (
      <Button
        onPress={() => navigation.state.params.navigatePress()}
        title={'保存'} 
        color={commonColors.topicColor}
      />
    )
  });

  render() {
    return (
      <View style={styles.container}>
        <InputForm
          style={{marginTop: 15}}
          value={this.state.originText}
          inputCallback={this._inputCallback}
        />
        <Toast 
          ref="toast"
          position="center"
          />           
      </View>
    )
  }

  /**
   * 输入框的内容回调
   */
  _inputCallback = (text: string) => {
    this.setState({ currentText: text })
  }

}

interface Style {
  container: ViewStyle,
}

const styles = StyleSheet.create<Style>({
  container: {
    flex: 1,
    backgroundColor: commonColors.gray
  },
})

function mapStateToProps(reducer: any) {
  return {
    loginParams: reducer.loginHandler
  }
}

function mapDispatchToProps() {
  return (dispatch: any) => ({
    modifyAddress: (address: string) => dispatch(loginAction.modifyAddress(address))
  })
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChangeAddress)