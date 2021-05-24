import { getRandomId } from '@rabota/utils/helpers/core'
import { ETestQuestionType } from './types'

export const sliceName = 'test'

export const startedQuestions = [
  {
    id: getRandomId(),
    text: 'Привет 👋 И добро пожаловать на борт! Я здесь, чтобы помочь вам подобрать подходящие профессии и рассказать про них всё, что нужно знать.',
    type: ETestQuestionType.single,
    scoring: null,
    answers: [],
  },
  {
    id: getRandomId(),
    text: 'Это не очередной психологический тест. Вопросы и рекомендации составлены HR-консультантами и экспертами, которые хорошо разбираются в современном рынке труда и отлично понимают кто где востребован.',
    type: ETestQuestionType.single,
    scoring: null,
    answers: [],
  },
  {
    id: getRandomId(),
    text: 'Представьте, что вы беседуете с опытным карьерным консультантом. Я буду задавать вопросы про ваш опыт и навыки и постараюсь в процессе нашего разговора выяснить все ваши пожелания и индивидуальные особенности.',
    type: ETestQuestionType.single,
    scoring: null,
    answers: [],
  },
  {
    id: getRandomId(),
    text: 'В тесте 30 вопросов, займет 10-15 минут ⏱️',
    type: ETestQuestionType.single,
    scoring: null,
    answers: [{ id: 1, text: 'Всё понятно, погнали 🚀' }],
  },
]
