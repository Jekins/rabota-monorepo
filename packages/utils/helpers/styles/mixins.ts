import { math } from 'polished'
import { css, FlattenSimpleInterpolation } from 'styled-components'
import { EColor, EColorBgText, EFontSize, EFontWeight, ESpacing, sv } from './variables'
import {
  IMathVars,
  TColor,
  TFontSize,
  TFontWeight,
  IBreakpoint,
  FI,
  IDevice,
  IModsProps,
  IMod,
} from './types'
import { IPropImgUrl } from '../components/prop.types'

/** Миксины для стилей Styled Components */

export const getBaseFontStyles = (
  font: TFontSize,
  weight: TFontWeight
): FlattenSimpleInterpolation => {
  return css`
    font-size: ${sv.fontSize[font]};
    font-weight: ${sv.fontWeight[weight]};
    line-height: ${sv.lineHeight[font]};
  `
}

const font = {
  h1: getBaseFontStyles('h1', 'extrabold'),

  h2: getBaseFontStyles('h2', 'extrabold'),

  h3: getBaseFontStyles('h3', 'bold'),

  h4: getBaseFontStyles('h4', 'bold'),

  h5: getBaseFontStyles('h5', 'bold'),

  h6: getBaseFontStyles('h6', 'bold'),

  xsmall1: getBaseFontStyles('xsmall1', 'regular'),

  xsmall2: getBaseFontStyles('xsmall2', 'regular'),

  small1: getBaseFontStyles('small1', 'regular'),

  small2: getBaseFontStyles('small2', 'regular'),

  medium: getBaseFontStyles('medium', 'regular'),

  large: getBaseFontStyles('large', 'regular'),

  uppercase: css`
    text-transform: uppercase;
    letter-spacing: 1px;
  `,

  capitalize: css`
    text-transform: capitalize;
  `,
}

const linkColor = {
  inherit: css`
    &,
    &:hover {
      color: inherit;
    }
  `,

  blue: css`
    color: ${sv.color.blue};

    &:hover {
      color: ${sv.color.cobalt};
    }
  `,

  black: css`
    color: ${sv.color.black};

    &:hover {
      color: ${sv.color.cobalt};
    }
  `,

  green: css`
    color: ${sv.color.green};

    &:hover {
      color: ${sv.color.green};
    }
  `,
}

const position = {
  absoluteCenter: css`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  `,

  verticalCenter: css`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  `,

  horizontalCenter: css`
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  `,

  absoluteFill: css`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  `,

  fixedFill: css`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  `,
}

const resetList = css`
  list-style: none;
  margin: 0;
  padding-left: 0;
`

const resetLastMb = css`
  > *:last-child {
    margin-bottom: 0;
  }
`

const arrow = {
  down: (sizePx: number, color: TColor): FlattenSimpleInterpolation => css`
    width: 0;
    height: 0;
    border-left: ${sizePx}px solid transparent;
    border-right: ${sizePx}px solid transparent;
    border-top: ${sizePx}px solid ${sv.color[color]};
  `,

  left: (sizePx: number, color: TColor): FlattenSimpleInterpolation => css`
    width: 0;
    height: 0;
    border-top: ${sizePx}px solid transparent;
    border-bottom: ${sizePx}px solid transparent;
    border-right: ${sizePx}px solid ${sv.color[color]};
  `,

  right: (sizePx: number, color: TColor): FlattenSimpleInterpolation => css`
    width: 0;
    height: 0;
    border-top: ${sizePx}px solid transparent;
    border-bottom: ${sizePx}px solid transparent;
    border-left: ${sizePx}px solid ${sv.color[color]};
  `,
}

export const mathVars: IMathVars = (var1, operation, var2) => {
  const isVarFunction = typeof var2 === 'function'

  return (props): string => {
    return math(`${var1(props)} ${operation} ${isVarFunction ? var2(props) : var2}`)
  }
}

export const breakpoint: IBreakpoint = {
  lgAndUp: (literals, ...args) => {
    return css`
      @media (min-width: ${sv.breakpoint.lg}) {
        ${css(literals, ...args)};
      }
    `
  },

  mdAndUp: (literals, ...args) => {
    return css`
      @media (min-width: ${sv.breakpoint.md}) {
        ${css(literals, ...args)};
      }
    `
  },

  smAndUp: (literals, ...args) => {
    return css`
      @media (min-width: ${sv.breakpoint.sm}) {
        ${css(literals, ...args)};
      }
    `
  },

  xsAndUp: (literals, ...args) => {
    return css`
      @media (min-width: ${sv.breakpoint.xs}) {
        ${css(literals, ...args)};
      }
    `
  },

  uxsAndUp: (literals, ...args) => {
    return css`
      @media (min-width: ${sv.breakpoint.uxs}) {
        ${css(literals, ...args)};
      }
    `
  },

  lgAndDown: (literals, ...args) => {
    return css`
      @media (max-width: ${mathVars(sv.breakpoint.lg, '-', '1px')}) {
        ${css(literals, ...args)};
      }
    `
  },

  mdAndDown: (literals, ...args) => {
    return css`
      @media (max-width: ${mathVars(sv.breakpoint.md, '-', '1px')}) {
        ${css(literals, ...args)};
      }
    `
  },

  smAndDown: (literals, ...args) => {
    return css`
      @media (max-width: ${mathVars(sv.breakpoint.sm, '-', '1px')}) {
        ${css(literals, ...args)};
      }
    `
  },

  xsAndDown: (literals, ...args) => {
    return css`
      @media (max-width: ${mathVars(sv.breakpoint.xs, '-', '1px')}) {
        ${css(literals, ...args)};
      }
    `
  },

  uxsAndDown: (literals, ...args) => {
    return css`
      @media (max-width: ${mathVars(sv.breakpoint.uxs, '-', '1px')}) {
        ${css(literals, ...args)};
      }
    `
  },

  mdOnly: (literals, ...args) => {
    return css`
      @media (min-width: ${sv.breakpoint.md}) and (max-width: ${mathVars(
          sv.breakpoint.lg,
          '-',
          '1px'
        )}) {
        ${css(literals, ...args)};
      }
    `
  },

  smOnly: (literals, ...args) => {
    return css`
      @media (min-width: ${sv.breakpoint.sm}) and (max-width: ${mathVars(
          sv.breakpoint.md,
          '-',
          '1px'
        )}) {
        ${css(literals, ...args)};
      }
    `
  },

  xsOnly: (literals, ...args) => {
    return css`
      @media (min-width: ${sv.breakpoint.xs}) and (max-width: ${mathVars(
          sv.breakpoint.sm,
          '-',
          '1px'
        )}) {
        ${css(literals, ...args)};
      }
    `
  },

  uxsOnly: (literals, ...args) => {
    return css`
      @media (min-width: ${sv.breakpoint.uxs}) and (max-width: ${mathVars(
          sv.breakpoint.xs,
          '-',
          '1px'
        )}) {
        ${css(literals, ...args)};
      }
    `
  },
}

const width = (widthSize: string): FlattenSimpleInterpolation => css`
  width: ${widthSize};
  flex-basis: ${widthSize};
`

const device: IDevice = {
  touch: (literals, ...args) => {
    return ({ theme: serviceTheme }): FI =>
      serviceTheme.isTouch ? css(literals, ...args) : css``
  },

  desktop: (literals, ...args) => {
    return ({ theme: serviceTheme }): FI =>
      !serviceTheme.isTouch ? css(literals, ...args) : css``
  },
}

const imgUrl = ({ imgUrl: img }: Required<IPropImgUrl>): string => img

const mod: IMod = (modifier) => {
  const argModifier = modifier.split('=')
  const prop = argModifier[0]
  const value = argModifier[1]

  return (literals, ...args) => {
    return (props): FI => {
      const propValue =
        typeof props[prop] === 'undefined' ? 'false' : props[prop].toString()

      return propValue === value ? css(literals, ...args) : css``
    }
  }
}

const mods: IModsProps = (styleKey) => ({
  color: Object.keys(EColor).reduce((acc, item) => {
    acc[item] = css`
      ${styleKey}: ${sv.color[item]};
    `
    return acc
  }, {}),

  colorBgText: Object.keys(EColorBgText).reduce((acc, item) => {
    acc[item] = css`
      background-color: ${sv.color[item]};
      color: ${sv.color[EColorBgText[item]]};
    `
    return acc
  }, {}),

  spacing: Object.keys(ESpacing).reduce((acc, item) => {
    acc[item] = css`
      ${styleKey}: ${sv.spacing[item]};
    `
    return acc
  }, {}),

  fontSize: Object.keys(EFontSize).reduce((acc, item) => {
    acc[item] = css`
      font-size: ${sv.fontSize[item]};
    `
    return acc
  }, {}),

  fontWeight: Object.keys(EFontWeight).reduce((acc, item) => {
    acc[item] = css`
      font-weight: ${sv.fontWeight[item]};
    `
    return acc
  }, {}),

  textAlign: {
    left: css`
      text-align: left;
    `,
    center: css`
      text-align: center;
    `,
    right: css`
      text-align: right;
    `,
  },
})

const withoutSpacingContainer = css`
  ${breakpoint.smAndDown`
    margin-left: -${sv.spacing.container};
    margin-right: -${sv.spacing.container};
    padding-left: ${sv.spacing.container};
    padding-right: ${sv.spacing.container};
  `};
`

export const sm = {
  font,
  linkColor,
  position,
  resetList,
  resetLastMb,
  arrow,
  breakpoint,
  device,
  mathVars,
  width,
  imgUrl,
  mods,
  mod,
  withoutSpacingContainer,
}
