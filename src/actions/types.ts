import { Dispatch } from 'redux';

export type Action<T> = {
  readonly type: string,
  readonly payload: T
}

export interface ActionCreator<T> {
  readonly type: string,
  (payload: T): Action<T>
}

export type ActionDispatch<P> = (dispatch: Dispatch<Action<P>>) => void