/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'
import { EFooterColor } from '../types'
import { sliceName } from './constants'

const initialState = {
  color: 'silver' as keyof typeof EFooterColor,
}

export default createSlice({
  name: sliceName,

  initialState,

  reducers: {
    setColor: (state, { payload }): void => {
      state.color = payload
    },
  },
})
