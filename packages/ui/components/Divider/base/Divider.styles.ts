import styled, { StyledProps } from 'styled-components'
import { sv } from '@rabota/utils/helpers/styles/variables'
import { EModSpacing, IModSpacing } from '@rabota/utils/helpers/styles/mod.types'
import { sm } from '@rabota/utils/helpers/styles/mixins'

const Block = styled.div<StyledProps<IModSpacing>>`
  background-color: ${sv.color.gray9};
  height: 1px;

  ${Object.keys(EModSpacing).map(
    (item) => sm.mod(EModSpacing[item])`
      margin-top: ${sv.spacing[item]};
      margin-bottom: ${sv.spacing[item]};
    `
  )};
`

export default { Block }
