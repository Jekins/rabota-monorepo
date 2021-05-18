import rootReducer from './rootReducer'
import { makeStore } from './store'

export type TRootState = ReturnType<typeof rootReducer>

export type AppStore = ReturnType<typeof makeStore>
export type AppState = ReturnType<AppStore['getState']>
