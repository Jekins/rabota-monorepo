import { ISerializedError } from '@rabota/utils/helpers/core/types'
import { IGetStateById, IGetStateError, IGetStateItem } from './types'

/** Метод для выборки по id из адаптера */
export const getStateById: IGetStateById = <_, TTarget>(adaptorSelectors) => (id) => (
  state
): TTarget | undefined => adaptorSelectors.selectById(state, id)

/** Метод для выборки из стейта */
export const getStateItem: IGetStateItem = <_, TTarget>(sliceName, itemName) => (
  state
): TTarget => {
  return state[sliceName][itemName]
}

/** Метод для выборки ошибки из стейта */
export const getStateError: IGetStateError = (sliceName) => (state): ISerializedError =>
  state[sliceName].error
