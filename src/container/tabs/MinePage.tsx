import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
  ScrollView
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

const resetAction = NavigationActions.reset({
  index: 0,
  actions: [
    NavigationActions.navigate({ routeName: 'Hello' })
  ]
})

interface StateProps {
  // readonly loginParams: LoginState
}

interface DispathProps {
  // readonly login: () => Action<void>
}

type Props = Navigatable & StateProps & DispathProps

class MinePage extends React.Component<Props, {}> {

  constructor(props: Props) {
    super(props);
  }
  static navigationOptions = {
    title: '放学打球'
  };

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
              onFormClick={() => this.aboutTheApp()}
            />
            <FormWithPairText
              leftText="我的积分"
              rightText="180"
              onFormClick={() => this.aboutTheApp()}
              cutOffLine={false}
            />
          </View>
          <View style={styles.partContainer}>
            <FormArrowToDetail
                leftText={'账户安全'}
                onFormClick={() => this.aboutTheApp()}
                cutOffLine={false}
              />            
          </View>
          <View style={styles.partContainer}>
            <FormArrowToDetail
              leftText={'帮助与反馈'}
              onFormClick={() => this.aboutTheApp()}
            />
            <FormArrowToDetail
              leftText={'给个好评'}
              onFormClick={() => this.aboutTheApp()}
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
            onButtonClick={() => {}}
          />
        </ScrollView>
      </View>
    )
  }

  /**
   * 跳转至 ‘关于页面’
   */
  aboutTheApp = () => {
    console.log('点击了关于')
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
    // loginParams: reducer.loginIn
  }
}

function mapDispatchToProps() {
  return (dispatch: any) => ({
    // login: () => dispatch(loginAction.login())
  })
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MinePage)