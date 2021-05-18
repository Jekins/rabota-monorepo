import { IModOrientation, IModSpacing } from '@rabota/utils/helpers/styles/mod.types'
import { IPropChildren } from '@rabota/utils/helpers/components/prop.types'

export interface IButtonGroupProps
  extends IPropChildren,
    IModSpacing,
    IModOrientation,
    IModButtonGroupType {}

export enum EModButtonGroupType {
  radio = 'type=radio',
}

export interface IModButtonGroupType {
  type?: keyof typeof EModButtonGroupType
}
