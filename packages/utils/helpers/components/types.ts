import {
  AppInitialProps,
  NextComponentType,
  NextPageContext,
} from 'next/dist/next-server/lib/utils'
import { Router } from 'next/router'
import { NextPage } from 'next'
import { ISerializedError } from '../core/types'
import { IPropIsTouch } from './prop.types'

export type TAppProps<T = never> = AppInitialProps & {
  Component: NextComponentType<NextPageContext, any> & T
  router: Router
}

export type TPage<T = never, K = never> = NextPage<T> & K

export interface IObjectDevicesComponents {
  touch: any
  desktop: any
}

export interface IPageProps<T = never, K = never> extends IPropIsTouch {
  content: (IPropPageSeo & T) | K
  error?: ISerializedError | null
}

export type TReturnPageContent<T extends Pick<T, 'content' | 'error'>> = Promise<
  Pick<T, 'content' | 'error'>
>

export interface IDeviceComponent {
  <T extends IPropIsTouch>(
    props: T,
    devicesComponents: IObjectDevicesComponents
  ): JSX.Element
}

export interface IPropPageSeo {
  seo: {
    meta: {
      title: string
      description: string
    }
    footer?: {
      title: string
      description: string
    }
  }
}

export interface IConditionalWrapper {
  condition: boolean
  wrapper: (children: JSX.Element) => JSX.Element
  children: JSX.Element
}
