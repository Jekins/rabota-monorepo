import { useCallback, useEffect, useState } from 'react'

export interface IUseToggle {
  (value: boolean, voidIsTrue?: () => void, voidIsFalse?: () => void): [
    boolean,
    TUseToggleFunction
  ]
}

export type TUseToggleFunction = (status?: boolean) => void

/** Хук переключени какого-либо состояния.
 * Наприме: открыт ли дропдаун или закрыт.
 */
export const useToggle: IUseToggle = (value, voidIsTrue, voidIsFalse) => {
  const [isValue, setValue] = useState(value)

  const toggleValue = useCallback(
    (status) => {
      setValue(status !== undefined && typeof status === 'boolean' ? status : !isValue)
    },
    [isValue]
  )

  useEffect(() => {
    if (isValue) {
      if (voidIsTrue) voidIsTrue()
    } else if (voidIsFalse) voidIsFalse()
  }, [isValue, voidIsFalse, voidIsTrue])

  useEffect(() => setValue(value), [value, setValue])

  return [isValue, toggleValue]
}
