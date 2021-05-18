import React, { FC, memo, useRef } from 'react'
import { useToggle } from '@rabota/utils/hooks/useToggle'
import SC from '../base/Dropdown.styles'
import { IDropdownProps } from '../types'
import { useHandlerClickOutside } from '../bll'
import { DropdownMenu } from '../../DropdownMenu/desktop'

const { Block, Activator, Link, LinkLeft, LinkRight, LinkStartIcon, Icon, Title } = SC

/** Выпадающий список */
const Dropdown: FC<IDropdownProps> = (props) => {
  const {
    menu,
    width = '',
    title,
    open = false,
    color = 'black',
    onOpen,
    fontSize,
    fontWeight = 'medium',
    position = 'absolute',
    block,
    spacing = 'null',
    StartIcon,
    preventOutsideClose,
    children,
    ...otherProps
  } = props

  const ref = useRef<HTMLDivElement>(null)
  const [isOpen, toggleOpen] = useToggle(open, onOpen)

  useHandlerClickOutside(ref, isOpen, toggleOpen, !!preventOutsideClose)

  return (
    <Block block={block} ref={ref} {...otherProps}>
      <Activator onClick={toggleOpen}>
        {title && (
          <Link block={block} spacing={spacing} color={color}>
            <LinkLeft>
              {StartIcon && <LinkStartIcon>{StartIcon}</LinkStartIcon>}

              <Title fontSize={fontSize} fontWeight={fontWeight}>
                {title}
              </Title>
            </LinkLeft>

            <LinkRight>
              <Icon color={color} open={isOpen} />
            </LinkRight>
          </Link>
        )}

        {children}
      </Activator>

      {isOpen && (
        <DropdownMenu position={position} StartIcon={!!StartIcon} width={width}>
          {menu}
        </DropdownMenu>
      )}
    </Block>
  )
}

export { Dropdown }
export default memo(Dropdown)
