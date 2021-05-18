import styled, { StyledProps } from 'styled-components'
import { sv } from '@rabota/utils/helpers/styles/variables'
import { mathVars, sm } from '@rabota/utils/helpers/styles/mixins'
import {
  EModInlineScrolling,
  EModNowrap,
  EModSpacingH,
  EModSpacingV,
  EModWithoutSpacingContainer,
  IModInlineScrolling,
  IModNowrap,
  IModSpacingH,
  IModSpacingV,
  IModWithoutSpacingContainer,
} from '@rabota/utils/helpers/styles/mod.types'
import SC from './GridCol.styles'

const { Block: Col } = SC

const Block = styled.div<
  StyledProps<
    IModSpacingV &
      IModSpacingH &
      IModInlineScrolling &
      IModWithoutSpacingContainer &
      IModNowrap
  >
>`
  display: flex;
  flex-wrap: wrap;

  ${Object.keys(EModSpacingV).map(
    (item) => sm.mod(EModSpacingV[item])`
      margin-top: -${mathVars(sv.spacing[item], '/', '2')};
      margin-bottom: -${mathVars(sv.spacing[item], '/', '2')};

      ${Col} {
        padding-top: ${mathVars(sv.spacing[item], '/', '2')};
        padding-bottom: ${mathVars(sv.spacing[item], '/', '2')};
      }
    `
  )};

  ${Object.keys(EModSpacingH).map(
    (item) => sm.mod(EModSpacingH[item])`
      margin-left: -${mathVars(sv.spacing[item], '/', '2')};
      margin-right: -${mathVars(sv.spacing[item], '/', '2')};

      ${Col} {
        padding-left: ${mathVars(sv.spacing[item], '/', '2')};
        padding-right: ${mathVars(sv.spacing[item], '/', '2')};
      }
    `
  )};

  ${sm.mod(EModInlineScrolling.true)`
    flex-wrap: nowrap;
    overflow-y: auto;
    -webkit-overflow-scrolling: auto;
    margin-left: 0;
    margin-right: 0;

    ${Col} {
      &:first-child {
        padding-left: 0;
      }

      &:last-child {
        padding-right: 0;
      }
    }
  `};

  ${sm.mod(EModWithoutSpacingContainer.true)`
    ${sm.withoutSpacingContainer};
  `};

  ${sm.mod(EModNowrap.true)`
    flex-wrap: nowrap;
  `};
`

export default { Block }
