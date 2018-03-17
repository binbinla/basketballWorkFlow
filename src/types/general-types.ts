export interface Navigatable {
  // navigation: {
  //   state: {
  //     params?: any
  //   },
  //   dispatch: (param: any) => void
  // }
  navigation: any
}

export enum LoadingStatus {
  Idle,
  Reloading,
  More
}

export interface ListState {
  readonly loadingStatus: LoadingStatus
  readonly page: number
}

