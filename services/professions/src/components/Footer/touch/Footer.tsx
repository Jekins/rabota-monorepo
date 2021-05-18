import React, { FC, memo } from 'react'
import { Container } from '@rabota/ui/components/Container/touch'
import { Logo } from '@rabota/ui/components/Logo/touch'
import styled from 'styled-components'
import { sm } from '@rabota/utils/helpers/styles/mixins'
import { sv } from '@rabota/utils/helpers/styles/variables'
import { useSelector } from 'react-redux'
import { EFooterColor } from '../types'
import SC from '../base/Footer.styles'
import { FooterSocialLinks } from '../base/FooterSocialLinks'
import { FooterNavLinks } from '../base/FooterNavLinks'
import { footerSelectors } from '../store'

const {
  Block,
  Inner: InnerSC,
  SocialLinks,
  FooterLinks: FooterLinksSC,
  LogoLink: LogoLinkSC,
} = SC

const Inner = styled(InnerSC)`
  ${sm.breakpoint.smAndDown`
    flex-direction: column;
    padding-top: ${sv.spacing.xxlarge};
    padding-bottom: ${sv.spacing.xxlarge};
  `};
`

const FooterLinks = styled(FooterLinksSC)`
  ${sm.breakpoint.smAndDown`
    flex-direction: column;
    align-items: center;
    margin-bottom: ${sv.spacing.large};
    ${sm.resetLastMb};

    a {
      text-align: center;
      margin-right: 0;
      margin-bottom: ${sv.spacing.small};
      display: block;
    }
  `};
`

const LogoLink = styled(LogoLinkSC)`
  margin-bottom: ${sv.spacing.large};

  ${sm.breakpoint.smAndUp`
    && {
      display: none;
    }
  `};
`

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
