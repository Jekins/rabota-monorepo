import ym from 'react-yandex-metrika'
import * as ga from '../ga'
import { isDev, isServer } from '../../core'
import {
  EAnalyticEventTargets,
  IAnalyticEvent,
  IAnalyticEventProps,
  TGAEventName,
} from './types'

const getGAEventName = (eventName: IAnalyticEventProps['eventName']): TGAEventName => {
  return eventName.split('__').reduce((acc, item, index) => {
    switch (index) {
      case 0:
        acc.category = item
        break
      case 1:
        acc.action = item
        break
      case 2:
        acc.label = item
        break
      default:
    }

    return acc
  }, {} as TGAEventName)
}

const sendYMEvent = (props: Pick<IAnalyticEventProps, 'eventName'>): void => {
  ym('reachGoal', props.eventName)
}

const sendGAEvent = (props: Pick<IAnalyticEventProps, 'eventName' | 'value'>): void => {
  ga.event({
    ...getGAEventName(props.eventName),
    value: 1,
  })
}

export const analyticEvent: IAnalyticEvent = ({ targets, eventName, value }) => {
  if (isServer || isDev) return

  if (!targets) {
    sendYMEvent({ eventName })
    sendGAEvent({ eventName })

    return
  }

  targets.forEach((targetName) => {
    switch (targetName) {
      case EAnalyticEventTargets.ym:
        sendYMEvent({ eventName })
        break
      case EAnalyticEventTargets.ga:
        sendGAEvent({ eventName, value })
        break
      default:
        console.warn(
          'Передайте в targets названия сервисов аналитики (EAnalyticEventTargets), либо удалите targets и событие отправится во все сразу.'
        )
    }
  })
}
