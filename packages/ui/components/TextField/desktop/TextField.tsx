import React, { FC, memo, useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { arePropsEqual } from '@rabota/utils/helpers/components'
import { Text } from '../../Text/desktop'
import SC from '../base/TextField.styles'
import { ITextFieldProps } from '../types'
import { Spacing } from '../../Spacing/desktop'

const { Block, Inner, Legend, Fieldset, Label, Input } = SC

/** Текстовое поле */
const TextField: FC<ITextFieldProps> = (props) => {
  const {
    focused = false,
    active = false,
    label,
    width = '100%',
    onBlur,
    onFocus,
    value,
    name,
    pattern,
    onChange,
    min,
    max,
    error,
    autofocus,
    autocomplete,
    disabledWithStyles,
    ...otherProps
  } = props
  // TODO: необходимо зарефакторить и вынести в bll компонента

  const inputRef = useRef<HTMLInputElement>(null)
  const [textFieldValue, setTextFieldValue] = useState(value)
  const [isFocused, setFocused] = useState(focused)
  const [isActive, setActive] = useState(active)
  const isShowLabel = (label && isActive && textFieldValue) || (label && !textFieldValue)

  const onTextFieldBlur = useCallback(
    (event) => {
      setFocused(false)

      if (onBlur) onBlur(event)
    },
    [onBlur, setFocused]
  )

  const onTextFieldFocus = useCallback(
    (event) => {
      setFocused(true)

      if (onFocus) onFocus(event)
    },
    [onFocus, setFocused]
  )

  const checkIsPatternValid = useCallback(
    (str) => {
      const re = new RegExp(`^${pattern}$`, 'g')

      return !pattern || re.test(`${str}`)
    },
    [pattern]
  )

  const checkIsMinValid = useCallback(
    (str) => {
      return !min || str === '' || Number(str) >= min
    },
    [min]
  )

  const checkIsMaxValid = useCallback(
    (str) => {
      return !max || str === '' || Number(str) <= max
    },
    [max]
  )

  const validateValue = useCallback(
    (str) => {
      return checkIsPatternValid(str) && checkIsMinValid(str) && checkIsMaxValid(str)
    },
    [checkIsMaxValid, checkIsMinValid, checkIsPatternValid]
  )

  const handleChange = useCallback(
    (event) => {
      if (inputRef.current) {
        const currentValue = inputRef.current.value

        if (validateValue(currentValue)) {
          setTextFieldValue(currentValue)

          if (onChange) onChange(event, currentValue)
        }
      }
    },
    [onChange, validateValue]
  )

  useMemo(() => {
    if (validateValue(value)) {
      setTextFieldValue(value)
    }
  }, [validateValue, value])

  useMemo(() => {
    setActive(active || isFocused || !!textFieldValue)
  }, [textFieldValue, isFocused, setActive, active])

  useEffect(() => {
    if (autofocus) {
      inputRef?.current?.focus()
    }
  }, [autofocus])

  return (
    <Block
      focused={isFocused}
      css={`
        width: ${width};
      `}
    >
      {isShowLabel && <Label active={isActive}>{label}</Label>}

      <Inner>
        <Input
          ref={inputRef}
          value={textFieldValue}
          onBlur={onTextFieldBlur}
          onFocus={onTextFieldFocus}
          onChange={handleChange}
          name={name}
          pattern={pattern}
          disabled={disabledWithStyles}
          autoComplete={autocomplete}
          {...otherProps}
        />

        {label && (
          <Fieldset>
            <Legend active={isActive}>{label}</Legend>
          </Fieldset>
        )}
      </Inner>

      {error && (
        <>
          <Spacing spacing='uxsmall' />
          <Text textAlign='left' color='red' fontSize='small1'>
            {error}
          </Text>
        </>
      )}
    </Block>
  )
}

export { TextField }
export default memo(TextField, arePropsEqual)
