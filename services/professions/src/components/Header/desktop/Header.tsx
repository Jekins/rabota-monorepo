import React, { FC, memo } from 'react'
import { Container } from '@rabota/ui/components/Container/desktop'
import { Logo } from '@rabota/ui/components/Logo/desktop'
import { useSelector } from 'react-redux'
import SC from './Header.styles'
import { getLogoColor } from '../bll'
import { IHeaderProps } from '../types'
import { headerSelectors } from '../store'

const { Block, MainContainer, Main, LogoLink } = SC

/** Шапка сайта */
const Header: FC<IHeaderProps> = (props) => {
  const color = useSelector(headerSelectors.color)

  return (
    <Block {...props}>
      <Main color={color}>
        <MainContainer as={Container}>
          <LogoLink href='/'>
            <Logo color={getLogoColor(color)} />
          </LogoLink>
        </MainContainer>
      </Main>
    </Block>
  )
}

export { Header }
export default memo(Header)
