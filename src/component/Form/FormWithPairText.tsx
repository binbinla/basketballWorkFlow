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
  rightText: string,
  onFormClick:() => void,
  cutOffLine?: boolean,
  style?: ViewStyle,
  arrowRight?: boolean
}

export default class FormWithPairText extends React.Component<Props, object> {
  constructor(props: Props){
    super(props);
  }
  render() {
    const defaultCutOffLineStyle: ViewStyle = { borderBottomWidth: 0.5, borderBottomColor: commonColors.borderColor }
    let cutOffLineStyle: ViewStyle
    cutOffLineStyle = this.props.cutOffLine === undefined ? defaultCutOffLineStyle : this.props.cutOffLine ? defaultCutOffLineStyle : {}
    return (
      <TouchableOpacity activeOpacity={0.5} onPress={() => {this.props.onFormClick()}}>
        <View style={[styles.container, this.props.style, cutOffLineStyle]}>
          <Text style={[styles.leftText]}>
              {this.props.leftText}
          </Text>
          {
            this.props.arrowRight ?
              this.renderArrowRight()
            : 
              <Text style={[styles.rightText]}>
                {this.props.rightText}
              </Text>
          }
        </View>
      </TouchableOpacity>
    );
  }

  renderArrowRight = () => {
    return (
      <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
        <Text style={[styles.rightText]}>
          {this.props.rightText}
        </Text>          
        <Image
          style={styles.image}
          source={require('../../../assets/img/indicate/arrow-right.png')}
        /> 
      </View>
    )
  }
}

interface Styles {
  container: ViewStyle,
  leftText: TextStyle,
  rightText: TextStyle,
  image: ViewStyle
}

const styles = StyleSheet.create<Styles>({
  container: {
    flexDirection: 'row',
    backgroundColor: commonColors.white,
    marginLeft: 15,
    paddingVertical: 5,
    paddingRight: 15,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  leftText: {
    fontSize: 15,
    color: commonColors.formTextColor
  },
  rightText: {
    fontSize: 14,
    color: commonColors.formSuperficialColor
  },
  image: {
    height: 15,
    width: 15,
    marginLeft: 10
  }
});
