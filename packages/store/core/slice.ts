/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'
import { sliceName } from './constants'

const initialState = {
  isTouch: false,
}

export default createSlice({
  name: sliceName,

  initialState,

  reducers: {
    toggleTouch: (state, { payload }): void => {
      state.isTouch = payload
    },
  },
})
