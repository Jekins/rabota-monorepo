import styled, { StyledProps } from 'styled-components'
import { modColSizes } from '../mixins'
import { IModColsCount } from '../types'

const Block = styled.div<StyledProps<IModColsCount>>`
  flex-grow: 0;
  flex-shrink: 0;
  width: 100%;

  ${modColSizes};
`

export default { Block }
