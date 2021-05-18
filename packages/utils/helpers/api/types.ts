import { AsyncThunk } from '@reduxjs/toolkit'
import { NextPageContext } from 'next'
import { AxiosInstance, AxiosRequestConfig } from 'axios'

export interface IApiThunk {
  (thunkName: string, requestFunction: IRequestFunction): AsyncThunk<any, any, any>
}

interface IRequestFunction {
  (params?: IRequestFunctionProps): Promise<any>
}

interface IRequestFunctionProps {
  ctx?: NextPageContext
  data?: any
}

export interface IApi extends AxiosInstance {
  props?: any
}

export interface IApiConfig extends AxiosRequestConfig, Pick<IApi, 'props'> {}
