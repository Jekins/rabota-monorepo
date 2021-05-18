import {
  IPropChildren,
  IPropCss,
  IPropWidth,
} from '@rabota/utils/helpers/components/prop.types'
import {
  IModAlignItems,
  IModInlineScrolling,
  IModJustifyContent,
  IModNowrap,
  IModSpacing,
  IModWithoutSpacingContainer,
} from '@rabota/utils/helpers/styles/mod.types'
import { TSpacing } from '@rabota/utils/helpers/styles/types'
import { StyledComponent } from 'styled-components'

type TColsNumber =
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13
  | 14
  | 15
  | 16
  | 17
  | 18
  | 19
  | 20
  | 21
  | 22
  | 23
  | 24

export interface IGridProps
  extends IPropChildren,
    IModNowrap,
    IModAlignItems,
    IModJustifyContent,
    IModInlineScrolling,
    IModWithoutSpacingContainer,
    IModSpacing<TSpacing[]> {
  /** HTML тег сетки */
  as?: 'main' | 'div' | StyledComponent<any, any, any, never>
}

export interface IGridColProps
  extends IPropChildren,
    IPropWidth,
    IPropCss,
    IModColsCount {
  /** HTML тег колонки */
  as?: 'article' | 'aside' | 'div'
}

export interface IModColsCount {
  /** Количество колонок от `uxs` и больше */
  uxs?: TColsNumber | 'auto'

  /** Количество колонок от `xs` и больше */
  xs?: TColsNumber | 'auto'

  /** Количество колонок от `md` и больше */
  sm?: TColsNumber | 'auto'

  /** Количество колонок от `md` и больше */
  md?: TColsNumber | 'auto'

  /** Количество колонок от `lg` и больше */
  lg?: TColsNumber | 'auto'
}
