import { ILogoProps } from '@rabota/ui/components/Logo/types'
import { IModHeaderColor } from './types'

export const getLogoColor = (color: IModHeaderColor['color']): ILogoProps['color'] => {
  return color === 'white' ? 'blue' : color
}
