import React from 'react'
import { NextPage } from 'next'
import CheckIcon from '@rabota/ui/icons/icon__check.svg'
import { Icon } from '@rabota/ui/components/Icon'
import { IIndexPageProps } from '../types'

const IndexPage: NextPage<IIndexPageProps> = () => {
  return (
    <div>
      <Icon as={CheckIcon} />
      Index Page desktop
    </div>
  )
}

export default IndexPage
