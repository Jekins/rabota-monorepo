import { headerSlice } from './index'

export interface IHeaderState {
  [key: string]: ReturnType<typeof headerSlice.reducer>
}
