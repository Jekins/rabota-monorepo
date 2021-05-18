import styled, { StyledProps } from 'styled-components'
import { sv } from '@rabota/utils/helpers/styles/variables'
import {
  EModEndIconSpacing,
  EModNowrap,
  EModSpacingH,
  EModStartIconSpacing,
  IModEndIconSpacing,
  IModNowrap,
  IModStartIconSpacing,
} from '@rabota/utils/helpers/styles/mod.types'
import { sm } from '@rabota/utils/helpers/styles/mixins'

const StartIconWrapper = styled.div<StyledProps<IModStartIconSpacing>>`
  position: relative;
  top: 4px;
  flex-shrink: 0;

  ${Object.keys(EModStartIconSpacing).map(
    (item) => sm.mod(EModStartIconSpacing[item])`
      margin-right: ${sv.spacing[item]};
    `
  )};
`

const EndIconWrapper = styled.div<StyledProps<IModEndIconSpacing>>`
  position: relative;
  top: 4px;
  flex-shrink: 0;

  ${Object.keys(EModEndIconSpacing).map(
    (item) => sm.mod(EModEndIconSpacing[item])`
      margin-left: ${sv.spacing[item]};
    `
  )};
`

const Inner = styled.div<StyledProps<IModNowrap>>`
  flex-grow: 1;

  ${sm.mod(EModNowrap.true)`
    &,
    a,
    button {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  `};
`

const Block = styled.li`
  display: flex;
  align-items: center;

  ${sm.mod(EModSpacingH.xlarge)`
    &:not(:last-child) {
      margin-right: ${sv.spacing.xlarge};
    }
  `}
`

export default { Block, Inner, EndIconWrapper, StartIconWrapper }
