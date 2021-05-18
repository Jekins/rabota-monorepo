import React from 'react'
import { NextPage } from 'next'
import CheckIcon from '@rabota/ui/icons/icon__check.svg'
import { IIndexPageProps } from '../types'

const IndexPage: NextPage<IIndexPageProps> = () => {
  return (
    <div>
      <CheckIcon />
      Index Page desktop
    </div>
  )
}

export default IndexPage
