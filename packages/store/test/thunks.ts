import apiThunk, { api } from '@rabota/utils/helpers/api'
import { sliceName } from './constants'

const start = apiThunk(`${sliceName}/start`, async (params) => {
  const { slug, ...data } = params?.data
  const response = await api.post(`/test/${slug}/start`, data, params)

  return response.data
})

const proceed = apiThunk(`${sliceName}/proceed`, async (params) => {
  const { slug } = params?.data
  const response = await api.get(`/test/${slug}`, params)

  return response.data
})

const reply = apiThunk(`${sliceName}/reply`, async (params) => {
  const { slug, questionId, answerIds } = params?.data
  const data = {
    questionId,
    replies: answerIds,
  }
  const response = await api.post(`/test/${slug}/reply`, data, params)

  return response.data
})

export default { start, proceed, reply }
