import {
  IPropAs,
  IPropChildren,
  IPropHtml,
  IPropTitle,
} from '@rabota/utils/helpers/components/prop.types'
import {
  IModColor,
  IModFirstLetterUppercase,
  IModFontSize,
  IModFontWeight,
  IModLineHeight,
  IModNowrap,
  IModTextAlign,
  IModTextDecoration,
  IModUppercase,
  IModWordBreak,
} from '@rabota/utils/helpers/styles/mod.types'

export interface ITextProps
  extends IPropChildren,
    IPropHtml,
    IPropAs,
    IModFirstLetterUppercase,
    IModFontWeight,
    IModFontSize,
    IModLineHeight,
    IModUppercase,
    IModTextAlign,
    IModColor,
    IModNowrap,
    IModWordBreak,
    IModTextDecoration,
    IPropTitle {}
