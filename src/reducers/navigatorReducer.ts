import { App } from '../container/entrance/App';  // app的入口
import actions from '../actions';

const AppNavigator = App;

const initialState = AppNavigator.router.getStateForAction(AppNavigator.router.getActionForPathAndParams('Login'));

export default function navigatorReducer (state = initialState, action: any) {
  const nextState = AppNavigator.router.getStateForAction(action, state);
  return nextState || state;
}
