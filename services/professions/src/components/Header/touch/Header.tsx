import React, { FC, memo } from 'react'
import { Container } from '@rabota/ui/components/Container/touch'
import { Logo } from '@rabota/ui/components/Logo/touch'
// import MenuIcon from '@rabota/ui/icons/icon__menu.svg'
// import SignIcon from '@rabota/ui/icons/icon__sign.svg'
import { useSelector } from 'react-redux'
import { getLogoColor } from '../bll'
import SC from './Header.styles'
import { IHeaderProps } from '../types'
import { headerSelectors } from '../store'

const { Block, ButtonIcon, MainContainer, Main, LogoLink } = SC

/** Шапка сайта */
const Header: FC<IHeaderProps> = (props) => {
  const { toggleSidebar, ...otherProps } = props
  const color = useSelector(headerSelectors.color)

  return (
    <Block {...otherProps}>
      <Main color={color}>
        <MainContainer as={Container}>
          <ButtonIcon icon size='small' onClick={toggleSidebar}>
            {/*<MenuIcon />*/}
            =
          </ButtonIcon>

          <LogoLink href='/'>
            <Logo color={getLogoColor(color)} />
          </LogoLink>

          <ButtonIcon icon size='small' href={`/sign-in?redirect=%2Fmy`}>
            {/*<SignIcon />*/}
            +
          </ButtonIcon>
        </MainContainer>
      </Main>
    </Block>
  )
}

export { Header }
export default memo(Header)
