import { testSlice } from './index'

export interface ITestState {
  [key: string]: ReturnType<typeof testSlice.reducer>
}

export interface ITest {
  slug: string
  name: string
  questionsWithReply: ITestQuestionWithReply[]
  currentQuestion: ITestQuestion
}

export interface ITestQuestionWithReply {
  question: ITestQuestion
  replies: IReply[]
}

export interface ITestQuestion {
  id: number
  text: string
  type: keyof typeof ETestQuestionType
  scoring: ITestQuestionScoring | null
  answers: ITestAnswer[]
}

export interface ITestQuestionScoring {
  id: number
  values: number[]
}

export interface ITestAnswer {
  id: number
  text: string
}

export interface ITestReply {
  answerId: number
  score: number | null
}

export enum ETestQuestionType {
  single = 'single',
}

export enum ETestSlug {
  proforientation = 'proforientation',
}

export enum ETestErrors {
  alreadyStarted = 'Тест уже запущен',
  notStarted = 'Тест не запущен',
}
