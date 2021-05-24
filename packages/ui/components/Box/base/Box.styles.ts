import styled, { StyledProps } from 'styled-components'
import { EColorBgText, sv } from '@rabota/utils/helpers/styles/variables'
import { sm } from '@rabota/utils/helpers/styles/mixins'
import {
  EModColorBgText,
  EModRadius,
  EModShadowSize,
  EModSpacingH,
  EModSpacingV,
  IModColorBgText,
  IModRadius,
  IModShadowSize,
  IModSpacingH,
  IModSpacingV,
} from '@rabota/utils/helpers/styles/mod.types'
import {
  EModBorder,
  EModResetLastSpacing,
  IModBorder,
  IModResetLastSpacing,
} from '../types'

const Block = styled.div<
  StyledProps<
    IModSpacingV &
      IModSpacingH &
      IModColorBgText &
      IModResetLastSpacing &
      IModShadowSize &
      IModRadius &
      IModBorder
  >
>`
  ${sm.mod(EModResetLastSpacing.true)`
    ${sm.resetLastMb};
  `};

  ${Object.keys(EModSpacingV).map(
    (item) => sm.mod(EModSpacingV[item])`
      padding-top: ${sv.spacing[item]};
      padding-bottom: ${sv.spacing[item]};
    `
  )};

  ${Object.keys(EModSpacingH).map(
    (item) => sm.mod(EModSpacingH[item])`
      padding-left: ${sv.spacing[item]};
      padding-right: ${sv.spacing[item]};
    `
  )};

  ${Object.keys(EModColorBgText).map(
    (item) => sm.mod(EModColorBgText[item])`
      background-color: ${sv.color[item]};
      color: ${sv.color[EColorBgText[item]]};
    `
  )};

  ${Object.keys(EModShadowSize).map(
    (item) => sm.mod(EModShadowSize[item])`
      box-shadow: ${sv.shadow[item]};
    `
  )};

  ${Object.keys(EModRadius).map(
    (item) => sm.mod(EModRadius[item])`
      border-radius: ${sv.radius[item]};
    `
  )};

  ${Object.keys(EModBorder).map(
    (item) => sm.mod(EModBorder[item])`
      border: 1px solid ${sv.color[item]};
    `
  )};
`

export default { Block }
