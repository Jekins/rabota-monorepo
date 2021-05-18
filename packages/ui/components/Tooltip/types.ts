import {
  IPropChildren,
  IPropCss,
  IPropWidth,
} from '@rabota/utils/helpers/components/prop.types'

export interface ITooltipProps
  extends IPropChildren,
    IModTooltipPosition,
    IPropWidth,
    IPropCss {
  /** Содержимое тултипа. Может быть компонент или просто текст */
  content: JSX.Element | string
}

export enum EModTooltipPosition {
  'top-left' = 'position=top-left',
  'top-center' = 'position=top-center',
  'top-right' = 'position=top-right',
  'bottom-left' = 'position=bottom-left',
  'bottom-center' = 'position=bottom-center',
  'bottom-right' = 'position=bottom-right',
  'left-top' = 'position=left-top',
  'left-center' = 'position=left-center',
  'left-bottom' = 'position=left-bottom',
  'right-top' = 'position=right-top',
  'right-center' = 'position=right-center',
  'right-bottom' = 'position=right-bottom',
}

export interface IModTooltipPosition {
  /** Расположение */
  position: keyof typeof EModTooltipPosition
}
