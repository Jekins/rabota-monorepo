import { Component, createElement } from 'react'
import { NextPage, NextPageContext } from 'next'
import * as analytics from '../helpers/analytics/ga'
import { isDev, isLocal } from '../helpers/core'

/** Подключает к приложения/странице счетчик Google analytics. */
const withGa = (code, Router) => (Page: NextPage<any>): NextPage<any> => {
  class WithGa extends Component {
    // eslint-disable-next-line @typescript-eslint/ban-types
    static getInitialProps: (context: NextPageContext) => {} | Promise<{}>

    componentDidMount(): void {
      const shouldntTrack = isLocal || isDev

      if (shouldntTrack) return

      analytics.init(code)

      // listen route changes
      if (Router && Router.events && typeof Router.events.on === 'function') {
        Router.events.on('routeChangeComplete', (url) => {
          analytics.pageview(url)
        })
      }
    }

    render(): JSX.Element {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      return createElement(Page, this.props)
    }
  }

  if (Page.getInitialProps) {
    WithGa.getInitialProps = Page.getInitialProps
  }

  return WithGa
}

export default withGa
