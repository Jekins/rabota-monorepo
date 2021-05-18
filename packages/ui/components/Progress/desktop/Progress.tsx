import React, { FC, memo } from 'react'
import SC from '../base/Progress.styles'
import { IProgressProps } from '../types'
// import IconProgressWhite from '../assets/icon__progress_white.svg'
// import IconProgressBlack from '../assets/icon__progress_black.svg'

const { Block } = SC

/** Прогресс */
const Progress: FC<IProgressProps> = (props) => {
  const { color, ...otherProps } = props

  return (
    <Block
      // as={color === 'white' ? IconProgressWhite : IconProgressBlack}
      {...otherProps}
    />
  )
}

export { Progress }
export default memo(Progress)
