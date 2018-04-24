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
  Modal,
  ListView
} from 'react-native';
import { connect } from 'react-redux'; // 引入connect函数
import { NavigationActions } from 'react-navigation';
import { Navigatable } from '../../types/general-types';
import { allReducer } from '../../reducers/index';
import { Action } from '../../actions/types';
import { commonColors } from '../../utils/colors';
import Toast, { DURATION } from 'react-native-easy-toast';
import news_test_data from '../../mock_datas/news_datas';
import CommentInputForm from './CommentInputForm';
import CommentCard from './CommentCard';
import { LoginState } from '../../reducers/loginReducer';

interface StateProps {
  readonly loginParams: LoginState
}

interface DispathProps {
  //
}

interface State {
  visible: boolean
  commentContent?: string,
  commentDataSource? 
}

type Props = Navigatable & DispathProps & StateProps

class NewsDetail extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.state = {
      visible: false,
      commentDataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2
      })
    }
  }
  static navigationOptions = {
    title: '新闻一线',
    tabBarVisible: false,
  };

  render() {
    const { params } = this.props.navigation.state;
    const newsId = params ? params.id : null;

    const newsTitle = news_test_data[newsId].newsTitle;
    const newsImage = news_test_data[newsId].newsImage;
    const newsDetailOne = news_test_data[newsId].newsDetail[0];
    const newsDetailTwo = news_test_data[newsId].newsDetail[1];
    const newsDetailThree = news_test_data[newsId].newsDetail[2];

    return (
      <View style={{flex: 1}}>
        <ScrollView style={{flex: 1, marginBottom: 40}} showsVerticalScrollIndicator={false}>
          <View style={styles.container}>
            <View style={styles.titleContainer}>
              <Text style={styles.titleText}>
              {newsTitle}
              </Text>
            </View>
            <View style={{height: 1, backgroundColor: commonColors.borderColor, marginTop: 5}}/>
            <View style={styles.imageContainer}>
              <Image
                style={styles.image}
                source={newsImage}
              />
            </View>
            <View style={styles.detailContainer}>
              <Text style={styles.detailText}>
                {newsDetailOne}
              </Text>
              <Text style={[styles.detailText, {marginTop: 10}]}>
                {newsDetailTwo}
              </Text>
              <Text style={[styles.detailText, {marginTop: 10}]}>
                {newsDetailThree}
              </Text>              
            </View>
            <View style={styles.commentTip}>
                <Text style={styles.commentTipText}>{'这些评论亮了'}</Text>
            </View>              
            {/* <ListView
                dataSource={this.state.commentDataSource}
                renderRow={this._renderRow.bind(this)}
                style={styles.listView} />              */}
          </View>        
        </ScrollView>        
        <View style={styles.commentContainer}>
          <CommentInputForm onLineTouch={this._inputLineOnPress}/>
        </View>
        <View>
          <Modal
            animationType={"slide"}
            transparent={true}
            visible={this.state.visible}
            onRequestClose={this._onModalDismiss}
          >
            <View style={styles.modalContainer}>
              <View style={styles.modalContent}>
                <View style={styles.partOne}>
                  <TouchableOpacity onPress={this._onCancelPress}>
                    <Text style={styles.cornerText}>{'取消'}</Text>
                  </TouchableOpacity>
                  <Text style={styles.centerText}>{'我来评论'}</Text>
                  <TouchableOpacity onPress={this._onPostPress}>
                    <Text style={styles.cornerText}>{'发表'}</Text>
                  </TouchableOpacity>
                </View>
                <TextInput
                  ref="input"
                  style={[styles.inputContainer, {textAlignVertical: 'top'}]}
                  onChangeText={this._onChangeText}
                  underlineColorAndroid="transparent"
                  autoFocus={true}
                />
              </View>
            </View>
          </Modal>                  
        </View>        
      </View>
    )
  }

  /**
   * 渲染评论
   */
  _renderRow = (rowData, sectionID, rowID, highlightRow): JSX.Element => {
    return (
      <CommentCard
        user={this.props.loginParams.user}
        commentContent={'希望老詹下一场别再打这么久了，把身体留着来76人多打几年'}
      />
    )
  }

  /**
   * 接收输入框回调
   */
  _inputLineOnPress = (visible: boolean) => {
    this.setState({ visible: visible })
  }

  /**
   * 模态消失
   */
  _onModalDismiss = () => {

  }

  /**
   * 点击取消
   */
  _onCancelPress = () => {
    this.setState({ visible: false })
  }

  /**
   * 点击发表
   */
  _onPostPress = () => {

  }

  /**
   * 输入框文本变化监听
   */
  _onChangeText = (text: string) => {
    if (text !== '') {
      this.setState({ commentContent: text});
    } 
  }  
}

interface Style {
  container: ViewStyle,
  titleContainer: ViewStyle,
  titleText: TextStyle,
  imageContainer: ViewStyle,
  image: ViewStyle,
  detailContainer: ViewStyle,
  detailText: TextStyle,
  commentContainer: ViewStyle,
  modalContainer: ViewStyle,
  modalContent: ViewStyle,
  partOne: ViewStyle,
  cornerText: TextStyle,
  centerText: TextStyle,
  inputContainer: ViewStyle,
  listView: ViewStyle,
  commentTip: ViewStyle,
  commentTipText: TextStyle
}

const styles = StyleSheet.create<Style>({
  container: {
    flex: 1,
    backgroundColor: commonColors.white,
    paddingVertical: 10
  },
  titleContainer: {
    paddingHorizontal: 10
  },
  titleText: {
    fontSize: 18,
    color: commonColors.black,
    fontWeight: 'bold'
  },
  imageContainer: {
    marginTop: 15,
    paddingHorizontal: 10
  },
  image: {
    width: '100%',
    height: 350,
  },
  detailContainer: {
    marginTop: 15,
    paddingHorizontal: 10
  },
  detailText: {
    fontSize: 15,
    color: commonColors.black,
    letterSpacing: 5,
    includeFontPadding: true
  },
  commentContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%'
  },
  modalContainer: {
    flex: 1,
    backgroundColor:'rgba(0, 0, 0, 0.3)'
  },
  modalContent: {
    flex: 1,
    backgroundColor: commonColors.gray,
    marginTop: '40%',
    paddingVertical: 5,
    paddingHorizontal: 10
  },
  partOne: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  cornerText: {
    fontSize: 15,
    color: commonColors.underGray
  },
  centerText: {
    fontSize: 18,
    color: commonColors.black
  },
  inputContainer: {
    backgroundColor: commonColors.white,
    height: 100,
    marginTop: 10
  },
  listView: {
    flexDirection: 'column',
    marginTop: 10
  },
  commentTip: {
    flexDirection: 'row',
    backgroundColor: commonColors.white,
    alignItems: 'center',
    paddingVertical: 5,
    borderTopColor: commonColors.borderColor,
    borderBottomColor: commonColors.borderColor,
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
    borderLeftColor: commonColors.topicColor,
    borderLeftWidth: 4,
    marginVertical: 10
  },
  commentTipText: {
    fontSize: 13,
    color: commonColors.topicColor,
    marginLeft: 8
  }
})

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
)(NewsDetail)