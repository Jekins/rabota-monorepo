import { ITestState } from './types'
import { sliceName } from './constants'
import { getStateError, getStateItem } from '../utils/core'

export default {
  loading: getStateItem<ITestState, ITestState[typeof sliceName]['loading']>(
    sliceName,
    'loading'
  ),

  questionsWithReply: getStateItem<
    ITestState,
    ITestState[typeof sliceName]['questionsWithReply']
  >(sliceName, 'questionsWithReply'),

  currentQuestion: getStateItem<
    ITestState,
    ITestState[typeof sliceName]['currentQuestion']
  >(sliceName, 'currentQuestion'),

  error: getStateError<ITestState>(sliceName),
}
