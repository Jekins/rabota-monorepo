import React, { FC, memo } from 'react'
import { Container } from '@rabota/ui/components/Container/desktop'
import { Logo } from '@rabota/ui/components/Logo/desktop'
import { useSelector } from 'react-redux'
import { EFooterColor } from '../types'
import SC from '../base/Footer.styles'
import { FooterSocialLinks } from '../base/FooterSocialLinks'
import { FooterNavLinks } from '../base/FooterNavLinks'
import { footerSelectors } from '../store'

const { Block, Inner, SocialLinks, FooterLinks, LogoLink } = SC

/** Футер сайта */
const Footer: FC = (props) => {
  const color = useSelector(footerSelectors.color)

  return (
    <Block color={color} {...props}>
      <Container>
        <Inner>
          <LogoLink href='/'>
            <Logo color={EFooterColor[color]} />
          </LogoLink>

          <FooterLinks>
            <FooterNavLinks />
          </FooterLinks>

          <SocialLinks>
            <FooterSocialLinks />
          </SocialLinks>
        </Inner>
      </Container>
    </Block>
  )
}

export { Footer }
export default memo(Footer)
