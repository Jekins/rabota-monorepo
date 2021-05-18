import styled, { StyledProps } from 'styled-components'
import { sm } from '@rabota/utils/helpers/styles/mixins'
import { sv } from '@rabota/utils/helpers/styles/variables'
import {
  EModBordered,
  EModColor,
  EModSpacing,
  EModSpacingH,
  IModBordered,
  IModColor,
  IModSpacing,
  IModSpacingH,
} from '@rabota/utils/helpers/styles/mod.types'
import { EModListViewDots, IModListViewDots } from '../types'

const Block = styled.ul<
  StyledProps<IModColor & IModSpacing & IModSpacingH & IModBordered & IModListViewDots>
>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-content: flex-start;
  flex-wrap: wrap;
  ${sm.resetList};
  ${sm.resetLastMb};

  ${Object.keys(EModColor).map(
    (item) => sm.mod(EModColor[item])`
      > li {
        color: ${sv.color[item]};
      }
    `
  )};

  ${Object.keys(EModSpacing).map(
    (item) => sm.mod(EModSpacing[item])`
      > li {
        margin-bottom: ${sv.spacing[item]};

        ${sm.mod(EModBordered.true)`
          padding-bottom: ${sv.spacing[item]};
        `};
      }
    `
  )};

  ${Object.keys(EModSpacingH).map(
    (item) => sm.mod(EModSpacingH[item])`
      margin-right: -${sv.spacing[item]};

      > li {
        padding-right: ${sv.spacing[item]};
      }
    `
  )};

  ${sm.mod(EModBordered.true)`
    > li {
      border-bottom: 1px solid ${sv.color.gray5};

      &:last-child {
        border-bottom: none;
        padding-bottom: 0;
      }
    }
  `};

  ${sm.mod(EModListViewDots.dots)`
    > li {
      align-items: flex-start;

      &:before {
        content: '•';
        margin-right: ${sv.spacing.xxsmall};
      }
    }
  `};
`

export default { Block }
