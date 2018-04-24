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
  ActivityIndicator,
  Modal
} from 'react-native';
import { commonColors } from '../utils/colors';

/** 
 * Props pass from parent
*/
interface Props extends ViewStyle {
  visible: boolean,
  textContent?: string,
  cancelable?: boolean,
  animation?: ANIMATION,
  color?: string,
  size?: SIZES,
  overlayColor?: string,
  textStyle?: TextStyle
}

export enum ANIMATION {
  NONE = 'none',
  SLIDE = 'slide',
  FADE = 'fade'
}

export enum SIZES {
  SMALL = 'small',
  NORMAL = 'normal',
  LARGE = 'large'
}

interface State {
  visible: boolean,
  textContent?: string
}
// const ANIMATION = ['none', 'slide', 'fade'];
// const SIZES = ['small', 'normal', 'large'];

export default class GameCard extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.state = {
      visible: this.props.visible,
      textContent: this.props.textContent || ''
    };
  }

  componentWillReceiveProps(nextProps: Props) {
    const { visible, textContent } = nextProps;
    this.setState({ visible, textContent });
  }

  render() {
    return this._renderSpinner();
  }

  /**
   * 
   */
  close = () => {
    this.setState({ visible: false })
  }

  /**
   * 
   */
  _handleOnRequestClose = () => {
    if (this.props.cancelable) {
      this.close();
    }
  }

  _renderDefaultContent() {
    return (
      <View style={styles.background}>
        <ActivityIndicator
          color={this.props.color || commonColors.white}
          size={this._mapSize(this.props.size || SIZES.LARGE)}
          style={{ flex: 1 }}
        />
        <View style={styles.textContainer}>
          <Text style={[styles.textContent, this.props.textStyle]}>{this.state.textContent}</Text>
        </View>
      </View>
    );
  }

  /**
   * 
   */
  _mapSize = (size?: SIZES): 'large' | number | 'small' | undefined => {
    if (size === SIZES.LARGE) {
      return 'large'
    } else if (size === SIZES.NORMAL) {
      return 'large'
    } else if (size === SIZES.SMALL) {
      return 'small'
    } else {
      return undefined
    }
  }

  /**
   * 
   */
  _renderSpinner() {
    const { visible } = this.state;

    if (!visible)
      return null;

    const spinner = (
      <View style={[
        styles.container,
        { backgroundColor: this.props.overlayColor }
      ]} key={`spinner_${Date.now()}`}>
        {this.props.children ? this.props.children : this._renderDefaultContent()}
      </View>
    );

    return (
      <Modal
        animationType={this.props.animation}
        onRequestClose={() => this._handleOnRequestClose()}
        supportedOrientations={['landscape', 'portrait']}
        transparent
        visible={visible}>
        {spinner}
      </Modal>
    );
  }
    
}

interface Styles {
  container: ViewStyle,
  background: ViewStyle,
  textContainer: ViewStyle,
  textContent: TextStyle
}

const styles = StyleSheet.create<Styles>({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  },
  background: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textContainer: {
    flex: 1,
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute'
  },
  textContent: {
    top: 50,
    height: 50,
    fontSize: 20,
    fontWeight: 'bold'
  }
});
