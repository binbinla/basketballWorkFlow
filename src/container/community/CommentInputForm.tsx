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
  Modal,
  TextInput
} from 'react-native';
import { commonColors } from '../../utils/colors';

/** 
 * Props pass from parent
*/
interface Props extends ViewStyle {
  onLineTouch: (visible: boolean) => void 
}

interface State {
  //
}

export default class CommentInputForm extends React.Component<Props, State> {
  constructor(props: Props){
    super(props);
    this.state = {
      //
    }
  }
  render() {
    return (
      <View style={[styles.container]}>
        <TouchableOpacity style={styles.touchLine} onPress={this._inputLineOnPress.bind(this)}>
          <Text style={styles.text}>{'我来评论...'}</Text>
        </TouchableOpacity>
      </View>
    );
  }

  /**
   * 点击输入框
   */
  _inputLineOnPress = () => {
    this.props.onLineTouch(true);
  }
}

interface Styles {
  container: ViewStyle,
  touchLine: ViewStyle,
  text: TextStyle,
}

const styles = StyleSheet.create<Styles>({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: commonColors.white,
    height: 50,
    borderTopColor: commonColors.borderColor,
    borderTopWidth: 0.5,
    paddingHorizontal: 10,
    paddingVertical: 5
  },
  touchLine: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: commonColors.gray,
    paddingVertical: 5,
    paddingHorizontal: 10
  },
  text: {
    fontSize: 12,
    color: commonColors.underGray,
  }
});
