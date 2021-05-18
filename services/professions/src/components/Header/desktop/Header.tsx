import React, { FC, memo } from 'react'
import { Container } from '@rabota/ui/components/Container/desktop'
import { Dropdown } from '@rabota/ui/components/Dropdown/desktop'
import { Logo } from '@rabota/ui/components/Logo/desktop'
import { useSelector } from 'react-redux'
import SC from './Header.styles'
import { getLogoColor } from '../bll'
import HeaderMenu from './HeaderMenu'
import { headerNavigation } from '../constants'
import { IHeaderProps } from '../types'
import { headerSelectors } from '../store'

const { Block, MainContainer, Main, MainLineLeft, MainLineRight, AuthLink, LogoLink } = SC

/** Шапка сайта */
const Header: FC<IHeaderProps> = (props) => {
  const color = useSelector(headerSelectors.color)

  return (
    <Block {...props}>
      <Main color={color}>
        <MainContainer as={Container}>
          <MainLineLeft>
            <LogoLink href='/'>
              <Logo color={getLogoColor(color)} />
            </LogoLink>

            <Dropdown
              menu={
                <HeaderMenu sectionNavigation={headerNavigation} fontWeight='medium' />
              }
              title='Старшекласснику и абитуриенту'
              color={color}
            />
          </MainLineLeft>

          <MainLineRight>
            <AuthLink href={`/sign-in?redirect=%2Fmy`}>Моя учёба</AuthLink>
          </MainLineRight>
        </MainContainer>
      </Main>
    </Block>
  )
}

export { Header }
export default memo(Header)
