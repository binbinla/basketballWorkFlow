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
import Button from '../../component/Button';
import { commonColors } from '../../utils/colors';
import Toast, {DURATION} from 'react-native-easy-toast';
import StarRating from 'react-native-star-rating';

// const StarRating = require('react-native-star-rating');

interface DispathProps {
  //
}

interface State {
  starCount: number,
  buttonDisabled: boolean
}

type Props = Navigatable & DispathProps

class EvaluateApp extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.state = {
      starCount: 0,
      buttonDisabled: true
    }
  }

  static navigationOptions = {
    title: '评价',
    tabBarVisible: false,
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.starContainer}>
          <StarRating
            disabled={false}
            maxStars={5}
            rating={this.state.starCount}
            selectedStar={this._onStarRatingPress}
            fullStarColor={commonColors.topicColor}
          />
        </View>
        <View style={styles.illustrationContainer}>
          <Text style={styles.text}>
            轻点星形来评分，相信我会变得更好哦！
          </Text>
        </View>
        <Button
          text={'提交评分'}
          onButtonClick={this._submitEvaluate}
          disabled={this.state.buttonDisabled}
        />
        <Toast 
          ref="toast"
          position="center"
        />            
      </View>
    )
  }

  /**
   * 用户点按星星评价
   */
  _onStarRatingPress = (count: number) => {
    this.setState({ buttonDisabled: false, starCount: count });
  }

  /**
   * 提交评分
   */
  _submitEvaluate = () => {
    // 评分要不要传到reducer?貌似没什么地方会用到。
    const toast: any = this.refs.toast;
    toast.show("感谢您的评价，我们将再接再厉", DURATION.LONG, () => {
      this.props.navigation.goBack();
    });
  }
}

interface Style {
  container: ViewStyle,
  starContainer: ViewStyle,
  illustrationContainer: ViewStyle,
  text: TextStyle
}

const styles = StyleSheet.create<Style>({
  container: {
    flex: 1,
    backgroundColor: commonColors.white,
  }, 
  starContainer: {
    marginVertical: 15,
    marginHorizontal: 10
  },
  illustrationContainer: {
    marginHorizontal: 15,
    padding: 5
  },
  text: {
    fontSize: 12,
    color: commonColors.underGray
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
)(EvaluateApp)
