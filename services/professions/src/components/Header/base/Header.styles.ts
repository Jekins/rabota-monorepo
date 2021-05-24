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
`

const Block = styled.header`
  position: relative;
  z-index: 10;
  box-shadow: ${sv.shadow.small};
`

export default { Block, MainContainer, Main, LogoLink }
