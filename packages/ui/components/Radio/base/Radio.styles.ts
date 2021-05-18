import styled, { StyledProps } from 'styled-components'
import { sv } from '@rabota/utils/helpers/styles/variables'
import { mathVars, sm } from '@rabota/utils/helpers/styles/mixins'
import {
  EModFirstLetterUppercase,
  IModFirstLetterUppercase,
} from '@rabota/utils/helpers/styles/mod.types'

const CheckIcon = styled.div`
  width: 8px;
  height: 8px;
  background-color: ${sv.color.white};
  border-radius: 50%;
  position: absolute;
  top: 8px;
  left: 6px;
  z-index: 1;
`

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
    width: 18px;
    height: 18px;
    border-radius: 50%;
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
  }
`

const Block = styled.label`
  display: block;
  cursor: pointer;
  position: relative;

  &:hover {
    ${Input} {
      & + ${Label}:before {
        box-shadow: inset 0 0 0 1px ${sv.color.cobalt};
      }

      &:checked + ${Label}:before {
        background-color: ${sv.color.cobalt};
      }
    }

    ${Label} {
      color: ${sv.color.cobalt};
    }
  }
`

export default { Block, Input, Label, CheckIcon }
