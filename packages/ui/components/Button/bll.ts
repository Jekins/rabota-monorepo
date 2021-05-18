import { EModButtonColor, EModButtonView, IGetProps } from './types'

export const getProps: IGetProps = (props) => {
  const newProps = { ...props }

  if (newProps.href) {
    delete newProps.type
  } else if (!newProps.type) {
    newProps.type = 'button'
  }

  newProps.as = newProps.href ? 'a' : 'button'

  return newProps
}

export const getColorProgress = (
  color?: keyof typeof EModButtonColor,
  view?: keyof typeof EModButtonView | string
): 'white' | 'black' => {
  return color === 'blue' && view !== 'outline' ? 'white' : 'black'
}
