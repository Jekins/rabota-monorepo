import { EntityId, EntitySelectors } from '@reduxjs/toolkit'
import { ISerializedError } from '@rabota/utils/helpers/core/types'

export interface IGetStateById {
  <TState, TTarget>(adaptorSelectors: EntitySelectors<TTarget, TState>): (
    id: EntityId
  ) => (state: TState) => TTarget | undefined
}

export interface IGetStateItem {
  <TState, TTarget>(sliceName: string, itemName: string): (state: TState) => TTarget
}

export interface IGetStateError {
  <TState>(sliceName: string): (state: TState) => ISerializedError
}
