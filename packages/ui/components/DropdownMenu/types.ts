import {
  IPropChildren,
  IPropMinWidth,
  IPropWidth,
} from '@rabota/utils/helpers/components/prop.types'
import { IModPosition, IModStartIcon } from '@rabota/utils/helpers/styles/mod.types'

export interface IDropdownMenuProps
  extends IPropChildren,
    IPropWidth,
    IPropMinWidth,
    IModStartIcon,
    IModPosition {}
