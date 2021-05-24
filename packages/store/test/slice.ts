/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'
import { sliceName } from './constants'
import { ITest, ITestQuestion, ITestState } from './types'
import { extraReducersResponse, responseInitialState } from '../utils/response'
import thunks from './thunks'

export default createSlice({
  name: sliceName,

  initialState: {
    questionsWithReply: [] as ITest['questionsWithReply'],
    currentQuestion: null as ITest['currentQuestion'] | null,
    ...responseInitialState,
  },

  reducers: {},

  extraReducers: (builder) => {
    extraReducersResponse<ITestState[typeof sliceName], ITestQuestion>({
      builder,
      thunk: thunks.start,
      fulfilled: (state, { payload }) => {
        state.currentQuestion = payload
      },
    })

    extraReducersResponse<ITestState[typeof sliceName], ITest>({
      builder,
      thunk: thunks.proceed,
      fulfilled: (state, { payload }) => {
        state.questionsWithReply = payload.questionsWithReply
        state.currentQuestion = payload.currentQuestion
      },
    })

    extraReducersResponse<ITestState[typeof sliceName], ITestQuestion>({
      builder,
      thunk: thunks.reply,
      fulfilled: (state, { payload }) => {
        state.currentQuestion = payload
      },
    })
  },
})
