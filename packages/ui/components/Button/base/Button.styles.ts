import styled, { StyledProps } from 'styled-components'
import { sv } from '@rabota/utils/helpers/styles/variables'
import { mathVars, sm } from '@rabota/utils/helpers/styles/mixins'
import {
  EModBlock,
  EModDisabled,
  EModEndIcon,
  EModProgress,
  EModStartIcon,
  IModBlock,
  IModDisabled,
  IModEndIcon,
  IModProgress,
  IModStartIcon,
} from '@rabota/utils/helpers/styles/mod.types'
import {
  EModButtonColor,
  EModButtonShape,
  EModButtonSize,
  EModButtonView,
  IModButtonColor,
  IModButtonSize,
  IModButtonView,
  IModButtonShape,
  EModButtonIcon,
  IModButtonIcon,
} from '../types'
import { getButtonColor, getButtonColorOutline } from '../mixins'

const Inner = styled.span<StyledProps<IModProgress>>`
  display: flex;
  text-align: center;
  justify-content: center;

  ${sm.mod(EModProgress.true)`
    visibility: hidden;
  `};
`

const ProgressWrapper = styled.div<StyledProps<IModProgress>>`
  width: 32px;
  height: 32px;

  ${sm.mod(EModProgress.true)`
    ${sm.position.absoluteCenter};
  `};
`

const Icon = styled.span<StyledProps<IModStartIcon & IModEndIcon & IModProgress>>`
  display: inline-flex;
  justify-content: center;
  align-items: center;

  ${sm.mod(EModStartIcon.true)`
    margin-right: ${sv.spacing.xxsmall};
  `};

  ${sm.mod(EModEndIcon.true)`
    margin-left: ${sv.spacing.xxsmall};
  `};

  ${sm.mod(EModProgress.true)`
    visibility: hidden;
  `};
`

const Block = styled.div<
  StyledProps<
    IModButtonColor &
      IModButtonSize &
      IModButtonView &
      IModBlock &
      IModButtonShape &
      IModDisabled &
      IModButtonIcon
  >
>`
  cursor: pointer;
  border-radius: ${sv.radius.medium};
  text-decoration: none;
  display: inline-flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  transition: ${sv.duration.fast};
  border: none;
  touch-action: manipulation;
  font-weight: ${sv.fontWeight.semibold};
  position: relative;

  &:hover {
    text-decoration: none;
  }

  ${getButtonColor('transparent', 'transparent', 'black')};

  ${sm.mod(EModButtonColor.blue)`
    ${getButtonColor('blue', 'cobalt', 'white')};

    ${sm.mod(EModButtonView.outline)`
      ${getButtonColorOutline('blue', 'cobalt')};
    `};
  `};

  ${sm.mod(EModButtonColor.orange)`
    ${getButtonColor('orange', 'mandarin', 'white')};

    ${sm.mod(EModButtonView.outline)`
      ${getButtonColorOutline('orange', 'mandarin')};
    `};
  `};

  ${sm.mod(EModButtonColor.gold)`
    ${getButtonColor('gold', 'tangerine', 'black')};

    ${sm.mod(EModButtonView.outline)`
      ${getButtonColorOutline('gold', 'tangerine')};
    `};
  `};

  ${sm.mod(EModButtonColor.coffee)`
    ${getButtonColor('coffee', 'coffee', 'white')};

    ${sm.mod(EModButtonView.outline)`
      ${getButtonColorOutline('coffee', 'coffee')};
    `};
  `};

  ${sm.mod(EModButtonColor.green)`
    ${getButtonColor('green', 'green', 'white')};

    ${sm.mod(EModButtonView.outline)`
      ${getButtonColorOutline('green', 'green')};
    `};
  `};

  ${sm.mod(EModButtonColor.gray25)`
    ${getButtonColor('gray25', 'gray50', 'white')};

    ${sm.mod(EModButtonView.outline)`
      ${getButtonColorOutline('gray25', 'gray50', 'black')};
    `};
  `};

  ${sm.mod(EModDisabled.true)`
    cursor: default;

    ${getButtonColor('gray5', 'gray5', 'gray60')};
  `};

  ${sm.mod(EModButtonSize.small)`
    padding: ${sv.spacing.xxsmall} ${sv.spacing.small};
    font-size: ${sv.fontSize.medium};
    line-height: ${sv.lineHeight.medium};
    height: 32px;
  `};

  ${sm.mod(EModButtonSize.medium)`
    padding: ${sv.spacing.xsmall} ${sv.spacing.medium};
    font-size: ${sv.fontSize.large};
    line-height: ${sv.lineHeight.large};
    height: 40px;
  `};

  ${sm.mod(EModButtonView.link)`
    padding-left: 0;
    padding-right: 0;
    ${sm.linkColor.blue};

    &,
    &:hover {
      background-color: transparent;
      box-shadow: none;
    }

    ${sm.mod(EModButtonColor.black)`
      ${sm.linkColor.black};
    `};

    ${sm.mod(EModButtonColor.green)`
      ${sm.linkColor.green};
    `};
  `};

  ${sm.mod(EModButtonIcon.true)`
    padding-left: 0;
    padding-right: 0;

    ${sm.mod(EModButtonSize.small)`
      padding-top: 10px;
      padding-bottom: 10px;
      width: ${mathVars(sv.lineHeight.medium, '+', mathVars(sv.spacing.xxsmall, '*', 2))};
    `};

    ${sm.mod(EModButtonSize.medium)`
      width: ${mathVars(sv.lineHeight.medium, '+', mathVars(sv.spacing.xsmall, '*', 2))};
    `};
  `};

  ${sm.mod(EModBlock.true)`
    display: flex;
    width: 100%;
    padding-left: 0;
    padding-right: 0;
  `};

  ${sm.mod(EModButtonShape.circle)`
    border-radius: 50%;
  `};
`

export default { Block, Icon, ProgressWrapper, Inner }
