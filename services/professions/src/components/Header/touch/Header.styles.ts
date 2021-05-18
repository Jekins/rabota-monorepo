import styled from 'styled-components'
import { Button } from '@rabota/ui/components/Button/touch'
import { sv } from '@rabota/utils/helpers/styles/variables'
import SC from '../base/Header.styles'
import { headerHeight } from '../constants'

const { Block: BlockSC, MainContainer: MainContainerSC } = SC

const ButtonIcon = styled(Button)`
  padding: 0;

  svg {
    color: inherit;
  }
`

const MainContainer = styled(MainContainerSC)`
  padding: ${sv.spacing.xsmall} ${sv.spacing.xxsmall};
`

const Block = styled(BlockSC)`
  height: ${headerHeight.touch}px;
`

export default { ...SC, Block, MainContainer, ButtonIcon }
