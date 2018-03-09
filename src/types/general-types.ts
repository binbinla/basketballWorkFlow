export interface Navigatable {
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

