import {
  IPropAs,
  IPropChildren,
  IPropCss,
} from '@rabota/utils/helpers/components/prop.types'

export interface IContainerProps extends IPropChildren, IPropAs, IPropCss {}
