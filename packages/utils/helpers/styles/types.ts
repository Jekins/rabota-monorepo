import { FlattenInterpolation, ThemeProps } from 'styled-components'
import { TRecordOptional } from '../core/types'
import {
  EBreakpoint,
  EColor,
  EColorBgText,
  EContainer,
  EDuration,
  EFontFamily,
  EFontSize,
  EFontWeight,
  ELineHeight,
  ERadius,
  EShadow,
  ESpacing,
} from './variables'

export type TColorBgText = keyof typeof EColorBgText

export type TColor = keyof typeof EColor
export type TColors = TRecordOptional<TColor, string>

export type TSpacing = keyof typeof ESpacing
export type TSpacings = TRecordOptional<TSpacing, string>

export type TSize = keyof typeof ESpacing
export type TSizes = TRecordOptional<TSize, string>

export type TFontSize = keyof typeof EFontSize
export type TFontSizes = TRecordOptional<TFontSize, string>

export type TLineHeight = keyof typeof ELineHeight
export type TLineHeights = TRecordOptional<TLineHeight, string>

export type TFontWeight = keyof typeof EFontWeight
export type TFontWeights = TRecordOptional<TFontWeight, string>

export type TFontFamily = keyof typeof EFontFamily
export type TFontFamilies = TRecordOptional<TFontFamily, string>

export type TRadius = keyof typeof ERadius
export type TRadiuses = TRecordOptional<TRadius, string>

export type TShadow = keyof typeof EShadow
export type TShadows = TRecordOptional<TShadow, string>

export type TBreakpoint = keyof typeof EBreakpoint
export type TBreakpoints = TRecordOptional<TBreakpoint, string>

export type TContainer = keyof typeof EContainer
export type TContainers = TRecordOptional<TContainer, string>

export type TDuration = keyof typeof EDuration
export type TDurations = TRecordOptional<TDuration, string>

export interface IThemeVariables {
  color?: TColors
  spacing?: TSpacings
  fontSize?: TFontSizes
  lineHeight?: TLineHeights
  fontWeight?: TFontWeights
  fontFamily?: TFontFamilies
  radius?: TRadiuses
  shadow?: TShadows
  breakpoint?: TBreakpoints
  duration?: TDurations
  container?: TContainers
}

export type FI = FlattenInterpolation<ThemeProps<any>>

export interface TemplateStringFunction {
  (literals: TemplateStringsArray, ...args: any[]): FI
}

export enum EBreakpointRanges {
  'lgAndUp' = 'lgAndUp',
  'mdAndUp' = 'mdAndUp',
  'smAndUp' = 'smAndUp',
  'xsAndUp' = 'xsAndUp',
  'uxsAndUp' = 'uxsAndUp',
  'lgAndDown' = 'lgAndDown',
  'mdAndDown' = 'mdAndDown',
  'smAndDown' = 'smAndDown',
  'xsAndDown' = 'xsAndDown',
  'uxsAndDown' = 'uxsAndDown',
  'mdOnly' = 'mdOnly',
  'smOnly' = 'smOnly',
  'xsOnly' = 'xsOnly',
  'uxsOnly' = 'uxsOnly',
}
export type TBreakpointRanges = keyof typeof EBreakpointRanges

export interface IBreakpoint {
  lgAndUp: TemplateStringFunction
  mdAndUp: TemplateStringFunction
  smAndUp: TemplateStringFunction
  xsAndUp: TemplateStringFunction
  uxsAndUp: TemplateStringFunction
  lgAndDown: TemplateStringFunction
  mdAndDown: TemplateStringFunction
  smAndDown: TemplateStringFunction
  xsAndDown: TemplateStringFunction
  uxsAndDown: TemplateStringFunction
  mdOnly: TemplateStringFunction
  smOnly: TemplateStringFunction
  xsOnly: TemplateStringFunction
  uxsOnly: TemplateStringFunction
}

interface IDeviceFunction {
  (literals: TemplateStringsArray, ...args: any[]): ({
    theme: serviceTheme,
  }: {
    theme: any
  }) => FlattenInterpolation<ThemeProps<any>>
}

export interface IDevice {
  touch: IDeviceFunction
  desktop: IDeviceFunction
}

interface IModFunction1 {
  (literals: TemplateStringsArray, ...args: any[]): IModFunction2
}

interface IModFunction2 {
  ({ theme: serviceTheme }: { theme: any }): FlattenInterpolation<ThemeProps<any>>
}

export interface IMod {
  (modifier: string): IModFunction1
}

type TMathVarsFunction = (props: any) => string

export interface IMathVars {
  (var1: any, operation: string, var2: any): TMathVarsFunction
}

export interface IModsProps {
  (styleKey?: string): {
    color: any
    colorBgText: any
    textAlign: any
    spacing: any
    fontSize: any
    fontWeight: any
  }
}
