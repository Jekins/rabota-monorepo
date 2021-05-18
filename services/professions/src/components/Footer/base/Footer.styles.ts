import styled, { StyledProps } from 'styled-components'
import { sv } from '@rabota/utils/helpers/styles/variables'
import { sm } from '@rabota/utils/helpers/styles/mixins'
import { EFooterColor, EModFooterColor, IModFooterColor } from '../types'

const LogoLink = styled.a``

const FooterLinks = styled.div`
  a {
    margin-right: ${sv.spacing.xsmall};

    &:last-child {
      margin-right: 0;
    }
  }
`

const SocialLinks = styled.div`
  a {
    margin-right: ${sv.spacing.small};
    height: 24px;

    &:last-child {
      margin-right: 0;
    }
  }
`

const Inner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: ${sv.spacing.large};
  padding-bottom: ${sv.spacing.large};

  > * {
    display: flex;
    align-items: center;
  }
`

const Block = styled.footer<StyledProps<IModFooterColor>>`
  ${Object.keys(EModFooterColor).map(
    (item) => sm.mod(EModFooterColor[item])`
      background-color: ${sv.color[item]};

      &,
      ${FooterLinks} a,
      ${FooterLinks} a:hover,
      ${SocialLinks} svg {
        color: ${sv.color[EFooterColor[item]]};
      }

      ${Inner} {
        border-top: ${item === 'navy' ? `1px solid ${sv.color.white25}` : 'none'};
      }
    `
  )};
`

export default { Block, Inner, SocialLinks, FooterLinks, LogoLink }
