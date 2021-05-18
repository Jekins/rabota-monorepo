import styled, { StyledProps } from 'styled-components'
import { sv } from '@rabota/utils/helpers/styles/variables'
import {
  EModOrientation,
  EModSpacing,
  IModOrientation,
  IModSpacing,
} from '@rabota/utils/helpers/styles/mod.types'
import { mathVars, sm } from '@rabota/utils/helpers/styles/mixins'
import { EModButtonGroupType, IModButtonGroupType } from '../types'

const Block = styled.div<
  StyledProps<IModSpacing & IModButtonGroupType & IModOrientation>
>`
  display: flex;

  ${Object.keys(EModSpacing).map(
    (item) => sm.mod(EModSpacing[item])`
      margin: -${mathVars(sv.spacing[item], '/', 2)};

      > * {
        margin: ${mathVars(sv.spacing[item], '/', 2)};
      }
    `
  )};

  ${sm.mod(EModButtonGroupType.radio)`
    > *:not(:first-child) {
      border-bottom-left-radius: 0;
      border-top-left-radius: 0;
    }

    > *:not(:last-child) {
      border-bottom-right-radius: 0;
      border-top-right-radius: 0;
    }
  `};

  ${sm.mod(EModOrientation.vertical)`
    flex-direction: column;
  `}
`

export default { Block }
