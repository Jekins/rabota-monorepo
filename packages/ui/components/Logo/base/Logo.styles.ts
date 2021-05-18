import styled, { StyledProps } from 'styled-components'
import { EModColor, IModColor } from '@rabota/utils/helpers/styles/mod.types'
import { sm } from '@rabota/utils/helpers/styles/mixins'
import { sv } from '@rabota/utils/helpers/styles/variables'

const Block = styled.svg<StyledProps<IModColor>>`
  ${Object.keys(EModColor).map(
    (item) => sm.mod(EModColor[item])`
      color: ${sv.color[item]};
    `
  )};
`

export default { Block }
