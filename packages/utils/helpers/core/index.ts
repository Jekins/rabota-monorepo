import MobileDetect from 'mobile-detect'
import { NextPageContext } from 'next/dist/next-server/lib/utils'
import Cookies from 'universal-cookie'

/** Определяет по юзер-агенту, мобила сейчас или десктоп */
export const isTouch = (ctx: any): boolean => {
  const headers = ctx && ctx.req && ctx.req.headers
  const detected = headers
    ? new MobileDetect(headers['user-agent'] as string)
    : new MobileDetect(navigator.userAgent)

  return Boolean(detected.mobile())
}

/** Если dev окружение */
export const isDev = process.env.NODE_ENV === 'development'

/** Если prod окружение */
export const isProd = !isDev

/** Если выполняется в браузере, на клиенте */
export const isBrowser = typeof window !== 'undefined'

/** Если выполняется в браузере, на сервере */
export const isServer = !isBrowser

/** Если выполняется на localhost */
export const isLocal = isBrowser && window.location.hostname === 'localhost'
export const isLocalFunc = (host: string): boolean => /localhost:/g.test(host)

/** Парсит куки на клиенте и сервере */
export const getParsedCookies = (req?: NextPageContext['req']): Record<string, any> => {
  const result = isBrowser
    ? new Cookies(document.cookie)
    : new Cookies(req?.headers?.cookie || '')

  return result.getAll()
}

/** Возвращает рандомный int id */
export const getRandomId = (): number => Math.floor(Math.random() * 1e10)
