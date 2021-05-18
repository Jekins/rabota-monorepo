import React, { FC } from 'react'
import { IHeadContentProps, IOgProps } from './types'

const Verify: FC = () => (
  <>
    <meta name='yandex-verification' content='5ba6d38ff5a00989' />
  </>
)

const Og: FC<IOgProps> = (props) => {
  const { image, width, height } = props

  return (
    <>
      <meta property='og:locale' content='ru_RU' />
      <meta property='og:type' content='website' />
      <meta property='og:site_name' content='Работа.ру' />
      <meta property='og:image' content={image} />
      <meta property='og:image:width' content={`${width}`} />
      <meta property='og:image:height' content={`${height}`} />
    </>
  )
}

const Favicon: FC = () => (
  <>
    <link data-n-head="ssr" rel="icon" type="image/x-icon" href="https://www.rabota.ru/static/images/favicon.ico" />
  </>
)

/** Содержимое тега head */
const HeadContent: FC<IHeadContentProps> = (props) => {
  const {
    description = 'Работа в России, вакансии и резюме, поиск работы на Rabota.ru',
    canonical,
    og = {
      image: 'https://www.rabota.ru/static/images/artboard_ogImage.png',
      width: 160,
      height: 504,
    },
  } = props

  return (
    <>
      <meta name='description' content={description} />
      <meta name='viewport' content='width=device-width, user-scalable=no' />
      <meta charSet='utf-8' />
      <meta httpEquiv='x-ua-compatible' content='ie=edge' />
      {canonical && <link rel='canonical' href={canonical} />}
      <meta name='theme-color' content='#3495db' />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700;800&display=swap" rel="stylesheet" />
      <Verify />
      <Og {...og} />
      <Favicon />
    </>
  )
}

export default HeadContent
