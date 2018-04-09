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
import FormWithPairText from '../../component/Form/FormWithPairText';
import Button from '../../component/Button';
import { commonColors } from '../../utils/colors';
import * as feedbackAction from '../../actions/feedbackAction';
import { FeedBackState } from '../../reducers/feedbackReducer';
import Toast, {DURATION} from 'react-native-easy-toast';

interface DispathProps {
  readonly submitFeedbackInfo: (info: FeedBackState) => Action<void>
}

type Props = Navigatable & DispathProps

interface State {
  feedbackTitle?: string,
  feedbackContent?: string,
  disabled: boolean
}

class HelpAndFeedback extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.state = {
      feedbackTitle: undefined,
      feedbackContent: undefined,
      disabled: true
    }
  }
  static navigationOptions = {
    title: '意见与反馈',
    tabBarVisible: false,
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={[styles.titleContainer, {textAlignVertical: 'top'}]}
          onChangeText={this._onChangeTitleText}
          underlineColorAndroid="transparent"
          multiline={true}
          placeholder={'请输入您的反馈主题'}
        />      
        <TextInput
          style={[styles.inputContainer, {textAlignVertical: 'top'}]}
          onChangeText={this._onChangeContentText}
          // onChange={this._onChange}
          underlineColorAndroid="transparent"
          multiline={true}
          placeholder={'请提出您宝贵的意见'}
        />
        <Button
          text={'提交'}
          onButtonClick={this._submitClick}
          disabled={this.state.disabled}
        />
        <Toast 
          ref="toast"
          position="center"
          />        
      </View>
    )
  }

  /**
   * 变更标题内容
   */
  _onChangeTitleText = (text: string) => {
    this.setState({ feedbackTitle: text })
  }

  /**
   * 变更文本内容
   */
  _onChangeContentText = (text: string) => {
    this.setState({ feedbackContent: text}, () => {
      if (text === '') {
        this.setState({ disabled: true})
      } else {
        this.setState({ disabled: false})
      }
    })
  }

  /**
   * 点击提交按钮
   */
  _submitClick = () => {
    const toast: any = this.refs.toast;
    const info: FeedBackState = {
      title: this.state.feedbackTitle,
      content: this.state.feedbackContent
    }
    this.props.submitFeedbackInfo(info);
    toast.show("您的反馈我们已经收到，感谢您的建议。", DURATION.LONG, () => {
      this.props.navigation.goBack();
    });
  }
}

interface Style {
  container: ViewStyle,
  inputContainer: ViewStyle,
  titleContainer: ViewStyle
}

const styles = StyleSheet.create<Style>({
  container: {
    flex: 1,
    backgroundColor: commonColors.white,
  },
  inputContainer: {
    height: 180,
    borderColor: commonColors.borderColor,
    borderWidth: 1,
    padding: 5,
    margin: 15
  },
  titleContainer: {
    height: 40,
    borderColor: commonColors.borderColor,
    borderWidth: 1,
    padding: 5,
    margin: 15
  }
})

function mapStateToProps(reducer: any) {
  return {
    // loginParams: reducer.loginHandler
  }
}

function mapDispatchToProps() {
  return (dispatch: any) => ({
    submitFeedbackInfo: (info: FeedBackState) => dispatch(feedbackAction.submitFeedbackInfo(info))
  })
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HelpAndFeedback)