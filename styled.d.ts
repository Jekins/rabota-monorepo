import { CSSProp } from 'styled-components'
import { DOMAttributes } from 'react'

declare module 'react' {
  interface HTMLAttributes<T> extends DOMAttributes<T> {
    css?: CSSProp
  }
}
