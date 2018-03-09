import { Action, ActionCreator } from '../actions/types';

// action related utility functions
export function actionCreator<P>(type: string): ActionCreator<P> {
  return Object.assign(
    (payload: P) => ({type, payload} as Action<P>),
    {type}
  )
}

export function isType<P>(action: Action<any>, creator: ActionCreator<P>): boolean {
  return action.type === creator.type
}