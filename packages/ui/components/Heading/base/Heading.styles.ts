import styled, { StyledProps } from 'styled-components'
import { ESpacing, sv } from '@rabota/utils/helpers/styles/variables'
import { sm } from '@rabota/utils/helpers/styles/mixins'
import { EBreakpointRanges } from '@rabota/utils/helpers/styles/types'
import {
  EModColor,
  EModSpacing,
  EModTextAlign,
  IModColor,
  IModSpacing,
  IModTextAlign,
} from '@rabota/utils/helpers/styles/mod.types'
import {
  EHeadingTags,
  IModHeadingIconBreak,
  IModHeadingIconSize,
  IModHeadingIconSpacing,
} from '../types'

const H1 = styled.h1`
  margin-bottom: ${sv.spacing.xsmall};
  ${sm.font.h1};

  ${sm.device.touch`
    // TODO: это костыль, нужно придумать нормально решение
    font-size: 36px;
    line-height: 1.22;
  `};
`

const H2 = styled.h2`
  margin-bottom: ${sv.spacing.small};
  ${sm.font.h2};

  ${H1} + & {
    margin-top: -${sv.spacing.xxsmall};
  }
`

const H3 = styled.h3`
  margin-bottom: ${sv.spacing.small};
  ${sm.font.h3};

  ${H1} + & {
    margin-top: -${sv.spacing.xxsmall};
  }
`

const H4 = styled.h4`
  margin-bottom: ${sv.spacing.xxsmall};
  ${sm.font.h4};
`

const H5 = styled.h5`
  margin-bottom: ${sv.spacing.xxsmall};
  ${sm.font.h5};
`

const H6 = styled.h6`
  margin-bottom: ${sv.spacing.xxsmall};
  ${sm.font.h6};
`

const Icon = styled.div<StyledProps<IModHeadingIconSpacing & IModHeadingIconSize>>`
  flex-shrink: 0;
  display: flex;
  align-items: center;

  ${Object.keys(ESpacing).map(
    (item) => sm.mod(`iconSpacing=${item}`)`
      margin-right: ${sv.spacing[item]};
    `
  )};

  ${Object.keys(EHeadingTags).map(
    (item) => sm.mod(`size=${item}`)`
      > * {
        width: ${sv.fontSize[item]};
        height: ${sv.fontSize[item]};
      }
    `
  )};
`

const Block = styled.div<
  StyledProps<IModSpacing<'null'> & IModColor & IModTextAlign & IModHeadingIconBreak>
>`
  > * {
    display: flex;
    align-items: center;
  }

  ${sm.mod('spacing=null')`
    > * {
      margin-bottom: 0 !important;
    }
  `};

  ${Object.keys(EModSpacing).map(
    (item) => sm.mod(EModSpacing[item])`
      > * {
        margin-bottom: ${sv.spacing[item]};
      }
    `
  )};

  ${Object.keys(EModColor).map(
    (item) => sm.mod(EModColor[item])`
      &,
      ${Icon} {
        color: ${sv.color[item]};
      }
    `
  )};

  ${Object.keys(EModTextAlign).map(
    (item) => sm.mod(EModTextAlign[item])`
      > * {
        justify-content: ${
          // eslint-disable-next-line no-nested-ternary
          item === 'left' ? 'flex-start' : item === 'right' ? 'flex-end' : item
        };
        text-align: ${item};
      }
    `
  )};

  ${Object.keys(EBreakpointRanges).map(
    (item) => sm.mod(`iconBreak=${item}`)`
      > * {
        ${sm.breakpoint[item]`
          display: block;

          svg {
            margin-bottom: ${sv.spacing.xsmall};
          }
        `};
      }
    `
  )};

  a {
    ${sm.linkColor.black};
  }
`

export default { Block, Icon, H1, H2, H3, H4, H5, H6 }
