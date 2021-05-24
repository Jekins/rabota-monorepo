import React from 'react'
import NextNprogress from 'nextjs-progressbar'
import { YMInitializer } from 'react-yandex-metrika'
import { AppContext, AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from '@rabota/ui/core/GlobalStyles'
import { Router } from 'next/router'
import { useSelector } from 'react-redux'
import withGa from '@rabota/utils/hocs/withGa'
import { isProd, isTouch as isTouchUtil } from '@rabota/utils/helpers/core'
import ScrollPositionProvider from '@rabota/ui/core/ScrollPositionProvider'
import { coreActions, coreSelectors } from '@rabota/store/core'
import { EColor } from '@rabota/utils/helpers/styles/variables'
import redirectMiddleware from '@rabota/utils/middlewares/redirectMiddleware'
import { analyticsIds } from '@rabota/utils/helpers/analytics/constants'
import { CookiesProvider } from 'react-cookie'
import themeProject from '../theme'
import { wrapper } from '../store/store'
import { Layout } from '../components/Layout'

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  const isTouch = useSelector(coreSelectors.isTouch)

  return (
    <CookiesProvider>
      <ScrollPositionProvider>
        <ThemeProvider
          theme={{
            mode: 'default',
            ...{ isTouch, ...themeProject.variables },
          }}
        >
          {isProd && (
            <>
              {/* Google Analytics */}
              <script
                async
                src={`https://www.googletagmanager.com/gtag/js?id=${analyticsIds.ga}`}
              />
              <script
                dangerouslySetInnerHTML={{
                  __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                `,
                }}
              />

              {/* Yandex */}
              <YMInitializer
                accounts={[analyticsIds.ya]}
                options={{
                  clickmap: true,
                  trackLinks: true,
                  accurateTrackBounce: true,
                  trackHash: true,
                  webvisor: true,
                }}
                version='2'
              />
            </>
          )}

          <GlobalStyles />

          <NextNprogress
            color={EColor.blue}
            startPosition={0.75}
            stopDelayMs={300}
            height={1}
          />

          <Layout isTouch={isTouch}>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </ScrollPositionProvider>
    </CookiesProvider>
  )
}

App.getInitialProps = wrapper.getInitialAppProps(
  (store) =>
    async ({ ctx, Component }: AppContext): Promise<any> => {
      // FIXME: нужно убрать этот костыль и прокидывать стор в мидлвееры отдельно
      ctx.store = store

      await redirectMiddleware(ctx)

      const { dispatch } = store
      const isTouch = isTouchUtil(ctx)
      let pageProps = {}

      dispatch(coreActions.toggleTouch(isTouch))

      if (Component.getInitialProps) {
        pageProps = await Component.getInitialProps(ctx)
      }

      return { pageProps: { ...pageProps, isTouch } }
    }
)

export default wrapper.withRedux(withGa(analyticsIds.ga, Router)(App))
