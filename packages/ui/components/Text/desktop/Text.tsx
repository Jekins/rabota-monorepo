import React, { FC, memo } from 'react'
import SC from '../base/Text.styles'
import { ITextProps } from '../types'

const { Block } = SC

/** Текстовый блок */
const Text: FC<ITextProps> = (props) => {
  const {
    html = true,
    wordBreak = 'break-word',
    as = 'div',
    textDecoration,
    children,
    ...otherProps
  } = props

  return (
    <>
      {html ? (
        <Block
          wordBreak={wordBreak}
          textDecoration={textDecoration}
          as={as}
          dangerouslySetInnerHTML={{ __html: `${children}` }}
          {...otherProps}
        />
      ) : (
        <Block
          wordBreak={wordBreak}
          textDecoration={textDecoration}
          as={as}
          {...otherProps}
        >
          {children}
        </Block>
      )}
    </>
  )
}

export { Text }
export default memo(Text)
