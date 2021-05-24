import styled from 'styled-components'
import { sv } from '@rabota/utils/helpers/styles/variables'
import SC from '../base/Header.styles'
import { headerHeight } from '../constants'

const { Block: BlockSC, MainContainer: MainContainerSC } = SC

const MainContainer = styled(MainContainerSC)`
  padding-top: ${sv.spacing.xxsmall};
  padding-bottom: ${sv.spacing.xxsmall};
`

const Block = styled(BlockSC)`
  height: ${headerHeight.desktop}px;
`

export default { ...SC, Block, MainContainer }
