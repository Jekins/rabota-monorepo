import React, { forwardRef, memo } from 'react'
import { Progress } from '../../Progress/desktop'
import SC from '../base/Button.styles'
import { IButtonProps } from '../types'
import { getColorProgress, getProps } from '../bll'

const { Block, Icon, ProgressWrapper, Inner } = SC

/** Кнопка */
const Button = forwardRef<HTMLButtonElement & HTMLLinkElement, IButtonProps>(
  function Button(props, ref) {
    const {
      children,
      StartIcon,
      EndIcon,
      color,
      view = '',
      icon,
      progress,
      size = 'medium',
      shape = 'rectangle',
      rel,
      target,
      ...otherProps
    } = props

    return (
      <Block
        color={color}
        view={view}
        icon={icon}
        size={size}
        shape={shape}
        ref={ref}
        rel={rel}
        target={target}
        {...getProps(otherProps)}
      >
        {StartIcon && (
          <Icon StartIcon={!!StartIcon} progress={progress}>
            {StartIcon}
          </Icon>
        )}

        <Inner progress={progress}>{children}</Inner>

        {progress && (
          <ProgressWrapper
            as={Progress}
            color={getColorProgress(color, view)}
            progress={progress}
          />
        )}

        {EndIcon && (
          <Icon EndIcon={!!EndIcon} progress={progress}>
            {EndIcon}
          </Icon>
        )}
      </Block>
    )
  }
)

export { Button }
export default memo(Button)
