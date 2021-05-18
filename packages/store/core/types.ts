import { coreSlice } from './index'

export interface ICoreState {
  [key: string]: ReturnType<typeof coreSlice.reducer>
}
