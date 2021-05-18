import { ActionReducerMapBuilder, AsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { ISerializedError } from '@rabota/utils/helpers/core/types'

export enum ELoading {
  idle = 'idle',
  pending = 'pending',
  fulfilled = 'fulfilled',
  rejected = 'rejected',
}

export interface IResponseInitialState {
  loading: ELoading
  currentRequestId: string | null
  error: ISerializedError | null
}

type TResponseExtraReducerBuilder<T> = ActionReducerMapBuilder<
  T & Partial<IResponseInitialState>
>

type TResponseExtraReducerThunk<K> = AsyncThunk<K, any, any>

type TResponseExtraReducerCb<T, K> = (
  state: T,
  action: PayloadAction<
    K,
    string,
    {
      arg: void
      requestId: string
    },
    never
  >
) => void

export interface IResponseExtraReducers {
  <T, K>(props: {
    builder: TResponseExtraReducerBuilder<T>
    thunk: TResponseExtraReducerThunk<K>
    pending?: TResponseExtraReducerCb<T, K>
    rejected?: TResponseExtraReducerCb<T, K>
    fulfilled: TResponseExtraReducerCb<T, K>
    options?: {
      withoutCondition: boolean
    }
  }): void
}
