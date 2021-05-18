import {
  IModChecked,
  IModFirstLetterUppercase,
} from '@rabota/utils/helpers/styles/mod.types'
import { IPropLabel } from '@rabota/utils/helpers/components/prop.types'

export interface IRadioProps extends IModChecked, IPropLabel, IModFirstLetterUppercase {}
