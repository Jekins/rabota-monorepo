import React, { FC, memo } from 'react'
import { Button } from '@rabota/ui/components/Button/desktop'
import { Grid, GridCol } from '@rabota/ui/components/Grid/desktop'
import { IQuestionBlockAnswersProps } from '../types'
import SC from '../base/QuestionBlockAnswers.styles'

const { Block } = SC

/** Блок вопроса с вариантами ответов */
const QuestionBlockAnswers: FC<IQuestionBlockAnswersProps> = (props) => {
  const { answers, onClickAnswer, disabled } = props

  return (
    <Block>
      <Grid spacing='xsmall' justifyContent='flex-end'>
        {answers.map(({ id, text }) => (
          <GridCol key={id} width='auto'>
            <Button onClick={onClickAnswer(id)} disabled={disabled} color='blue'>
              {text}
            </Button>
          </GridCol>
        ))}
      </Grid>
    </Block>
  )
}

export { QuestionBlockAnswers }
export default memo(QuestionBlockAnswers)
