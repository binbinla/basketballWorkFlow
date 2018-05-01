import * as React from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ViewStyle,
  TextStyle,
  TouchableOpacity,
  Image,
  TextInput,
  Button
} from 'react-native';
import { commonColors } from '../utils/colors';

/** 
 * Props pass from parent
*/
interface Props extends ViewStyle {
  inputCallback:(text: string) => void,
  onSubmitEditing:() => void,
  cancelOnPress:() => void,
  style?: ViewStyle,
}

interface State {
  showClearImage: boolean 
}

export default class CustomSearchBar extends React.Component<Props, State> {
  constructor(props: Props){
    super(props);
    this.state = {
      showClearImage: false 
    }
  }
  render() {
    return (
      <View style={[styles.container]}>
        <View style={styles.textInputContainer}>
          <TextInput
            ref="input"
            style={[styles.textInput, {textAlignVertical: 'center'}]}
            onChangeText={this._onChangeText}
            underlineColorAndroid="transparent"
            placeholder={'按日期搜索比赛 eg:2018/03/14'}
            autoFocus={true}
            onSubmitEditing={() => this.props.onSubmitEditing()}
          /> 
          {
            this.state.showClearImage ?
            <TouchableOpacity style={styles.imageContainer} onPress={this._clearOnPress}>
              <Image
                source={require('../../assets/img/indicate/clear-text.png')}
                style={styles.image}
              />
            </TouchableOpacity>
            :
            null
          }          
        </View>
        <TouchableOpacity 
          onPress={this._cancelOnPress}
          activeOpacity={0.5}
          style={styles.cancelContainer}
        >
          <Text style={styles.cancelText}>取消</Text>
        </TouchableOpacity>
      </View>
    )
  }

    /**
   * 内容变更
   */
  _onChangeText = (text: string) => {
    if (text !== '') {
      this.setState({showClearImage: true});
    } else {
      this.setState({showClearImage: false});
    }
    this.props.inputCallback(text);
  }

  /**
   * 点击了清除按钮
   */
  _clearOnPress = () => {
    const input: any = this.refs.input
    input.clear();
    this.setState({showClearImage: false});
  }  

  /**
   * 点击了取消按钮
   */
  _cancelOnPress = () => {
    this.props.cancelOnPress();
  }
}

interface Styles {
  container: ViewStyle,
  textInputContainer: ViewStyle,
  textInput: ViewStyle,
  image: ViewStyle,
  imageContainer: ViewStyle,
  cancelContainer: ViewStyle,
  cancelText: TextStyle
}

const styles = StyleSheet.create<Styles>({
  container: {
    flexDirection: 'row',
    backgroundColor: commonColors.topicColor,
    padding: 10,
    alignItems: 'center'
  },
  textInputContainer: {
    flex: 1,
    backgroundColor: commonColors.white,
    borderRadius: 8
  },
  textInput: {
    backgroundColor: commonColors.white,
    height: 40,
    borderRadius: 4
  },
  imageContainer: {
    position: 'absolute',
    right: 10,
    top: 10
  },
  image: {
    width: 20,
    height: 20,
  },
  cancelContainer: {
    flex: 0,
    marginLeft: 10,
    paddingHorizontal: 2
  },
  cancelText: {
    fontSize: 18,
    color: commonColors.white
  }
});
