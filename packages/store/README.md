# `@rabota/store`

Глобальное хранилище Redux. Для работы хранилища используется [Redux Toolkit](https://redux-toolkit.js.org/)

## Использование

Чтобы подключить новый стейт в сервис, необходимо:
- Открыть файл `rootReducer.ts` в папке необходимого сервиса. Например: `services/professions/src/store/rootReducers.ts`
- Подключить редьюсер из слайса созданного стейта:


``` ts
import { coreSlice } from '@rabota/store/core'

const reducers = {
  [coreSlice.name]: coreSlice.reducer,
}
```
