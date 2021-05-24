import { NextPage } from 'next'
import dynamic from 'next/dynamic'
import { getIDeviceComponent } from '@rabota/utils/helpers/components'
import { IObjectDevicesComponents } from '@rabota/utils/helpers/components/types'
import Head from 'next/head'
import HeadContent from '@rabota/ui/core/HeadContent'
import { withProfile } from '@rabota/utils/hocs/withProfile'
import { ITestPageProps } from './types'

const devicesPages: IObjectDevicesComponents = {
  desktop: dynamic(() => import('./desktop')),
  touch: dynamic(() => import('./touch')),
}

const content = {
  seo: {
    meta: {
      title: '',
      description: '',
    },
  },
}

const TestPage: NextPage<ITestPageProps> = (props) => {
  return (
    <>
      <Head>
        <title>{content.seo.meta.title}</title>

        <HeadContent description={content.seo.meta.description} />
      </Head>

      {getIDeviceComponent(props, devicesPages)}
    </>
  )
}

export default withProfile(TestPage)
