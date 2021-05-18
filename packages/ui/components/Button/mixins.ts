import { css, FlattenSimpleInterpolation } from 'styled-components'
import { sv } from '@rabota/utils/helpers/styles/variables'
import { EModButtonColor, TButtonHoverColor, TButtonTextColor } from './types'

export const getButtonColor = (
  bgColor: keyof typeof EModButtonColor | 'gray5' | 'transparent',
  bgHover: TButtonHoverColor | 'gray5' | 'gray50' | 'transparent',
  textColor: TButtonTextColor | 'gray60'
): FlattenSimpleInterpolation => {
  return css`
    background-color: ${sv.color[bgColor]};
    color: ${sv.color[textColor]};

    &:hover {
      background-color: ${sv.color[bgHover]};
      color: ${sv.color[textColor]};
    }
  `
}

export const getButtonColorOutline = (
  defaultColor: keyof typeof EModButtonColor,
  hoverColor: TButtonHoverColor | 'gray50',
  textColor?: TButtonTextColor
): FlattenSimpleInterpolation => {
  return css`
    background-color: transparent;
    box-shadow: inset 0 0 0 1px ${sv.color[defaultColor]};
    color: ${textColor || sv.color[defaultColor]};

    &:hover {
      background-color: transparent;
      box-shadow: inset 0 0 0 1px ${sv.color[hoverColor]};
      color: ${textColor || sv.color[hoverColor]};
    }
  `
}
