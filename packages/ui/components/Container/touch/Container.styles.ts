import styled from 'styled-components'
import { sv } from '@rabota/utils/helpers/styles/variables'
import { sm } from '@rabota/utils/helpers/styles/mixins'
import SC from '../base/Container.styles'

const { Block: BlockSC } = SC

const Block = styled(BlockSC)`
  ${sm.breakpoint.smAndUp`
    width: ${sv.container.sm};
  `};

  ${sm.breakpoint.smAndDown`
    width: 100%;
  `};
`

export default { ...SC, Block }
