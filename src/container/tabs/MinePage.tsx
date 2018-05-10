import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
  ScrollView,
  Platform
} from 'react-native';
import { connect } from 'react-redux'; // 引入connect函数
import { NavigationActions } from 'react-navigation';
import { Navigatable } from '../../types/general-types';
import { allReducer } from '../../reducers/index';
import { Action } from '../../actions/types';
import FormArrowToDetail from '../../component/Form/FormArrowToDetail';
import FormWithPicture from '../../component/Form/FormWithPicture';
import FormWithPairText from '../../component/Form/FormWithPairText';
import Button from '../../component/Button';
import { commonColors } from '../../utils/colors';
import * as loginAction from '../../actions/loginAction';
import { CommentState } from '../../reducers/communityReducer';

const resetAction = NavigationActions.reset({
  index: 0,
  actions: [
    NavigationActions.navigate({ routeName: 'Hello' })
  ]
})

interface StateProps {
  readonly commentProps: CommentState
}

interface DispathProps {
  readonly logout: () => Action<void>
}

type Props = Navigatable & StateProps & DispathProps

interface State {
  userIntegral: number
}

class MinePage extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.state = {
      userIntegral: this.props.commentProps.integral
    }
  }
  static navigationOptions = {
    title: '个人中心'
  };

  componentWillReceiveProps(nextProps: Props) {
    if (this.props.commentProps.integral !== nextProps.commentProps.integral) {
      this.setState({ userIntegral: nextProps.commentProps.integral });
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          style={{ flex: 1 }}
        >
          <View style={styles.partContainer}>
            <FormWithPicture
              nickName={'大陈'}
              contactText={'188****6910'}
              pictureUri={'../../../assets/img/indicate/snail.jpg'}
              onFormClick={() => this.personalProfile()}
            />
            <FormWithPairText
              leftText="我的积分"
              rightText={String(this.state.userIntegral)}
              onFormClick={() => {}}
              cutOffLine={false}
            />
          </View>
          <View style={styles.partContainer}>
            <FormArrowToDetail
                leftText={'我的主队'}
                onFormClick={() => this.mySupportTeam()}
                cutOffLine={false}
              />            
          </View>
          <View style={styles.partContainer}>
            <FormArrowToDetail
              leftText={'意见与反馈'}
              onFormClick={() => this.helpAndFeedback()}
            />
            <FormArrowToDetail
              leftText={'给个好评鼓励一下吧'}
              onFormClick={() => this.evaluateApp()}
            />                           
            <FormArrowToDetail
              leftText={'关于App'}
              onFormClick={() => this.aboutTheApp()}
              cutOffLine={false}
            />
          </View>
          <Button
            style={{ marginTop: 15, backgroundColor: commonColors.topicColor}} 
            text="退出登录"
            onButtonClick={() => this.logout()}
          />
        </ScrollView>
      </View>
    )
  }

  /**
   * 跳转至 ‘个人资料页面’
   */
  personalProfile = () => {
    console.log('点击了个人资料');
    this.props.navigation.navigate('PersonalProfile');
  }

  /**
   * 跳转至 ‘我的主队页面’
   */
  mySupportTeam = () => {
    this.props.navigation.navigate('MineStarTeam');
  }

  /**
   * 跳转至 ‘帮助与反馈’
   */
  helpAndFeedback = () => {
    console.log('点击了意见与反馈');
    this.props.navigation.navigate('HelpAndFeedback');
  }

  /**
   * 跳转至 ‘评价App页面’
   */
  evaluateApp = () => {
    console.log('点击了评价App页面');
    this.props.navigation.navigate('EvaluateApp');
  }

  /**
   * 跳转至 ‘关于页面’
   */
  aboutTheApp = () => {
    console.log('点击了关于');
    this.props.navigation.navigate('AboutApp');
  }

  /**
   * 跳转至 ‘登录页面’
   */
  logout = () => {
    console.log('点击了退出登录');
    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName: 'Login' })
      ]
    });
    this.props.logout();
    this.props.navigation.dispatch(resetAction);
  }
}

interface Style {
  container: ViewStyle,
  partContainer: ViewStyle
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
  }
});

function mapStateToProps(reducer: any) {
  return {
    commentProps: reducer.commitCommentHandler
  }
}

function mapDispatchToProps() {
  return (dispatch: any) => ({
    logout: () => dispatch(loginAction.logout())
  })
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MinePage)