import React, { FC, Fragment, memo } from 'react'
import { Spacing } from '@rabota/ui/components/Spacing/desktop'
import { Menu, MenuItem } from '@rabota/ui/components/Menu/desktop'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { Text } from '@rabota/ui/components/Text/desktop'
import { ISidebarContentProps } from '../types'
import SC from '../base/SidebarContent.styles'
import { headerNavigation } from '../../Header/constants'

const { Block } = SC

/** Контент сайдбара */
const SidebarContent: FC<ISidebarContentProps> = (props) => {
  const { pathname } = useRouter()

  return (
    <Block {...props}>
      {headerNavigation.map(({ name, href, childNavigation }, index) => (
        <Fragment key={index}>
          <Menu spacing='null' shadow={false} maxHeight='auto'>
            <MenuItem>
              <Link href={href} passHref>
                <a>
                  <Text fontSize='h4' fontWeight='bold'>
                    {name}
                  </Text>
                </a>
              </Link>
            </MenuItem>

            {childNavigation.map(({ name: childName, href: hrefChild }, indexChild) => (
              <MenuItem active={pathname.includes(hrefChild)} key={indexChild}>
                <a href={hrefChild}>{childName}</a>
              </MenuItem>
            ))}
          </Menu>

          <Spacing spacing='small' />
        </Fragment>
      ))}
    </Block>
  )
}

export { SidebarContent }
export default memo(SidebarContent)
