/** Аналог Record: https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeystype
 * Только записывает опционтальные значения, которые могут быть undefined
 */
export type TRecordOptional<K extends keyof any, T> = {
  [P in K]?: T
}

export interface ISerializedError {
  name?: string
  message?: string
  debugMessage?: string
  formErrors?: IFormErrors[]
  stack?: string
  code: number
}

interface IFormErrors {
  error: string
  field: string
  message: string
}
