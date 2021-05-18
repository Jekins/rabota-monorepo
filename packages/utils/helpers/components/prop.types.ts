/** Интерфейсы для пропсов, которые передаются в компонент, но не влияют на стили */

import { ElementType, MouseEventHandler, ReactNode, Ref } from 'react'
import { NextRouter } from 'next/router'

export interface IPropChildren<T = never> {
  /** В компонент можно что-то передать */
  children?: ReactNode | T
}

export interface IPropRouter {
  /** Next.js router */
  router?: NextRouter
}

export interface IPropHtml {
  /** Рендерить переданный html или нет */
  html?: boolean
}

export interface IPropHref {
  /** Ссылка в формате `nuxt/link` */
  href?: string
  hrefAs?: string
  spa?: boolean
}

export interface IPropName {
  /** Название */
  name?: string
}

export interface IPropEmail {
  /** Email */
  email?: string
}

export interface IPropPhone {
  /** Телефон */
  phone?: string
}

export interface IPropTitle {
  /** Заголовок */
  title?: string
}

export interface IPropSubtitle {
  /** Подзаголовок */
  subtitle?: string
}

export interface IPropDescription {
  /** Описание */
  description?: string[]
}

export interface IPropLabel {
  /** Лейбл */
  label?: string
}

export interface IPropButtonText {
  /** Текст кнопки */
  buttonText?: string
}

export interface IPropCss {
  /** СSS свойства */
  css?: string
}

export interface IPropId {
  /** ID свойства */
  id?: string
}

export interface IPropStyle {
  /** Инлайн css свойства */
  style?: Record<string, unknown>
}

export interface IPropWidth {
  /** Ширина */
  width?: string
}

export interface IPropMinWidth {
  /** Минимальная ширина */
  minWidth?: string
}

export interface IPropHeight {
  /** Высота */
  height?: string
}

export interface IPropAs<T extends string = never> {
  /** Указать компонент как */
  as?: ElementType | keyof JSX.IntrinsicElements | T
}

export interface IPropOnClick<T = never> {
  /** Функция, выполняемая при клике на закрывающий компонент */
  onClick?: MouseEventHandler | T
}

export interface IPropOnClickClose<T = never> {
  /** Функция, выполняемая при клике на закрытие */
  onClickClose?: MouseEventHandler | T
}

export interface IPropRef<T = HTMLDivElement> {
  ref?: Ref<T>
}

export interface IPropIndex {
  /** Индекс */
  index?: number
}

export interface IPropValue<T = never> {
  /** Значение */
  value?: string | T
}

export interface IPropImgUrl<T = never> {
  /** Ссылка на фоновое изображение */
  imgUrl?: string | T
}

export interface IPropErrorCode {
  /** Код ошибки */
  errorCode?: number
}

export interface IPropWithLink {
  /** Отображать с ссылкой или нет */
  withLink?: boolean
}

export interface IPropPreventOutsideClose {
  /** Предотвратить закрытие при клике вне компонента */
  preventOutsideClose?: boolean
}

export interface IPropIsTouch {
  /** Тач версия приложения или нет */
  isTouch?: boolean
}

export interface IPropTimeout {
  /** Количество секунд задержки */
  timeout?: number | null
}

export interface IPropTabIndex {
  /** Табиндекс */
  tabIndex?: string
}

export interface IPropVideo {
  /** Видео */
  video?: {
    mp4: string
    webm: string
  }
}
