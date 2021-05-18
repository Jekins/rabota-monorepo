import { sm } from '@rabota/utils/helpers/styles/mixins'
import styled from 'styled-components'
import { sv } from '@rabota/utils/helpers/styles/variables'
import { EHeaderColor, EModHeaderColor } from '../types'

const LogoLink = styled.a`
  display: flex;
  cursor: pointer;
`

const MainContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Main = styled.div`
  backdrop-filter: blur(20px);

  a,
  button {
    &,
    &:hover {
      color: inherit;
    }
  }

  ${Object.keys(EModHeaderColor).map(
    (item) => sm.mod(EModHeaderColor[item])`
      background-color: ${sv.color[EHeaderColor[item]]};
      color: ${sv.color[item]};
    `
  )};

  ${sm.mod(EModHeaderColor.black)`
    background-color: transparent;
    color: ${sv.color[EHeaderColor.black]};

    ${MainContainer} {
      position: relative;

      &:after {
        content: '';
        display: block;
        position: absolute;
        bottom: 0;
        left: ${sv.spacing.small};
        right: ${sv.spacing.small};
        height: 1px;
        background-color: ${sv.color.gray9};
      }
    }
  `};
`

const Block = styled.header`
  position: relative;
  z-index: 10;
`

export default { Block, MainContainer, Main, LogoLink }
