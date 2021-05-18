import { isBrowser } from '../core'
import { IGtagEvent } from './types'
import { analyticsIds } from './constants'

export const init = (code: string): void => {
  if (isBrowser) {
    window.gtag('js', new Date())

    window.gtag('config', code, { page_path: window.location.pathname })
  }
}

export const pageview = (url: string): void => {
  if (isBrowser && window.gtag) {
    window.gtag('config', analyticsIds.ga, { page_path: url })
  }
}

export const event = ({ action, category, label, value }: IGtagEvent): void => {
  if (isBrowser && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value,
    })
  }
}
