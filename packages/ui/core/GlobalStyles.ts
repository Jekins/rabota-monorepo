import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'
import { sv } from '@rabota/utils/helpers/styles/variables'
import { sm } from '@rabota/utils/helpers/styles/mixins'
import { memo } from 'react'
import { arePropsEqual } from '@rabota/utils/helpers/components'

const GlobalStyles = createGlobalStyle`
  ${normalize};

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    outline: none;
  }

  html,
  body {
    height: 100%;
  }

  body {
    color: ${sv.color.black};
    font-family: ${sv.fontFamily.openSans};
    font-feature-settings: 'liga','kern';
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    display: flex;
    flex-direction: column;
    ${sm.font.medium};

    ${sm.device.touch`
      min-width: 320px;
    `};

    ${sm.device.desktop`
      min-width: ${sv.container.md};
    `};
  }

  #__next {
    min-height: 100%;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
  }

  h1 {
    ${sm.font.h1};
  }

  h2 {
    ${sm.font.h2};
  }

  h3 {
    ${sm.font.h3};
  }

  h4 {
    ${sm.font.h4};
  }

  h5 {
    ${sm.font.h5};
  }

  h6 {
    ${sm.font.h6};
  }

  a {
    text-decoration: none;
    ${sm.linkColor.blue};
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }

  p {
    margin-top: 0;
    margin-bottom: ${sv.spacing.small};
  }

  menu {
    list-style-type: initial;
    margin-block-start: 0;
    margin-block-end: 0;
    margin-inline-start: 0;
    margin-inline-end: 0;
    padding-inline-start: 0;
  }

  img {
    display: block;
  }
`

export default memo(GlobalStyles, arePropsEqual)
