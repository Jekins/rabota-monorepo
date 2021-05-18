import React, { FC, memo } from 'react'
import SC from '../base/Radio.styles'
import { IRadioProps } from '../types'

const { Block, Input, Label, CheckIcon } = SC

/** Радио кнопка */
const Radio: FC<IRadioProps> = (props) => {
  const { label, checked, firstLetterUppercase, ...otherProps } = props

  return (
    <Block>
      {checked && <CheckIcon />}

      <Input {...{ checked, ...otherProps }} />

      <Label firstLetterUppercase={firstLetterUppercase}>{label}</Label>
    </Block>
  )
}

export { Radio }
export default memo(Radio)
