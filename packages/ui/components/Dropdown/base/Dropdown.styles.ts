import styled, { StyledProps } from 'styled-components'
import { sv } from '@rabota/utils/helpers/styles/variables'
import { sm } from '@rabota/utils/helpers/styles/mixins'
import {
  EModBlock,
  EModFontSize,
  EModFontWeight,
  EModOpen,
  EModSpacing,
  IModBlock,
  IModFontSize,
  IModFontWeight,
  IModOpen,
  IModSpacing,
} from '@rabota/utils/helpers/styles/mod.types'
import { TColor } from '@rabota/utils/helpers/styles/types'
import { EModDropdownColor, IModDropdownColor } from '../types'

const Title = styled.span<StyledProps<IModFontSize & IModFontWeight>>`
  ${Object.keys(EModFontSize).map(
    (item) => sm.mod(EModFontSize[item])`
      font-size: ${sv.fontSize[item]};
    `
  )};

  ${Object.keys(EModFontWeight).map(
    (item) => sm.mod(EModFontWeight[item])`
      font-weight: ${sv.fontWeight[item]};
    `
  )};
`

const Icon = styled.span<StyledProps<IModOpen>>`
  margin-left: ${sv.spacing.xxsmall};
  transition: ${sv.duration.fast};
  opacity: 0.6;

  ${sm.mod(EModOpen.true)`
    transform: rotate(180deg);
  `};

  ${Object.keys(EModDropdownColor).map(
    (item) => sm.mod(EModDropdownColor[item])`
      ${sm.arrow.down(4, item as TColor)};
    `
  )};
`

const Link = styled.a<StyledProps<IModBlock & IModSpacing & IModDropdownColor>>`
  display: flex;
  align-items: center;

  ${sm.mod(EModBlock.true)`
    justify-content: space-between;
  `};

  ${Object.keys(EModSpacing).map(
    (item) => sm.mod(EModSpacing[item])`
      padding-top: ${sv.spacing[item]};
      padding-bottom: ${sv.spacing[item]};
    `
  )};

  ${Object.keys(EModDropdownColor).map(
    (item) => sm.mod(EModDropdownColor[item])`
      color: ${sv.color[item]};
    `
  )};

  ${sm.mod(EModDropdownColor.black)`
    &:hover {
      color: ${sv.color.cobalt};

      ${Icon} {
        ${sm.arrow.down(4, sv.color.cobalt as TColor)};
      }
    }
  `};
`

const LinkLeft = styled.div`
  display: flex;
  align-items: center;
`

const LinkRight = styled.div`
  display: flex;
  align-items: center;
`

const LinkStartIcon = styled.div`
  margin-right: ${sv.spacing.xsmall};
  display: flex;
`

const Activator = styled.div`
  cursor: pointer;
`

const Block = styled.div<StyledProps<IModBlock>>`
  position: relative;
  display: inline-block;
  ${sm.font.medium};

  ${sm.mod(EModBlock.true)`
    width: 100%;
    display: block;
  `};
`

export default {
  Block,
  Activator,
  Link,
  LinkLeft,
  LinkRight,
  LinkStartIcon,
  Icon,
  Title,
}
