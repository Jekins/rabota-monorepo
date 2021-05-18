import { footerSlice } from './index'

export interface IFooterState {
  [key: string]: ReturnType<typeof footerSlice.reducer>
}
