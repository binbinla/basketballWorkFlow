import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux'; // 引入connect函数
import { NavigationActions } from 'react-navigation';
import { Navigatable } from '../../types/general-types';
import { allReducer } from '../../reducers/index';
import { Action } from '../../actions/types';
import GameCard from '../../component/GameCard';
import { commonColors } from '../../utils/colors';

const resetAction = NavigationActions.reset({
  index: 0,
  actions: [
    NavigationActions.navigate({ routeName: 'Hello' })
  ]
})

interface StateProps {
  // readonly loginParams: loginState
}

interface DispathProps {
  // readonly login: () => Action<void>
}

type Props = Navigatable & StateProps & DispathProps

class HomePage extends React.Component<Props, {}> {

  constructor(props: Props) {
    super(props);
  }
  static navigationOptions = {
    title: '放学打球'
  };

  render() {
    return (
      <View style={styles.container}>
        <GameCard
          bgColor={commonColors.gameOrange}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5FCFF'
  }
});

function mapStateToProps(reducer: any) {
  return {
    // loginParams: reducer.loginIn
  }
}

function mapDispatchToProps() { 
  return (dispatch: any) => ({
    // login: () => dispatch(loginAction.login())
  })
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage)