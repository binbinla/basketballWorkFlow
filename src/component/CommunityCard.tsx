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
import { commonColors } from '../utils/colors';
import news_test_data from '../mock_datas/news_datas';
import { News } from '../model/news';

/** 
 * Props pass from parent
*/
interface Props extends ViewStyle {
  communityId: string
}

export default class CommunityCard extends React.Component<Props, object> {
  constructor(props: Props) {
    super(props);
  }
  render() {
    const newsTitle = news_test_data[this.props.communityId].newsTitle;
    const newsImage = news_test_data[this.props.communityId].newsImage;
    return (
      <View style={[styles.container]}>
        <Image
          source={newsImage}
          style={styles.imageContainer}
        />
        <View style={styles.textContainer}>
          <Text style={styles.text}>
            {newsTitle}
          </Text>
        </View>
      </View>
    );
  }

}

interface Styles {
  container: ViewStyle,
  imageContainer: ViewStyle,
  textContainer: ViewStyle,
  text: TextStyle
}

const styles = StyleSheet.create<Styles>({
  container: {
    flexDirection: 'row',
    backgroundColor: commonColors.white,
    padding: 8,
    borderBottomColor: commonColors.borderColor,
    borderBottomWidth: 0.5
  },
  imageContainer: {
    width: 80,
    height: 80
  },
  textContainer: {
    marginLeft: 10,
    marginRight: 80,
  },
  text: {
    fontSize: 13,
    color: commonColors.black
  }
});
