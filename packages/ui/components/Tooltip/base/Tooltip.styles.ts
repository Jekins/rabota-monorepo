import styled, { keyframes, StyledProps } from 'styled-components'
import { sv } from '@rabota/utils/helpers/styles/variables'
import { sm } from '@rabota/utils/helpers/styles/mixins'
import { EModTooltipPosition, IModTooltipPosition } from '../types'

const show = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

const Wrapper = styled.div<StyledProps<IModTooltipPosition>>`
  position: absolute;
  z-index: 100;
  display: none;
  animation: ${show} ${sv.duration.fast};

  ${sm.mod(EModTooltipPosition['top-left'])`
    bottom: 100%;
    left: 0;
    padding-bottom: ${sv.spacing.xxsmall};
  `};

  ${sm.mod(EModTooltipPosition['top-center'])`
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);
    padding-bottom: ${sv.spacing.xxsmall};
  `};

  ${sm.mod(EModTooltipPosition['top-right'])`
    bottom: 100%;
    right: 0;
    padding-bottom: ${sv.spacing.xxsmall};
  `};

  ${sm.mod(EModTooltipPosition['bottom-left'])`
    top: 100%;
    left: 0;
    padding-top: ${sv.spacing.xxsmall};
  `};

  ${sm.mod(EModTooltipPosition['bottom-center'])`
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    padding-top: ${sv.spacing.xxsmall};
  `};

  ${sm.mod(EModTooltipPosition['bottom-right'])`
    top: 100%;
    right: 0;
    padding-top: ${sv.spacing.xxsmall};
  `};

  ${sm.mod(EModTooltipPosition['left-top'])`
    bottom: 100%;
    right: 100%;
    padding-bottom: ${sv.spacing.xxsmall};
    padding-right: ${sv.spacing.xxsmall};
  `};

  ${sm.mod(EModTooltipPosition['left-center'])`
    top: 50%;
    right: 100%;
    transform: translateY(-50%);
    padding-right: ${sv.spacing.xxsmall};
  `};

  ${sm.mod(EModTooltipPosition['left-bottom'])`
    top: 100%;
    right: 100%;
    padding-top: ${sv.spacing.xxsmall};
    padding-right: ${sv.spacing.xxsmall};
  `};

  ${sm.mod(EModTooltipPosition['right-top'])`
    bottom: 100%;
    left: 100%;
    padding-bottom: ${sv.spacing.xxsmall};
    padding-left: ${sv.spacing.xxsmall};
  `};

  ${sm.mod(EModTooltipPosition['right-center'])`
    top: 50%;
    left: 100%;
    transform: translateY(-50%);
    padding-left: ${sv.spacing.xxsmall};
  `};

  ${sm.mod(EModTooltipPosition['right-bottom'])`
    top: 100%;
    left: 100%;
    padding-top: ${sv.spacing.xxsmall};
    padding-left: ${sv.spacing.xxsmall};
  `};
`

const Content = styled.div`
  background-color: ${sv.color.white};
  box-shadow: ${sv.shadow.medium};
  border-radius: ${sv.radius.medium};
  padding: ${sv.spacing.xsmall};
`

const Block = styled.div`
  position: relative;
  ${sm.font.medium};

  &:hover {
    ${Wrapper} {
      display: block;
    }
  }
`

export default { Block, Wrapper, Content }
