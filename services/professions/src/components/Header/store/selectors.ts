import { IHeaderState } from './types'
import { sliceName } from './constants'
import { getStateItem } from '@rabota/store/utils/core'

export default {
  color: getStateItem<IHeaderState, IHeaderState[typeof sliceName]['color']>(
    sliceName,
    'color'
  )
}
