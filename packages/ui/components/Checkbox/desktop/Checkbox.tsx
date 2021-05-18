import React, { FC, memo } from 'react'
import SC from '../base/Checkbox.styles'
import { ICheckboxProps } from '../types'
import CheckIcon from '../../../icons/icon__check.svg'

const { Block, Input, Label } = SC

/** Чекбокс */
const Checkbox: FC<ICheckboxProps> = (props) => {
  const { label, checked, firstLetterUppercase, disabled = false, ...otherProps } = props

  return (
    <Block disabled={disabled}>
      {checked && <CheckIcon />}

      <Input {...{ checked, ...otherProps }} disabled={disabled} />

      <Label firstLetterUppercase={firstLetterUppercase}>{label}</Label>
    </Block>
  )
}

export { Checkbox }
export default memo(Checkbox)
