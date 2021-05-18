import { IPropChildren } from '@rabota/utils/helpers/components/prop.types'
import {
  IModActive,
  IModChecked,
  IModEndIcon,
  IModFontWeight,
  IModShadow,
  IModSpacing,
  TModSpacing,
} from '@rabota/utils/helpers/styles/mod.types'

export interface IMenuProps
  extends IPropChildren,
    IModFontWeight,
    IModShadow,
    IModSpacing<TModSpacing[]> {
  /** Максимальная высота меню, после которой начнется внутри скролл пунктов */
  maxHeight?: string
}

export interface IMenuItemProps
  extends IPropChildren,
    IModChecked,
    IModActive,
    IModSpacing,
    IModEndIcon {}
