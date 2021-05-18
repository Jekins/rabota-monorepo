import * as React from 'react'

type ResultBox<T> = { v: T }

/** Хук для создания значения ровно один раз */
export default function useConstant<T>(fn: () => T): T {
  const ref = React.useRef<ResultBox<T>>()

  if (!ref.current) {
    ref.current = { v: fn() }
  }

  return ref.current.v
}
