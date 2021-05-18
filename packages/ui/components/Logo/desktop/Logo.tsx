import React, { FC, memo } from 'react'
import SC from '../base/Logo.styles'
import { ILogoProps } from '../types'
// import LogoImage from '../assets/logo__uchebaru.svg'
// import LogoImageMini from '../assets/logo__uchebaru_minimized.svg'

const { Block } = SC

/** Логотип Учеба.ру */
const Logo: FC<ILogoProps> = (props) => {
  const { width = '100px', color = 'blue', minimized, ...otherProps } = props

  return (
    <Block
      color={color}
      css={`
        width: ${minimized ? '24px' : width};
      `}
      // as={minimized ? LogoImageMini : LogoImage}
      {...otherProps}
    />
  )
}

export { Logo }
export default memo(Logo)
