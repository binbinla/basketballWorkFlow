import * as React from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ViewStyle,
  TextStyle,
  TouchableOpacity,
  TextInput,
  Image
} from 'react-native';
import { commonColors } from '../utils/colors';

interface Props extends ViewStyle {
  value: string
  inputCallback:(text: string) => void,
  style?: ViewStyle
}

interface State {
  value: string,
  showClearImage: boolean 
}

export default class InputForm extends React.Component<Props, State> {

  constructor(props: Props){
    super(props);
    this.state = {
      value: this.props.value,
      showClearImage: this.props.value === '' ? false : true 
    }
  }

  render() {
    const placeholder = this.props.value === '' ? '未填写' : ''
    return (
      <View style={[{flex: 1}, this.props.style]}>
        <TextInput
          ref="input"
          value={this.state.value}
          style={[styles.container, {textAlignVertical: 'center'}]}
          onChangeText={this._onChangeText}
          underlineColorAndroid="transparent"
          placeholder={placeholder}
          autoFocus={true}
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
    this.setState({ value: text }, () => {
      this.props.inputCallback(text);
    });
  }

  /**
   * 点击了清除按钮
   */
  _clearOnPress = () => {
    const input: any = this.refs.input
    input.clear();
    this.setState({showClearImage: false});
  }
}

interface Styles {
  container: ViewStyle,
  image: ViewStyle,
  imageContainer: ViewStyle
}

const styles = StyleSheet.create<Styles>({
  container: {
    backgroundColor: commonColors.white,
    height: 50,
  },
  imageContainer: {
    position: 'absolute',
    right: 15,
    top: 15
  },
  image: {
    width: 20,
    height: 20,
  }
});
