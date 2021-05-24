import React, { useMemo } from 'react'
import { useCookies } from 'react-cookie'
import { getRandomId } from '../helpers/core'

export const xProfileName = 'X-Profile-Id'

export const withProfile = (Component) => (props) => {
  const [cookies, setCookie] = useCookies()
  const xProfileCookieValue = useMemo(() => cookies[xProfileName], [cookies])

  if (!xProfileCookieValue) {
    setCookie(xProfileName, getRandomId())
  }

  return <Component {...props} />
}
