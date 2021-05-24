import React, { FC } from 'react'
import { Layout as LayoutTouch } from '@rabota/ui/components/Layout/touch'
import { Layout as LayoutDesktop } from '@rabota/ui/components/Layout/desktop'
import { useToggle } from '@rabota/utils/hooks/useToggle'
import { isBrowser } from '@rabota/utils/helpers/core'
import dynamic from 'next/dynamic'
import { ILayoutProps } from './types'
import { Footer as FooterDesktop } from '../Footer/desktop'
import { Footer as FooterTouch } from '../Footer/touch'
import { Header as HeaderDesktop } from '../Header/desktop'
import { Header as HeaderTouch } from '../Header/touch'
import { SidebarContent } from '../SidebarContent/touch'

const Sidebar = dynamic(() => import('@rabota/ui/components/Sidebar/touch'))

const Layout: FC<ILayoutProps> = (props) => {
  const { isTouch, children } = props

  const [isSidebarOpen, toggleSidebarOpen] = useToggle(false)

  const SidebarTouch: FC = () => (
    <>
      {isBrowser && (
        <Sidebar open={isSidebarOpen} onClickClose={toggleSidebarOpen}>
          <SidebarContent />
        </Sidebar>
      )}
    </>
  )

  if (isTouch) {
    return (
      <LayoutTouch
        Sidebar={<SidebarTouch />}
        Header={<HeaderTouch toggleSidebar={toggleSidebarOpen} />}
        Footer={<FooterTouch />}
      >
        {children}
      </LayoutTouch>
    )
  }

  return (
    <LayoutDesktop Header={<HeaderDesktop />} Footer={<FooterDesktop />}>
      {children}
    </LayoutDesktop>
  )
}

export default Layout
