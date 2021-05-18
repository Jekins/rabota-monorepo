import {
  IModColorBgText,
  IModRadius,
  IModShadowSize,
  IModSpacing,
  TModSpacing,
} from '@rabota/utils/helpers/styles/mod.types'
import { IPropChildren, IPropCss } from '@rabota/utils/helpers/components/prop.types'

export interface IBoxProps
  extends IPropChildren,
    IModColorBgText,
    IPropBoxSpacing,
    IPropCss,
    IModResetLastSpacing,
    IModShadowSize,
    IModRadius {}

export interface IPropBoxSpacing extends IModSpacing<TModSpacing[]> {}

export enum EModResetLastSpacing {
  true = 'resetLastSpacing=true',
  false = 'resetLastSpacing=false',
}

export interface IModResetLastSpacing {
  resetLastSpacing?: boolean
}
