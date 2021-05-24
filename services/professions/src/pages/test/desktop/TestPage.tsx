import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { NextPage } from 'next'
import { Container } from '@rabota/ui/components/Container/desktop'
import { useDispatch, useSelector } from 'react-redux'
import { testSelectors, testThunks } from '@rabota/store/test'
import { ETestErrors } from '@rabota/store/test/types'
import { Text } from '@rabota/ui/components/Text/desktop'
import { startedQuestions } from '@rabota/store/test/constants'
import { ELoading } from '@rabota/store/utils/response/types'
import { ITestPageProps } from '../types'
import SC from '../base/TestPage.styles'
import { QuestionBlock } from '../../../components/QuestionBlock/desktop'
import { slug } from '../constants'

const { TestBlock, TestContainer, TestMessagesBody } = SC

const TestPage: NextPage<ITestPageProps> = () => {
  const dispatch = useDispatch()
  const testLoading = useSelector(testSelectors.loading)
  const questionsWithReply = useSelector(testSelectors.questionsWithReply)
  const currentQuestion = useSelector(testSelectors.currentQuestion)
  const testError = useSelector(testSelectors.error)
  const isTestNotStartedError = useMemo(
    () => testError?.message === ETestErrors.notStarted,
    [testError?.message]
  )
  const [isShowLoading, setIsShowLoading] = useState(true)
  const isTestLoaded = useMemo(() => testLoading === ELoading.fulfilled, [testLoading])

  /** Метод запроса следующего вопроса */
  const getNextQuestion = useCallback(
    () => dispatch(testThunks.proceed({ data: { slug } })),
    [dispatch]
  )

  /** Запускаем 1 раз для про верки состояния теста */
  useEffect(() => {
    getNextQuestion()
  }, []) // Не добавлять зависимости, вызывать нужно только 1 раз

  /** Проставляем состояние отображения лодинга */
  useEffect(() => {
    setIsShowLoading(Boolean(isTestLoaded && isTestNotStartedError))
  }, [isTestLoaded, isTestNotStartedError])

  /** Метод старта тестирования для новго пользователя */
  const startTest = useCallback(async () => {
    await dispatch(testThunks.start({ data: { slug } }))

    setIsShowLoading(false)
  }, [dispatch])

  /** Метод обработки выбранного ответа.
   * Если тест не стартовался, то стартует его */
  const onClickAnswer = useCallback(
    async (questionId, answerIds) => {
      if (isTestNotStartedError) {
        startTest()
      } else {
        await dispatch(testThunks.reply({ data: { slug, questionId, answerIds } }))
        getNextQuestion()
      }
    },
    [dispatch, getNextQuestion, isTestNotStartedError, startTest]
  )

  return (
    <TestBlock>
      <TestContainer as={Container}>
        <TestMessagesBody>
          {isShowLoading ? (
            <Text textAlign='center'>Загрузка...</Text>
          ) : (
            <>
              {startedQuestions.map((question) => (
                <QuestionBlock
                  key={question.id}
                  onClickAnswer={onClickAnswer}
                  disabled={Boolean(questionsWithReply.length || currentQuestion)}
                  {...question}
                />
              ))}

              {questionsWithReply.map(({ question, replies }) => (
                <QuestionBlock
                  key={question.id}
                  onClickAnswer={onClickAnswer}
                  disabled
                  excludeAnswers={replies}
                  {...question}
                />
              ))}

              {currentQuestion && (
                <QuestionBlock onClickAnswer={onClickAnswer} {...currentQuestion} />
              )}
            </>
          )}
        </TestMessagesBody>
      </TestContainer>
    </TestBlock>
  )
}

export default TestPage
