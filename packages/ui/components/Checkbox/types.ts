import {
  IModChecked,
  IModDisabled,
  IModFirstLetterUppercase,
} from '@rabota/utils/helpers/styles/mod.types'
import { IPropLabel } from '@rabota/utils/helpers/components/prop.types'

export interface ICheckboxProps
  extends IPropLabel,
    IModFirstLetterUppercase,
    IModDisabled,
    IModChecked {}
