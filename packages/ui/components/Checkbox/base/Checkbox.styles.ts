import styled, { StyledProps } from 'styled-components'
import { sv } from '@rabota/utils/helpers/styles/variables'
import { mathVars, sm } from '@rabota/utils/helpers/styles/mixins'
import {
  EModDisabled,
  EModFirstLetterUppercase,
  IModDisabled,
  IModFirstLetterUppercase,
} from '@rabota/utils/helpers/styles/mod.types'

const Label = styled.div<StyledProps<IModFirstLetterUppercase>>`
  display: inline-block;
  user-select: none;
  margin-left: ${mathVars(sv.spacing.xsmall, '+', '20px')};
  transition: ${sv.duration.fast};

  &:before {
    content: '';
    display: block;
    position: absolute;
    top: 2px;
    left: 0;
    flex-shrink: 0;
    flex-grow: 0;
    width: 20px;
    height: 20px;
    border-radius: ${sv.radius.medium};
    box-shadow: inset 0 0 0 1px ${sv.color.gray15};
    transition: ${sv.duration.fast};
  }

  ${sm.mod(EModFirstLetterUppercase.true)`
    &::first-letter {
      text-transform: uppercase;
    }
  `};
`

const Input = styled.input`
  display: none;

  &:checked + ${Label}:before {
    background-color: ${sv.color.blue};
    box-shadow: inset 0 0 0 1px ${sv.color.blue};

    ${sm.mod(EModDisabled.true)`
      background-color: ${sv.color.gray5};
      box-shadow: inset 0 0 0 1px ${sv.color.gray5};
    `}
  }
`

const Block = styled.label<StyledProps<IModDisabled>>`
  display: block;
  position: relative;
  cursor: pointer;

  & ${Label} {
    ${sm.mod(EModDisabled.true)`
      color: ${sv.color.gray25};
    `}
  }

  svg {
    position: absolute;
    top: 3px;
    left: 2px;
    width: 18px;
    height: 18px;
    z-index: 1;
    color: ${sv.color.white};

    ${sm.mod(EModDisabled.true)`
      color: ${sv.color.gray15};
    `}

  &:hover {
    ${Input} {
      & + ${Label}:before {
        box-shadow: inset 0 0 0 1px ${sv.color.cobalt};
      }

      &:checked + ${Label}:before {
        background-color: ${sv.color.cobalt};

        ${sm.mod(EModDisabled.true)`
          background-color: ${sv.color.gray5};
        `};
      }
    }

    ${Label} {
      color: ${sv.color.cobalt};
    }
  }
`

export default { Block, Input, Label }
