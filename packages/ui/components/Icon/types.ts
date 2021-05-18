import { IModColor } from '@rabota/utils/helpers/styles/mod.types'
import { IPropHeight, IPropWidth } from '@rabota/utils/helpers/components/prop.types'

export interface IIconProps extends IPropWidth, IPropHeight, IModColor {
  /** Этот ID генерится автоматически */
  id?: string

  /** Прозрачность иконки */
  opacity?: string
}
