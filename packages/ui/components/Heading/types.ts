import { TBreakpointRanges, TSpacing } from '@rabota/utils/helpers/styles/types'
import { IPropHref, IPropHtml } from '@rabota/utils/helpers/components/prop.types'
import {
  IModColor,
  IModSpacing,
  IModStartIcon,
  IModTextAlign,
  IModWordBreak,
} from '@rabota/utils/helpers/styles/mod.types'

export enum EHeadingTags {
  h1 = 'h1',
  h2 = 'h2',
  h3 = 'h3',
  h4 = 'h4',
  h5 = 'h5',
  h6 = 'h6',
}

export interface IHeadingProps
  extends IModStartIcon,
    IModColor,
    IModTextAlign,
    IModSpacing<'null'>,
    IModHeadingIconBreak,
    IModHeadingIconSpacing,
    IPropHtml,
    IModWordBreak,
    IPropHref {
  h1?: string
  h2?: string
  h3?: string
  h4?: string
  h5?: string
  h6?: string
  id?: string
  /** Если необходимо зарендерить закоголовок другим тегом */
  as?: keyof typeof EHeadingTags | 'div'
}

export interface IModHeadingIconBreak {
  /** На каком бреикпоинте иконка перенесется на новую строку */
  iconBreak?: TBreakpointRanges
}

export interface IModHeadingIconSpacing {
  /** Отступ от иконки */
  iconSpacing?: TSpacing
}

export interface IModHeadingIconSize {
  /** Размер иконки относительна размера заголовка */
  size: keyof typeof EHeadingTags
}
