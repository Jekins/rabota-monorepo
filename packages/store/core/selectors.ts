import { ICoreState } from './types'
import { sliceName } from './constants'
import { getStateItem } from '../utils/core'

export default {
  isTouch: getStateItem<ICoreState, ICoreState[typeof sliceName]['isTouch']>(
    sliceName,
    'isTouch'
  ),
}
