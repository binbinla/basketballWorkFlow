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
import { User } from '../../reducers/loginReducer';

/** 
 * Props pass from parent
*/
interface Props extends ViewStyle {
  user: User | null,
  commentContent: string
}

export default class CommentCard extends React.Component<Props, object> {
  constructor(props: Props){
    super(props);
  }
  render() {
    const imageUrl = this.props.user ? this.props.user.imageResource : require('../../../assets/img/indicate/snail.jpg')
    const nickName = this.props.user ? this.props.user.nickName : '到此一游'
    return (
      <View style={[styles.container]}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={imageUrl}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.nickName}>{nickName}</Text>
          <Text style={styles.comment}>{this.props.commentContent}</Text>
        </View>
      </View>
    );
  }
}

interface Styles {
  container: ViewStyle,
  imageContainer: ViewStyle,
  image: ViewStyle,
  textContainer: ViewStyle,
  nickName: TextStyle,
  comment: TextStyle
}

const styles = StyleSheet.create<Styles>({
  container: {
    // flex: 1,
     flexDirection: 'row',
    backgroundColor: commonColors.white,
    padding: 10,
    borderBottomColor: commonColors.borderColor,
    borderBottomWidth: 0.5
  },
  imageContainer: {
    marginRight: 8
  },
  image: {
    width: 30,
    height: 30,
    borderRadius: 15
  },
  textContainer: {
    flexDirection: 'column'
  },
  nickName: {
    fontSize: 12,
    color: commonColors.underGray
  },
  comment: {
    fontSize: 15,
    color: commonColors.black,
    marginTop: 8
  }
});
