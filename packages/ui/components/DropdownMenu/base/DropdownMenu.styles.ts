import styled, { keyframes, StyledProps } from 'styled-components'
import {
  EModNowrap,
  EModPosition,
  EModStartIcon,
  IModNowrap,
  IModPosition,
  IModStartIcon,
} from '@rabota/utils/helpers/styles/mod.types'
import { mathVars, sm } from '@rabota/utils/helpers/styles/mixins'
import { sv } from '@rabota/utils/helpers/styles/variables'

const open = keyframes`
  0% {
    transform: translateY(-8px);
  }
  100% {
    transform: translateY(0);
  }
`

const Block = styled.div<StyledProps<IModPosition & IModStartIcon & IModNowrap>>`
  ${sm.mod(EModPosition.absolute)`
    position: absolute;
    top: -${sv.spacing.small};
    left: -${sv.spacing.xsmall};
    z-index: 98;
    animation: ${open} ${sv.duration.fast} forwards;
  `};

  ${sm.mod(EModPosition.static)`
    ${sm.mod(EModStartIcon.true)`
      padding-left: ${mathVars(sv.spacing.large, '+', sv.spacing.xsmall)};
    `};
  `};

  ${sm.mod(EModNowrap.true)`
    li {
      white-space: nowrap;
    }
  `};
`

export default { Block }
