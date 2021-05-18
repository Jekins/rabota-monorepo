import styled, { StyledProps } from 'styled-components'
import { sv } from '@rabota/utils/helpers/styles/variables'
import { sm } from '@rabota/utils/helpers/styles/mixins'
import {
  EModColor,
  EModFirstLetterUppercase,
  EModFontSize,
  EModFontWeight,
  EModLineHeight,
  EModNowrap,
  EModTextAlign,
  EModTextDecoration,
  EModUppercase,
  EModWordBreak,
  IModColor,
  IModFirstLetterUppercase,
  IModFontSize,
  IModFontWeight,
  IModLineHeight,
  IModNowrap,
  IModTextAlign,
  IModTextDecoration,
  IModUppercase,
  IModWordBreak,
} from '@rabota/utils/helpers/styles/mod.types'

const Block = styled.div<
  StyledProps<
    IModFontWeight &
      IModFontSize &
      IModLineHeight &
      IModTextAlign &
      IModColor &
      IModUppercase &
      IModNowrap &
      IModTextDecoration &
      IModFirstLetterUppercase &
      IModWordBreak
  >
>`
  ${Object.keys(EModWordBreak).map(
    (item) => sm.mod(EModWordBreak[item])`
        word-break: ${item};
      `
  )};

  ${Object.keys(EModFontWeight).map(
    (item) => sm.mod(EModFontWeight[item])`
      font-weight: ${sv.fontWeight[item]};
    `
  )};

  ${Object.keys(EModFontSize).map(
    (item) => sm.mod(EModFontSize[item])`
      font-size: ${sv.fontSize[item]};
    `
  )};

  ${Object.keys(EModLineHeight).map(
    (item) => sm.mod(EModLineHeight[item])`
      line-height: ${sv.lineHeight[item]};
    `
  )};

  ${Object.keys(EModTextAlign).map(
    (item) => sm.mod(EModTextAlign[item])`
      text-align: ${item};
    `
  )};

  ${Object.keys(EModColor).map(
    (item) => sm.mod(EModColor[item])`
      color: ${sv.color[item]};
    `
  )};

  ${sm.mod(EModTextDecoration.lineThrough)`
    text-decoration: line-through;
  `};

  ${sm.mod(EModTextDecoration.underline)`
    text-decoration: underline;
  `};

  ${sm.mod(EModUppercase.true)`
    ${sm.font.uppercase};
  `};

  ${sm.mod(EModNowrap.true)`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `};

  ${sm.mod(EModFirstLetterUppercase.true)`
    &:first-letter {
      text-transform: uppercase;
    }
  `};
`

export default { Block }
