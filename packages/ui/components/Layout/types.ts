import { IPropChildren } from '@rabota/utils/helpers/components/prop.types'

export interface ILayoutProps extends IPropChildren {
  /** Компонент шапки */
  Header?: JSX.Element | null

  /** Компонент футера */
  Footer?: JSX.Element | null

  /** Компонент сайдбара */
  Sidebar?: JSX.Element | null
}
