import * as React from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ViewStyle,
  TextStyle,
  TouchableOpacity,
  Image
} from 'react-native';
import { commonColors } from '../../utils/colors';

/** 
 * 
*/
interface Props extends ViewStyle {
  leftText: string,
  onFormClick:() => void,
  cutOffLine?: boolean
}

export default class FormArrowToDetail extends React.Component<Props, object> {
  constructor(props: Props){
    super(props);
  }
  render() {
    const defaultCutOffLineStyle: ViewStyle = { borderBottomWidth: 0.5, borderBottomColor: commonColors.borderColor }
    let cutOffLineStyle: ViewStyle
    cutOffLineStyle = this.props.cutOffLine === undefined ? defaultCutOffLineStyle : this.props.cutOffLine ? defaultCutOffLineStyle : {}
    return (
      <TouchableOpacity activeOpacity={0.5} onPress={() => {this.props.onFormClick()}}>
        <View style={[styles.container, cutOffLineStyle]}>
          <Text style={[styles.text]}>
              {this.props.leftText}
          </Text>
          <Image source={require('../../../assets/img/indicate/arrow-right.png')} style={styles.image}/>   
        </View>
      </TouchableOpacity>
    );
  }
}

interface Styles {
  container: ViewStyle,
  text: TextStyle,
  image: ViewStyle
}

const styles = StyleSheet.create<Styles>({
  container: {
    flexDirection: 'row',
    backgroundColor: commonColors.white,
    marginLeft: 15,
    paddingVertical: 10,
    paddingRight: 15,
    alignItems: 'center',
  },
  text: {
    fontSize: 15,
    color: commonColors.formTextColor
  },
  image: {
    height: 15,
    width: 15,
    position: 'absolute',
    right: 15,
  }
});
