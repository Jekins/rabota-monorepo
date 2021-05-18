import { useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { ThemeContext } from 'styled-components'
import { math } from 'polished'
import { isBrowser } from '../helpers/core'
import { EBreakpoint } from '../helpers/styles/variables'
import { TBreakpointRanges } from '../helpers/styles/types'

export const useBreakpoints = (): Record<TBreakpointRanges, string> => {
  const { breakpoint } = useContext(ThemeContext)

  return {
    lgAndUp: `(min-width: ${breakpoint.lg})`,
    mdAndUp: `(min-width: ${breakpoint.md})`,
    smAndUp: `(min-width: ${breakpoint.sm})`,
    xsAndUp: `(min-width: ${breakpoint.xs})`,
    uxsAndUp: `(min-width: ${breakpoint.uxs})`,
    lgAndDown: `(max-width: ${math(`${breakpoint.lg} - 1px`)})`,
    mdAndDown: `(max-width: ${math(`${breakpoint.md} - 1px`)})`,
    smAndDown: `(max-width: ${math(`${breakpoint.sm} - 1px`)})`,
    xsAndDown: `(max-width: ${math(`${breakpoint.xs} - 1px`)})`,
    uxsAndDown: `(max-width: ${math(`${breakpoint.uxs} - 1px`)})`,
    mdOnly: `(min-width: ${breakpoint.md}) and (max-width: ${math(
      `${breakpoint.lg} - 1px`
    )})`,
    smOnly: `(min-width: ${breakpoint.sm}) and (max-width: ${math(
      `${breakpoint.md} - 1px`
    )})`,
    xsOnly: `(min-width: ${EBreakpoint.xs}) and (max-width: ${math(
      `${breakpoint.sm} - 1px`
    )})`,
    uxsOnly: `(min-width: ${EBreakpoint.uxs}) and (max-width: ${math(
      `${breakpoint.xs} - 1px`
    )})`,
  }
}

interface IUseMediaBreakpoints {
  (
    breakpointRange: TBreakpointRanges | TBreakpointRanges[],
    values?: any,
    defaultValue?: any
  ): any
}

/** По css медиа запросам вернет значение, которое соответствует индексу медиа запроса,
 * который сейчас выполняется в браузере */
export const useMediaBreakpoints: IUseMediaBreakpoints = (
  breakpointRange,
  values = [true],
  defaultValue = false
) => {
  const allBreakpoints = useBreakpoints()
  const mediaQueryLists = useMemo(() => {
    const breakpointRanges = Array.isArray(breakpointRange)
      ? breakpointRange
      : [breakpointRange]

    return isBrowser
      ? breakpointRanges.map((name) => {
          const breakpoint = allBreakpoints[name]

          return window.matchMedia(breakpoint)
        })
      : []
  }, [allBreakpoints, breakpointRange])

  const getValue = useCallback(() => {
    const index = mediaQueryLists.findIndex((mql) => mql.matches)

    return typeof values[index] !== 'undefined' ? values[index] : defaultValue
  }, [defaultValue, mediaQueryLists, values])

  const [value, setValue] = useState(getValue)

  useEffect(() => {
    const handler = (): void => setValue(getValue)

    mediaQueryLists.forEach((mql) => mql.addListener(handler))

    return (): void => mediaQueryLists.forEach((mql) => mql.addListener(handler))
  }, [getValue, mediaQueryLists])

  return value
}
