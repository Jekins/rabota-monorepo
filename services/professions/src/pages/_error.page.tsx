import { Text } from '@rabota/ui/components/Text/desktop'
import { NextPage } from 'next'
import { wrapper } from '../store/store'

const Error: NextPage<{ statusCode: number }> = (props) => {
  const { statusCode } = props

  return (
    <Text textAlign='center' fontSize='h3'>
      {statusCode ? `На сервере произошла ошибка ${statusCode}.` : 'Произошла ошибка.'}
    </Text>
  )
}

Error.getInitialProps = wrapper.getInitialPageProps(() => async (ctx): Promise<any> => {
  const statusCode = ctx.res?.statusCode || ctx.err ? ctx.err?.statusCode : 404

  return { statusCode }
})

export default Error
