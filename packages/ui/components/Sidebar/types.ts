import {
  IPropChildren,
  IPropOnClickClose,
} from '@rabota/utils/helpers/components/prop.types'
import {
  IModBackdrop,
  IModOpen,
  IModPosition,
} from '@rabota/utils/helpers/styles/mod.types'
import { TUseToggleFunction } from '@rabota/utils/hooks/useToggle'

export interface ISidebarProps
  extends IPropChildren,
    IPropOnClickClose<TUseToggleFunction>,
    IModPosition,
    IModOpen,
    IModBackdrop {}
