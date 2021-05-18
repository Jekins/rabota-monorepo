import { DocumentContext } from 'next/document'
import { NextPageContext } from 'next/dist/next-server/lib/utils'
import { isLocalFunc } from '../helpers/core'

/** Если пользователь пришел на урл без поддомена, то редиректим на www */
const nonWWWRedirect = (
  res: DocumentContext['res'],
  host: string,
  path: string
): boolean => {
  const hostSplit = host.split('.')
  const hasSubDomain = hostSplit.length > 2 && hostSplit[0] !== 'next'

  if (!res || !res.writeHead || hasSubDomain || isLocalFunc(host)) return false

  res.writeHead(301, {
    Location: `//www.${host}${path}`,
  })
  res.end()

  return true
}

const redirectMiddleware = (
  ctx: DocumentContext | NextPageContext<any, any>,
  basePath = ''
): Promise<boolean> => {
  return new Promise((resolve) => {
    const { req, res } = ctx

    const host = req?.headers.host || ''
    const path = `${basePath}${req?.url}`

    if (nonWWWRedirect(res, host, path)) return

    /** Когда все редиректы будут закончены, разрешаем выполнение остальной логики приложения */
    resolve(true)
  })
}

export default redirectMiddleware
