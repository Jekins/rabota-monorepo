import styled, { StyledProps } from 'styled-components'
import { sv } from '@rabota/utils/helpers/styles/variables'
import { sm } from '@rabota/utils/helpers/styles/mixins'
import {
  EModFontWeight,
  EModShadow,
  EModSpacingH,
  EModSpacingV,
  IModFontWeight,
  IModShadow,
  IModSpacingH,
  IModSpacingV,
} from '@rabota/utils/helpers/styles/mod.types'
import SC from './MenuItem.styles'

const { Block: Item } = SC

const List = styled.ul<StyledProps<IModShadow & IModSpacingV & IModSpacingH>>`
  ${sm.resetList};
  border-radius: ${sv.radius.medium};
  background-color: ${sv.color.white};
  overflow: auto;
  -webkit-overflow-scrolling: auto;
  ${sm.font.medium};
  ${sm.resetLastMb};

  ${sm.mod(EModShadow.true)`
    box-shadow: ${sv.shadow.medium};
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
`

const Block = styled.menu<StyledProps<IModFontWeight>>`
  color: ${sv.color.black};
  font-weight: ${sv.fontWeight.regular};

  ${Object.keys(EModFontWeight).map(
    (item) => sm.mod(EModFontWeight[item])`
      ${Item} {
        font-weight: ${sv.fontWeight[item]};
      }
    `
  )};
`

export default { Block, List }
