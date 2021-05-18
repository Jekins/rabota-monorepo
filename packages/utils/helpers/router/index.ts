import { NextRouter } from 'next/router'
import { authSelectors } from '../../../store/auth'
import { isBrowser } from '../core'
import { IRedirect, IRedirectByAuthStatus } from './types'

/** Возвращаешь из роутера значение квери параметра */
export const getQueryValueByRouter = (
  router: NextRouter,
  queryKey: string
): string | string[] | undefined => {
  const fromQuery = router?.query[queryKey]

  if (fromQuery) return fromQuery

  const matchQuery = router?.asPath?.match(new RegExp(`[&?]${queryKey}=(.*)(&|$)`))

  return matchQuery ? matchQuery[1] : undefined
}

/** Возвращает путь с добавленными квери параметрами */
export const getFullRouterPath = (
  source: NextRouter | string,
  queryString: string
): string => {
  const url = typeof source === 'string' ? source : source?.asPath
  const path = url.replace(/\?.*/g, '')

  return queryString ? `${path}?${queryString}` : path
}

/** Возвращает search params из урла */
export const getSearchParams = (url: string): URLSearchParams => {
  const queries = url.replace(/.*(\?.*)/g, '$1')

  return new URLSearchParams(queries)
}

/** Из query string формирует объект с учетом массивов `foo[]=bar1&foo[]=bar2` */
export const queryStringToObject = (url: string): Record<string, unknown> => {
  const params = getSearchParams(url)
  const obj = {}

  // eslint-disable-next-line no-restricted-syntax
  for (const key of params.keys()) {
    if (params.getAll(key).length > 1) {
      obj[key.replace(/\[]$/g, '')] = params.getAll(key)
    } else {
      const value = params.get(key)
      const isValueArr = /\[]$/g.test(key)

      if (value) {
        obj[key.replace(/\[]$/g, '')] = isValueArr ? [value] : value
      }
    }
  }

  return obj
}

/** Из объекта формирует query string с учетом массивов `foo[]=bar1&foo[]=bar2` */
export const objectToQueryString = (initialObj: Record<string, unknown>): string => {
  const reducer = (obj, parentPrefix = '') => (prev, key): string[] => {
    const val = obj[key]
    let prefix = key

    if (parentPrefix) {
      prefix = parentPrefix
        ? `${parentPrefix.replace(/\[]$/g, '')}[]`
        : key.replace(/\[]$/g, '')
    }

    if (val == null || typeof val === 'function') {
      prev.push(`${prefix}=`)

      return prev
    }

    if (['number', 'boolean', 'string'].includes(typeof val)) {
      prev.push(`${prefix}=${encodeURIComponent(val)}`)

      return prev
    }

    prev.push(Object.keys(val).reduce(reducer(val, prefix), []).join('&'))

    return prev
  }

  return Object.keys(initialObj).reduce(reducer(initialObj), []).join('&')
}

/** Мержит старые и новые квери параметры с конвертацией их в query string */
export const getFullQueryString = (
  router: NextRouter,
  newQueryObj?: Record<string, unknown>,
  excludeKeys?: string[]
): string => {
  const oldQueryObj = isBrowser
    ? queryStringToObject(window.location.search)
    : { ...router.query }

  if (excludeKeys) {
    excludeKeys.forEach((key) => {
      delete oldQueryObj[key]
    })
  }

  const allQueries = newQueryObj ? { ...oldQueryObj, ...newQueryObj } : oldQueryObj

  /** Удаляем все пустые квери параметры */
  const cleanQueryObj = Object.keys(allQueries).reduce((acc, queryKey) => {
    const value = allQueries[queryKey]
    const isValueValid = Array.isArray(value) ? value.length : value

    if (value === 'false' || isValueValid) {
      acc[queryKey] = value
    }

    return acc
  }, {})

  return objectToQueryString(cleanQueryObj)
}

/** Осуществляет редирект по указанному урлу. Работает и на сервере и на клиенте */
export const redirect: IRedirect = ({
  location,
  ctx,
  statusCode = 302,
  withQuery = true,
}) => {
  if (isBrowser) {
    window.location.href = location
  } else if (ctx.res) {
    ctx.res?.writeHead(statusCode, {
      Location: withQuery
        ? decodeURIComponent(getFullRouterPath(location, objectToQueryString(ctx.query)))
        : location,
    })
    ctx.res.end()
  }
}
