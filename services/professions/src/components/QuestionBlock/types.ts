import { ITestQuestion, ITestReply } from '@rabota/store/test/types'
import { IModDisabled, IModFontWeight } from '@rabota/utils/helpers/styles/mod.types'
import { IPropChildren } from '@rabota/utils/helpers/components/prop.types'

export interface IQuestionBlockProps extends ITestQuestion, IModDisabled {
  /** Коллбэк вызываемый при клике на ответ */
  onClickAnswer?: (
    questionId: number,
    answerId: {
      answerId: number
    }[]
  ) => void

  /** Массив ID ответов, которые не надо показывать */
  excludeAnswers?: ITestReply[]
}

export interface IQuestionBlockAnswersProps
  extends IModDisabled,
    Pick<ITestQuestion, 'answers'> {
  /** Коллбэк вызываемый при клике на ответ */
  onClickAnswer: (id: number) => () => void
}

export interface IQuestionBlockMessageProps extends IPropChildren, IModFontWeight {}
