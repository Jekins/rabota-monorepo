import styled from 'styled-components'
import { sm } from '@rabota/utils/helpers/styles/mixins'
import { sv } from '@rabota/utils/helpers/styles/variables'
import SC from '../base/Header.styles'
import { headerHeight } from '../constants'

const { Block: BlockSC, MainContainer: MainContainerSC } = SC

const AuthLink = styled.a`
  ${sm.linkColor.inherit};
`

const MainLineLeft = styled.div`
  display: flex;
  align-items: center;

  > * {
    margin-right: ${sv.spacing.xsmall};
  }
`

const MainLineRight = styled.div`
  display: flex;
  align-items: center;
`

const MainContainer = styled(MainContainerSC)`
  padding-top: ${sv.spacing.medium};
  padding-bottom: ${sv.spacing.medium};
`

const Block = styled(BlockSC)`
  height: ${headerHeight.desktop}px;
`

export default { ...SC, Block, MainContainer, AuthLink, MainLineLeft, MainLineRight }
