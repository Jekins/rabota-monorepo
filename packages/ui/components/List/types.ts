import {
  IPropChildren,
  IPropHeight,
  IPropWidth,
} from '@rabota/utils/helpers/components/prop.types'
import {
  IModAlignItems,
  IModBordered,
  IModColor,
  IModEndIcon,
  IModEndIconSpacing,
  IModNowrap,
  IModSpacing,
  IModSpacingH,
  IModStartIcon,
  IModStartIconSpacing,
} from '@rabota/utils/helpers/styles/mod.types'

export interface IListProps
  extends IPropChildren,
    IPropHeight,
    IModColor,
    IModSpacing,
    IModBordered,
    IModListViewDots,
    IModSpacingH {}

export interface IListItemProps
  extends IPropChildren,
    IPropWidth,
    IModAlignItems,
    IModStartIcon,
    IModEndIcon,
    IModNowrap,
    IModSpacingH,
    IModStartIconSpacing,
    IModEndIconSpacing {}

export enum EModListViewDots {
  dots = 'view=dots',
}

export interface IModListViewDots {
  /** Вид списка */
  view?: keyof typeof EModListViewDots
}
