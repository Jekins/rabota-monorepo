import {
  IModBlock,
  IModFontSize,
  IModFontWeight,
  IModOpen,
  IModPosition,
  IModSpacing,
  IModStartIcon,
} from '@rabota/utils/helpers/styles/mod.types'
import {
  IPropChildren,
  IPropPreventOutsideClose,
  IPropWidth,
} from '@rabota/utils/helpers/components/prop.types'

export interface IDropdownProps
  extends IPropChildren,
    IPropWidth,
    IPropPreventOutsideClose,
    IModDropdownColor,
    IModOpen,
    IModFontSize,
    IModFontWeight,
    IModPosition,
    IModBlock,
    IModSpacing,
    IModStartIcon {
  /** Активатор дропдауна. Так же можно вместо свойства `title` передать активатор в виде содержимого компонента. */
  title?: string

  /** Передаем `<Menu><MenuItem>Ссылка</MenuItem></Menu>` */
  menu: JSX.Element
}

export enum EModDropdownColor {
  black = 'color=black',
  maroon = 'color=maroon',
  pine = 'color=pine',
  coffee = 'color=coffee',
  white = 'color=white',
}

export interface IModDropdownColor {
  /** Цвет активатора переданного через свойство `title` */
  color?: keyof typeof EModDropdownColor
}
