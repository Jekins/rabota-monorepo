import React, { FC, memo } from 'react'
import { Box } from '@rabota/ui/components/Box/desktop'
import { Text } from '@rabota/ui/components/Text/desktop'
import { IQuestionBlockMessageProps } from '../types'
import SC from '../base/QuestionBlockMessage.styles'

const { Block } = SC

/** Блок вопроса с вариантами ответов */
const QuestionBlockMessage: FC<IQuestionBlockMessageProps> = (props) => {
  const { fontWeight, children } = props

  return (
    <Block>
      <Box color='white' spacing='small' radius='xxlarge' border='gray15'>
        <Text fontWeight={fontWeight}>{children}</Text>
      </Box>
    </Block>
  )
}

export { QuestionBlockMessage }
export default memo(QuestionBlockMessage)
