import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
  ScrollView,
  TextStyle,
  Image,
  TextInput
} from 'react-native';
import { connect } from 'react-redux'; // 引入connect函数
import { NavigationActions } from 'react-navigation';
import { Navigatable } from '../../types/general-types';
import { allReducer } from '../../reducers/index';
import { Action } from '../../actions/types';
import { commonColors } from '../../utils/colors';
import Toast, { DURATION } from 'react-native-easy-toast';
import CustomSearchBar from '../../component/CustomSearchBar';

interface StateProps {
  // readonly loginParams: LoginState
}

interface DispathProps {
  //
}

interface State {
  searchText?: string 
}

type Props = Navigatable & DispathProps & StateProps

class GameSearch extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.state = {
      //  
    }
  }

  static navigationOptions = {
    header: null,
    tabBarVisible: false,
  };

  render() {
    return (
      <View style={styles.container}>
        <CustomSearchBar
          inputCallback={this._inputCallback}
          onSubmitEditing={this._onSubmitEditing}
          cancelOnPress={this._cancelOnPress}
        />
      </View>
    )
  }

  _inputCallback = (text: string) => {
    this.setState({ searchText: text });
  }

  _onSubmitEditing = () => {

  }

  _cancelOnPress = () => {
    this.props.navigation.goBack();
  }
}

interface Style {
  container: ViewStyle,
}

const styles = StyleSheet.create<Style>({
  container: {
    flex: 1,
    backgroundColor: commonColors.white,
  }
})

function mapStateToProps(reducer: any) {
  return {
    // loginParams: reducer.loginHandler
  }
}

function mapDispatchToProps() {
  return (dispatch: any) => ({
    //
  })
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameSearch)