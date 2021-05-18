import { ISerializedError } from '@rabota/utils/helpers/core/types'
/* eslint-disable no-param-reassign */
import { ELoading, IResponseExtraReducers } from './types'

/** Стейт для запросов к апи, подключаемый в слайс */
export const responseInitialState = {
  loading: ELoading.idle,
  currentRequestId: null,
  error: null as ISerializedError | null,
}

/** Метод позволяет подключить в слайс кейсы необходимые для обработки запросов к апи */
export const extraReducersResponse: IResponseExtraReducers = ({
  builder,
  thunk,
  pending,
  rejected,
  fulfilled,
  options = {
    withoutCondition: false,
  },
}) => {
  builder.addCase(thunk[ELoading.pending], (state, action) => {
    state.loading = ELoading.pending
    state.currentRequestId = action.meta.requestId
    state.error = null

    if (pending) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      pending(state, action)
    }
  })

  builder.addCase(thunk[ELoading.rejected], (state, action) => {
    state.loading = ELoading.rejected
    state.error = action.payload as ISerializedError

    if (rejected) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      rejected(state, action)
    }
  })

  builder.addCase(thunk[ELoading.fulfilled], (state, action) => {
    const { requestId } = action.meta

    if (
      options.withoutCondition ||
      (state.loading === ELoading.pending && state.currentRequestId === requestId)
    ) {
      state.loading = ELoading.fulfilled
      state.currentRequestId = null
      state.error = null

      if (fulfilled) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        fulfilled(state, action)
      }
    }
  })
}
