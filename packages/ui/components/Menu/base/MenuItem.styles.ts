import styled, { StyledProps } from 'styled-components'
import { sm } from '@rabota/utils/helpers/styles/mixins'
import { sv } from '@rabota/utils/helpers/styles/variables'
import {
  EModActive,
  EModChecked,
  EModEndIcon,
  EModSpacing,
  IModActive,
  IModChecked,
  IModEndIcon,
  IModSpacing,
} from '@rabota/utils/helpers/styles/mod.types'

const Icon = styled.div<StyledProps<IModEndIcon>>`
  display: flex;
  pointer-events: none;
  position: absolute;
  top: ${sv.spacing.xsmall};

  ${sm.mod(EModEndIcon.true)`
    right: 0;
  `};
`

const Checked = styled.svg`
  width: 16px;
  height: 16px;
  pointer-events: none;
  color: ${sv.color.blue};
  position: absolute;
  top: ${sv.spacing.xsmall};
  right: 0;
`

export const Block = styled.li<StyledProps<IModActive & IModChecked & IModSpacing>>`
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: baseline;
  ${sm.resetList};

  ${Icon},
  a,
  button {
    color: ${sv.color.black};
  }

  &:hover {
    ${Icon},
    a,
    button {
      color: ${sv.color.cobalt};
    }
  }

  a,
  button {
    text-decoration: none;
    transition: ${sv.duration.fast};
    display: flex;
    font-weight: ${sv.fontWeight.regular};
    padding: 0;
    font-size: ${sv.fontSize.medium};
    width: 100%;

    &,
    * {
      text-align: left;
      justify-content: left;
    }
  }

  &:last-child a,
  &:last-child button {
    margin-bottom: 0;
  }

  ${sm.mod(EModActive.true)`
    ${Icon},
    a,
    button {
      ${sm.linkColor.blue};
    }

    > a,
    > button {
      padding-right: ${sv.spacing.medium};
    }

    &:after {
      content: '';
      display: block;
      position: absolute;
      pointer-events: none;
      top: 50%;
      transform: translateY(-50%);
      right: 5px;
      margin-left: ${sv.spacing.small};
      border-radius: 50%;
      background-color: ${sv.color.blue};
      width: 4px;
      height: 4px;
    }
  `};

  ${sm.mod(EModChecked.true)`
    ${Icon},
    a,
    button {
      ${sm.linkColor.blue};
    }

    > a,
    > button {
      padding-right: ${sv.spacing.medium};
    }
  `};

  ${Object.keys(EModSpacing).map(
    (item) => sm.mod(EModSpacing[item])`
      a,
      button {
        padding-top: ${sv.spacing[item]};
        padding-bottom: ${sv.spacing[item]};
      }
    `
  )};
`

export default { Block, Checked, Icon }
