import React, {
  FC,
  memo,
  useCallback,
  useEffect,
  useMemo,
  useState,
  Fragment,
} from 'react'
import { Spacing } from '@rabota/ui/components/Spacing/desktop'
import { ITestReply } from '@rabota/store/test/types'
import { IQuestionBlockProps } from '../types'
import SC from '../base/QuestionBlock.styles'
import { scoringAnswers } from '../constants'
import { QuestionBlockAnswers } from './QuestionBlockAnswers'
import { QuestionBlockMessage } from './QuestionBlockMessage'

const { Block } = SC

/** Блок вопроса с вариантами ответов */
const QuestionBlock: FC<IQuestionBlockProps> = (props) => {
  const {
    id,
    text,
    answers,
    scoring,
    excludeAnswers = [],
    onClickAnswer,
    disabled,
  } = props

  const [scoringIndex, setScoringIndex] = useState(0)
  const [answersLimit, setAnswersLimit] = useState(scoring ? answers.length : 1)
  const [replies, setReplies] = useState<ITestReply[]>([])

  const excludeAnswersIds = useMemo(
    () => excludeAnswers.map(({ answerId }) => answerId),
    [excludeAnswers]
  )

  const simpleAnswers = useMemo(() => {
    return excludeAnswersIds.length
      ? answers.filter(({ id: answerId }) => excludeAnswersIds.includes(answerId))
      : answers
  }, [answers, excludeAnswersIds])

  const getScoringAnswers = useCallback(
    (scoringAnswerId) => {
      const replyId = excludeAnswers.find(({ answerId }) => answerId === scoringAnswerId)

      return replyId
        ? scoringAnswers.filter(({ id: answerId }) => answerId === replyId.score)
        : scoringAnswers
    },
    [excludeAnswers]
  )

  const onClick = useCallback(
    (answerId) => () => {
      const scopeReplies: ITestReply[] = []

      if (scoring) {
        scopeReplies.push({
          answerId: answers[scoringIndex].id,
          score: answerId,
        })

        setScoringIndex(scoringIndex + 1)
      } else {
        scopeReplies.push({
          answerId,
          score: null,
        })
      }

      setReplies([...replies, ...scopeReplies])
      setAnswersLimit(answersLimit - 1)
    },
    [answers, answersLimit, replies, scoring, scoringIndex]
  )

  useEffect(() => {
    console.log('___', answersLimit)
    if (answersLimit === 0 && onClickAnswer) {
      onClickAnswer(id, replies)
    }
  }, [answers.length, answersLimit, disabled, id, onClickAnswer, replies])

  return (
    <Block>
      <QuestionBlockMessage>{text}</QuestionBlockMessage>

      {scoring ? (
        <>
          {answers.map(({ id: scoringAnswerId, text: scoringAnswerText }) => (
            <Fragment key={scoringAnswerId}>
              <Spacing spacing='xsmall' />

              <QuestionBlockMessage fontWeight='bold'>
                {scoringAnswerText}
              </QuestionBlockMessage>

              <QuestionBlockAnswers
                answers={getScoringAnswers(scoringAnswerId)}
                onClickAnswer={onClick}
                disabled={disabled}
              />
            </Fragment>
          ))}
        </>
      ) : (
        <>
          {simpleAnswers.length > 0 && (
            <QuestionBlockAnswers
              answers={simpleAnswers}
              onClickAnswer={onClick}
              disabled={disabled}
            />
          )}
        </>
      )}
    </Block>
  )
}

export { QuestionBlock }
export default memo(QuestionBlock)
