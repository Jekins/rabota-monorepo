import { IModFontWeight } from '@rabota/utils/helpers/styles/mod.types'

export enum EHeaderColor {
  black = 'black',
  white = 'white9',
  pine = 'green5',
  maroon = 'pink5',
  coffee = 'orange5',
}

export enum EModHeaderColor {
  black = 'color=black',
  white = 'color=white',
  pine = 'color=pine',
  maroon = 'color=maroon',
  coffee = 'color=coffee',
}

export interface IModHeaderColor {
  /** Цвет текста шапки */
  color?: keyof typeof EModHeaderColor
}

export interface IHeaderProps extends IModHeaderColor {
  toggleSidebar?: () => void
}

export interface IHeaderMenuProps extends IModFontWeight {
  sectionNavigation: {
    name: string
    href: string
  }[]
}
