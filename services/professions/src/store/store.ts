import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { createWrapper, HYDRATE } from 'next-redux-wrapper'
import { isDev } from '@rabota/utils/helpers/core'
import rootReducer from './rootReducer'
import { AppStore, TRootState } from './types'

const reducer = (state, action): TRootState => {
  if (action.type === HYDRATE) {
    return {
      ...state,
      ...action.payload,
    }
  }

  return rootReducer(state, action)
}

export const makeStore = () =>
  configureStore({
    reducer,
    middleware: [...getDefaultMiddleware()],
    devTools: isDev,
  })

export const wrapper = createWrapper<AppStore>(makeStore)
