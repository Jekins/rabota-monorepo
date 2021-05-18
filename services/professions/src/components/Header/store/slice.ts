/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'
import { EHeaderColor } from '../types'
import { sliceName } from './constants'

const initialState = {
  color: 'black' as keyof typeof EHeaderColor,
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
