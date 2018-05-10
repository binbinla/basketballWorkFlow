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
import teamMap from '../utils/team-map';

/** 
 * Props pass from parent
*/
interface Props extends ViewStyle {
  teamAttr: string,
  id: number,
  callBackSelected: (select: boolean, rowId: number) => void
  hasSelected: boolean
}

interface State {
  isSelected: boolean
}

export default class StarTeamCard extends React.Component<Props, State> {

  constructor(props: Props){
    super(props);
    this.state = {
      isSelected: this.props.hasSelected
    }
  }

  render() {
    const teamName = teamMap[this.props.teamAttr].team
    const logo = teamMap[this.props.teamAttr].logo
    return (
      <TouchableOpacity onPress={this.changeState}>
        <View style={[styles.container]}>
          <View style={styles.leftContainer}>
            <Image
              style={styles.image}
              source={logo}
            />
            <Text style={styles.name}>
              {teamName}
            </Text>
          </View>
          {this.renderSelectedIcon()}
        </View>
      </TouchableOpacity>
    );
  }

  changeState = () => {
    this.setState({ isSelected: !this.state.isSelected }, () => {
      if (this.state.isSelected) {
        this.props.callBackSelected(this.state.isSelected, this.props.id);
      } else {
        this.props.callBackSelected(this.state.isSelected, this.props.id);
      }
    });
  }

  renderSelectedIcon = () => {
    if (this.state.isSelected) {
      return (
        <Text style={styles.select}>
          √
        </Text>
      )
    } else {
      return null;
    }
  }
}

interface Styles {
  container: ViewStyle,
  leftContainer: ViewStyle,
  image: ViewStyle,
  name: TextStyle,
  select: TextStyle
}

const styles = StyleSheet.create<Styles>({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: commonColors.white,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderBottomColor: commonColors.borderColor,
    borderBottomWidth: 0.5
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 10
  },
  name: {
    fontSize: 14,
    color: commonColors.black
  },
  select: {
    fontSize: 18,
    color: commonColors.black,
    marginRight: 5
  }
});
