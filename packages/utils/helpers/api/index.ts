import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { getParsedCookies, isDev } from '../core'
import { IApi, IApiConfig, IApiThunk } from './types'
import { xProfileName } from '../../hocs/withProfile'

/** Подключение адаптеров axios
 * Подробнее здесь: https://github.com/kuitos/axios-extensions
 */
const { adapter } = axios.defaults

/** Настройки axios для dev и prod версии */
const devProdOptions =
  process.env.NODE_ENV === 'development'
    ? {
        baseURL: `http://prof-api.next.ucheba.ru/`,
        auth: {
          username: 'avka',
          password: '749343',
        },
      }
    : {
        baseURL: `https://prof-api.ucheba.ru/`,
      }

/** Создание инстанса api с первичными настройками
 * Подробнее: https://github.com/axios/axios#creating-an-instance
 */
export const api: IApi = axios.create({
  headers: {
    'Cache-Control': 'no-cache',
  },
  adapter,
  ...devProdOptions,
})

/** Перехватывание запросов в api
 * Подробнее: https://github.com/axios/axios#interceptors
 */
api.interceptors.request.use(
  (config: IApiConfig): IApiConfig | Promise<IApiConfig> => {
    // Делать что-то прежде чем запрос будет отправлен

    const { props } = config

    if (props) {
      const xProfileCookie = props.cookie[xProfileName]

      if (xProfileCookie) {
        // eslint-disable-next-line no-param-reassign,camelcase
        config.headers['X-Profile-Id'] = xProfileCookie
      }
    }

    if (isDev) {
      console.log('Запрос отправлен: ', config)
    }

    return config
  },
  (error) => {
    // Делать что-то если запрос пришел с ошибкой
    return Promise.reject(error)
  }
)

const apiThunk: IApiThunk = (thunkName, requestFunction) => {
  return createAsyncThunk(thunkName, async ({ ctx, data }, thunkApi) => {
    try {
      const parsedCookie = getParsedCookies(ctx?.req)
      const params = {
        ctx,
        data,
        props: {
          cookie: {
            ...parsedCookie,
          },
        },
      }

      return await requestFunction(params)
    } catch (err) {
      console.error('catch error', err)

      if (err.response) {
        return thunkApi.rejectWithValue({
          name: err.response.statusText,
          message: err.response.data.message,
          debugMessage: err.response.data.debugMessage,
          formErrors: err.response.data.formErrors,
          code: err.response.status,
        })
      }

      return {}
    }
  })
}

export default apiThunk
