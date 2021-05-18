import styled, { StyledProps } from 'styled-components'
import { EModSize, IModSize } from '@rabota/utils/helpers/styles/mod.types'
import { sm } from '@rabota/utils/helpers/styles/mixins'
import { sv } from '@rabota/utils/helpers/styles/variables'

const NoPhoto = styled.div<StyledProps<IModSize>>`
  border-radius: 50%;
  width: 100%;
  height: 100%;
  background-color: ${sv.color.gray5};
  display: flex;
  align-items: center;
  justify-content: center;

  ${sm.mod(EModSize.xxlarge)`
    svg {
      width: 16px;
      height: 17px;
    }
  `};

  ${sm.mod(EModSize.small)`
    svg {
      width: 12px;
      height: 12px;
    }
  `};
`

const Photo = styled.img`
  border-radius: 50%;
  display: block;
  width: 100%;
  height: 100%;
`

const Block = styled.div<StyledProps<IModSize>>`
  flex-shrink: 0;

  ${sm.mod(EModSize.xxlarge)`
    width: 48px;
    height: 48px;
  `};

  ${sm.mod(EModSize.small)`
    width: 24px;
    height: 24px;
  `};

  ${sm.mod(EModSize.uxxlarge)`
    width: 92px;
    height: 92px;
  `}
`

export default { Block, Photo, NoPhoto }
