import React, { FC, memo } from 'react'
import SC from '../base/Logo.styles'
import { ILogoProps } from '../types'
import LogoBlue from '../assets/logo__rabota_blue.svg'

const { Block } = SC

/** Логотип Учеба.ру */
const Logo: FC<ILogoProps> = (props) => {
  const { width = '122px', color = 'blue', ...otherProps } = props

  return <Block color={color} as={LogoBlue} width={width} {...otherProps} />
}

export { Logo }
export default memo(Logo)
