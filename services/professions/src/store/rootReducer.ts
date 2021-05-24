import { combineReducers } from 'redux'
import { coreSlice } from '@rabota/store/core'
import { testSlice } from '@rabota/store/test'
import { headerSlice } from '../components/Header/store'
import { footerSlice } from '../components/Footer/store'

const reducers = {
  [coreSlice.name]: coreSlice.reducer,

  [headerSlice.name]: headerSlice.reducer,

  [footerSlice.name]: footerSlice.reducer,

  [testSlice.name]: testSlice.reducer,
}

const rootReducer = combineReducers(reducers)

export default rootReducer
