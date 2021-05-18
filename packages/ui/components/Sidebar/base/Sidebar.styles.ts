import styled, { StyledProps } from 'styled-components'
import { sm } from '@rabota/utils/helpers/styles/mixins'
import { sv } from '@rabota/utils/helpers/styles/variables'
import {
  EModOpen,
  EModPosition,
  IModOpen,
  IModPosition,
} from '@rabota/utils/helpers/styles/mod.types'
import { IPropOnClick } from '@rabota/utils/helpers/components/prop.types'
import { TUseToggleFunction } from '@rabota/utils/hooks/useToggle'
import { sidebarWidth } from '../constants'

const Backdrop = styled.div<StyledProps<IPropOnClick<TUseToggleFunction>>>`
  cursor: pointer;
  ${sm.position.fixedFill};
  background-color: ${sv.color.gray60};
  z-index: 101;
`

const Body = styled.div`
  flex-grow: 1;
  overflow-y: auto;
  overscroll-behavior-y: contain;
  -webkit-overflow-scrolling: auto;
`

const Inner = styled.div<StyledProps<IModPosition>>`
  width: ${sidebarWidth.xsAndUp};
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${sv.color.white};
  box-shadow: ${sv.shadow.large};
  position: relative;

  ${sm.breakpoint.uxsOnly`
    width: ${sidebarWidth.xsOnly};
  `};

  ${sm.mod(EModPosition.fixed)`
    ${sm.position.fixedFill};
    z-index: 101;
  `};
`

const Block = styled.div<StyledProps<IModOpen>>`
  display: none;

  ${sm.mod(EModOpen.true)`
    display:block;
  `};
`

export default { Block, Inner, Body, Backdrop }
