import {
  IModBlock,
  IModDisabled,
  IModEndIcon,
  IModProgress,
  IModStartIcon,
} from '@rabota/utils/helpers/styles/mod.types'
import {
  IPropAs,
  IPropChildren,
  IPropCss,
  IPropHref,
  IPropId,
  IPropOnClick,
  IPropRef,
  IPropTitle,
} from '@rabota/utils/helpers/components/prop.types'

export interface IButtonProps
  extends IPropChildren,
    IPropAs<'a' | 'button'>,
    IPropOnClick,
    IPropRef<HTMLButtonElement>,
    IPropHref,
    IPropCss,
    IPropId,
    IPropTitle,
    IModStartIcon,
    IModEndIcon,
    IModProgress,
    IModBlock,
    IModButtonColor,
    IModButtonSize,
    IModButtonView,
    IModButtonIcon,
    IModButtonShape,
    IModDisabled {
  /** Тип кнопки. Не использовать вместе с `href`. */
  type?: string
  rel?: string
  target?: string
}

export interface IGetProps extends IPropRef<HTMLButtonElement> {
  (props: Partial<Pick<IButtonProps, 'type' | 'href' | 'as'>>): any
}

export enum EModButtonColor {
  blue = 'color=blue',
  gold = 'color=gold',
  black = 'color=black',
  coffee = 'color=coffee',
  green = 'color=green',
  gray25 = 'color=gray25',
  orange = 'color=orange',
}

export interface IModButtonColor {
  /** Цвет */
  color?: keyof typeof EModButtonColor
}

//

export enum EModButtonSize {
  small = 'size=small',
  medium = 'size=medium',
}

export interface IModButtonSize {
  /** Размер кнопки. */
  size?: keyof typeof EModButtonSize
}

//

export enum EModButtonView {
  default = 'view=default',
  link = 'view=link',
  outline = 'view=outline',
}

export interface IModButtonView {
  /** Вид кнопки:
   * `link` – в виде ссылки,
   * `outline` – без фона и с бордером */
  view?: keyof typeof EModButtonView
}

//

export enum EModButtonIcon {
  true = 'icon=true',
  false = 'icon=false',
}

export interface IModButtonIcon {
  /** Адаптация под иконку переданную в `children` */
  icon?: boolean
}

//

export enum EModButtonShape {
  circle = 'shape=circle',
  rectangle = 'shape=rectangle',
}

export interface IModButtonShape {
  /** Форма кнопки. */
  shape?: keyof typeof EModButtonShape
}

export type TButtonHoverColor = 'cobalt' | 'tangerine' | 'coffee' | 'green' | 'mandarin'

export type TButtonTextColor = 'black' | 'white'
