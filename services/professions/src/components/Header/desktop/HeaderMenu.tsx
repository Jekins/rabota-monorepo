import React, { FC, memo } from 'react'
import { Menu, MenuItem } from '@rabota/ui/components/Menu/desktop'
import { useRouter } from 'next/router'
import { IHeaderMenuProps } from '../types'

/** Меню секции */
const HeaderMenu: FC<IHeaderMenuProps> = (props) => {
  const { sectionNavigation, fontWeight, ...otherProps } = props
  const { pathname } = useRouter()

  return (
    <Menu fontWeight={fontWeight} {...otherProps}>
      {sectionNavigation.map(({ name, href }, index) => (
        <MenuItem active={pathname.indexOf(href) >= 0} key={index}>
          <a href={href} dangerouslySetInnerHTML={{ __html: name }} />
        </MenuItem>
      ))}
    </Menu>
  )
}

export default memo(HeaderMenu)
