import React, { useEffect, createContext, FC, useCallback } from 'react'
import { useRouter } from 'next/router'
import { isBrowser } from '@rabota/utils/helpers/core'
import { ICachedScrollPositions } from './types'

export const ScrollPositionContext = createContext({
  triggerScroll: () => null,
})

let currentPath = isBrowser ? window.location.pathname : ''
const cachedScrollPositions = {} as ICachedScrollPositions

const ScrollPositionProvider: FC = ({ children }) => {
  const router = useRouter()

  const handleChangeStart = useCallback(() => {
    cachedScrollPositions[currentPath] = {
      x: window.scrollX || window.pageXOffset,
      y: window.scrollY || window.pageYOffset,
    }
  }, [])

  const handleChangeComplete = useCallback((url) => {
    const currentPositions = cachedScrollPositions[url]

    currentPath = url

    if (currentPositions) {
      window.scrollTo(currentPositions.x, currentPositions.y)
    }
  }, [])

  const triggerScroll = useCallback(() => null, [])

  useEffect(() => {
    router.events.on('routeChangeStart', handleChangeStart)
    router.events.on('routeChangeComplete', handleChangeComplete)

    return () => {
      router.events.off('routeChangeStart', handleChangeStart)
      router.events.off('routeChangeComplete', handleChangeComplete)
    }
  }, [])

  return (
    <ScrollPositionContext.Provider value={{ triggerScroll }}>
      {children}
    </ScrollPositionContext.Provider>
  )
}

export default ScrollPositionProvider
