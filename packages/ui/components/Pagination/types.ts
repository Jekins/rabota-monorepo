import { IPropRouter } from '@rabota/utils/helpers/components/prop.types'

export interface IPaginationProps extends Required<IPropRouter> {
  /** Всего страниц */
  totalPages: number

  /** Номер активной страницы */
  currentPage: number

  /** Функция, которая вызовится при изменении страницы */
  changePageHandler: (number: number) => void
}
