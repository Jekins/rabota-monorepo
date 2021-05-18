import { math } from 'polished'
import { EBreakpoint } from '@rabota/utils/helpers/styles/variables'
import { sm } from '@rabota/utils/helpers/styles/mixins'
import { colNumbers } from './constants'

const getBreakpointStyles = (breakpoint: string): any => {
  return [...colNumbers, 'auto'].map((colNumber) => {
    const maxColNumbers = colNumbers[colNumbers.length - 1]
    const colWidth =
      colNumber === 'auto' ? 'auto' : `${math(`100 * ${colNumber} / ${maxColNumbers}`)}%`
    const breakpointRange = `${breakpoint}AndUp`

    return sm.mod(`${breakpoint}=${colNumber}`)`
      ${sm.breakpoint[breakpointRange]`
        ${sm.width(colWidth)};
      `};
    `
  })
}

export const modColSizes = Object.keys(EBreakpoint).map((breakpoint) => {
  return getBreakpointStyles(breakpoint)
})
