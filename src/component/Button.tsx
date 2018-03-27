import * as React from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ViewStyle,
  TextStyle,
  TouchableOpacity
} from 'react-native';
import { commonColors } from '../utils/colors';

/** 
 * Button可内置样式导出去，可选的有：默认样式、置灰样式、不可点击样式
*/
interface Props extends ViewStyle {
  text: string,
  onButtonClick:() => void,
  style?: ViewStyle,
  buttonTextStyle?: TextStyle,
}

export default class Button extends React.Component<Props, object> {
  constructor(props: Props){
    super(props);
  }
  render() {
    return (
      // <View style={[this.props.style, styles.container]}>
      //   <TouchableOpacity style={styles.touch} activeOpacity={0.8} onPress={() => {this.props.onButtonClick()}}>
          // <Text style={[this.props.buttonTextStyle, styles.text]}>
          //   {this.props.text}
          // </Text>          
      //   </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.8} onPress={() => {this.props.onButtonClick()}}>
        <View style={[this.props.style, styles.container]}>
          <Text style={[this.props.buttonTextStyle, styles.text]}>
              {this.props.text}
          </Text>   
        </View>
      </TouchableOpacity>
    );
  }
}

interface Styles {
  container: ViewStyle,
  text: TextStyle
}

const styles = StyleSheet.create<Styles>({
  container: {
    backgroundColor: commonColors.buttonBg,
    borderRadius: 5,
    marginHorizontal: 15,
    paddingVertical: 8,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 15,
    color: commonColors.white
  }
});
