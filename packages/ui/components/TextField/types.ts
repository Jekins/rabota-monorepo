import {
  IPropLabel,
  IPropName,
  IPropValue,
  IPropWidth,
  IPropTabIndex,
} from '@rabota/utils/helpers/components/prop.types'
import { IModActive, IModFocused } from '@rabota/utils/helpers/styles/mod.types'
import { FormEvent, HTMLAttributes } from 'react'

export interface ITextFieldProps
  extends IPropWidth,
    IPropLabel,
    IPropValue<number>,
    IPropTabIndex,
    IModActive,
    IModFocused,
    IPropName,
    Pick<HTMLAttributes<HTMLInputElement>, 'onBlur' | 'onFocus'> {
  /** Патерн инпута. Например, для отображения только цифр: `pattern='[0-9]*'` */
  pattern?: string

  /** Минимальное число, которое можно указать в текстовом поле */
  min?: number

  /** Максимальное число, которое можно указать в текстовом поле */
  max?: number

  /** Автофокус на инпут */
  autofocus?: boolean

  error?: string | undefined

  /** Делает текстовое поле `disabled`, но при этом оставляет стили прежними */
  disabledWithStyles?: boolean

  /** Нативное свойство автокомплита инпута */
  autocomplete: string

  /** Келбэк вызываемый при изменениях в текстовом поле */
  onChange?: (event: FormEvent<HTMLInputElement>, value: string) => void
}
