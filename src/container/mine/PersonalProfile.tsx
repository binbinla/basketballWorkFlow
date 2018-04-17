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
  Platform
} from 'react-native';
import { connect } from 'react-redux'; // 引入connect函数
import { NavigationActions } from 'react-navigation';
import { Navigatable } from '../../types/general-types';
import { allReducer } from '../../reducers/index';
import { Action } from '../../actions/types';
import FormWithPairText from '../../component/Form/FormWithPairText';
import Button from '../../component/Button';
import { commonColors } from '../../utils/colors';
import { LoginState } from '../../reducers/loginReducer';
import ActionSheet from '@yfuks/react-native-action-sheet';

interface StateProps {
  readonly loginParams: LoginState
}

interface DispathProps {
  // readonly logout: () => Action<void>
}

type Props = Navigatable & StateProps & DispathProps

const acionOption = [
  '拍照',
  '从照片中选择',
  '取消'
]

const CANCEL_INDEX = 2

class PersonalProfile extends React.Component<Props, {}> {

  constructor(props: Props) {
    super(props);
  }
  static navigationOptions = {
    title: '个人资料',
    tabBarVisible: false,
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.partContainer}>
          <TouchableOpacity activeOpacity={0.5} onPress={() => { this.onPictureClick() }}>
            <View style={styles.pictureContainer}>
              <Text style={[styles.leftText]}>
                {'头像'}
              </Text>
              <Image
                source={require('../../../assets/img/indicate/snail.jpg')}
                style={styles.image}
              />
            </View>
          </TouchableOpacity>
          <FormWithPairText
            leftText={'昵称'}
            rightText={this.props.loginParams.user ? this.props.loginParams.user.nickName : '暂无填写'}
            onFormClick={() => this.onNickNameClick()}
            style={{ paddingVertical: 15 }}
            arrowRight={true}
          />
          <FormWithPairText
            leftText={'性别'}
            rightText={this.props.loginParams.user ? this.props.loginParams.user.sex : '暂无填写'}
            onFormClick={() => this.onSexClick()}
            style={{ paddingVertical: 15 }}
            arrowRight={true}
          />
          <FormWithPairText
            leftText={'所在地'}
            rightText={this.props.loginParams.user ? this.props.loginParams.user.address : '暂无填写'}
            onFormClick={() => this.onAddressClick()}
            cutOffLine={false}
            style={{ paddingVertical: 15 }}
            arrowRight={true}
          />
        </View>
      </View>
    )
  }

  /**
   * 点击了头像
   */
  onPictureClick = () => {
    console.log('点击了头像')
    ActionSheet.showActionSheetWithOptions({
      title: '请选择',
      options: acionOption,
      cancelButtonIndex: CANCEL_INDEX,
      tintColor: 'blue'
    },
      (buttonIndex) => {
        console.log('button clicked :', buttonIndex);
      }
    )
  }

  /**
   * 点击了昵称
   */
  onNickNameClick = () => {
    console.log('点击了昵称')
    this.props.navigation.navigate('ChangeNickName')
  }

  /**
   * 点击了性别
   */
  onSexClick = () => {
    console.log('点击了性别')
  }

  /**
   * 点击了地址
   */
  onAddressClick = () => {
    console.log('点击了地址')
    this.props.navigation.navigate('ChangeAddress')
  }
}

interface Style {
  container: ViewStyle,
  partContainer: ViewStyle,
  pictureContainer: ViewStyle,
  leftText: TextStyle,
  image: ViewStyle
}

const styles = StyleSheet.create<Style>({
  container: {
    flex: 1,
    backgroundColor: commonColors.white,
  },
  partContainer: {
    marginTop: 10,
    borderTopColor: commonColors.borderColor,
    borderTopWidth: 0.5,
    borderBottomColor: commonColors.borderColor,
    borderBottomWidth: 0.5,
    paddingVertical: 5
  },
  pictureContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 5,
    marginLeft: 15,
    paddingRight: 15,
    borderBottomColor: commonColors.borderColor,
    borderBottomWidth: 0.5,
  },
  leftText: {
    fontSize: 15,
    color: commonColors.formTextColor
  },
  image: {
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: commonColors.white
  }
});

function mapStateToProps(reducer: any) {
  return {
    loginParams: reducer.loginHandler
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
)(PersonalProfile)