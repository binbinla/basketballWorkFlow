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
  nickName: string,
  contactText: string,
  pictureUri: string,
  onFormClick:() => void,
}

export default class FormWithPicture extends React.Component<Props, object> {
  constructor(props: Props){
    super(props);
  }
  render() {
    return (
      <TouchableOpacity activeOpacity={0.5} onPress={() => {this.props.onFormClick()}}>
        <View style={[styles.container]}>
          <Image source={require('../../../assets/img/indicate/snail.jpg')} style={styles.leftImage}/>
          <View style={styles.textContainer}>
            <Text style={[styles.nickNameText]}>
                {this.props.nickName}
            </Text>
            <Text style={[styles.contactText]}>
                {this.props.contactText}
            </Text>
          </View>
          <Image source={require('../../../assets/img/indicate/arrow-right.png')} style={styles.rightImage}/>   
        </View>
      </TouchableOpacity>
    );
  }
}

interface Styles {
  container: ViewStyle,
  textContainer: ViewStyle,
  nickNameText: TextStyle,
  contactText: TextStyle,
  leftImage: ViewStyle,
  rightImage: ViewStyle
}

const styles = StyleSheet.create<Styles>({
  container: {
    flexDirection: 'row',
    backgroundColor: commonColors.white,
    marginLeft: 15,
    paddingVertical: 5,
    paddingRight: 15,
    alignItems: 'center',
    borderBottomWidth: 0.5,
    borderBottomColor: commonColors.borderColor
  },
  textContainer: {
    marginLeft: 8,
    flexDirection: 'column'
  },
  nickNameText: {
    fontSize: 14,
    color: commonColors.formTextColor
  },
  contactText: {
    fontSize: 14,
    color: commonColors.formSuperficialColor,
    marginTop: 5
  },
  leftImage: {
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: commonColors.white
  },
  rightImage: {
    height: 15,
    width: 15,
    position: 'absolute',
    right: 15,
  }
});
