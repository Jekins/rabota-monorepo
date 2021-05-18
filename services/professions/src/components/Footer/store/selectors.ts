import { IFooterState } from './types'
import { sliceName } from './constants'
import { getStateItem } from '@rabota/store/utils/core'

export default {
  color: getStateItem<IFooterState, IFooterState[typeof sliceName]['color']>(
    sliceName,
    'color'
  )
}
