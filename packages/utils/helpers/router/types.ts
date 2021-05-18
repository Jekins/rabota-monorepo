import { NextPageContext } from 'next/dist/next-server/lib/utils'

export interface IRedirect {
  (props: IRedirectProps): void
}

export interface IRedirectByAuthStatus {
  (props: IRedirectProps & { condition?: boolean }): Promise<void>
}

interface IRedirectProps {
  ctx: NextPageContext
  location: string
  statusCode?: number
  withQuery?: boolean
}
