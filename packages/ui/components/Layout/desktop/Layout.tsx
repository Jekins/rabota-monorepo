import React, { FC, memo } from 'react'
import SC from '../base/Layout.styles'
import { ILayoutProps } from '../types'

const { Main, Content, Body } = SC

/** Лейаут */
const Layout: FC<ILayoutProps> = (props) => {
  const { Header, Footer, Sidebar, children, ...otherProps } = props

  return (
    <>
      {Sidebar}

      <Main {...otherProps}>
        <Content>
          {Header}

          <Body>{children}</Body>
        </Content>

        {Footer}
      </Main>
    </>
  )
}

export { Layout }
export default memo(Layout)
