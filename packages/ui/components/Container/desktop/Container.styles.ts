import styled from 'styled-components'
import { sv } from '@rabota/utils/helpers/styles/variables'
import { sm } from '@rabota/utils/helpers/styles/mixins'
import SC from '../base/Container.styles'

const { Block: BlockSC } = SC

const Block = styled(BlockSC)`
  ${sm.breakpoint.lgAndUp`
    width: ${sv.container.lg};
  `};

  ${sm.breakpoint.lgAndDown`
    width: ${sv.container.md};
  `};
`

export default { ...SC, Block }
