/** Енамы и их интерфейсы для модификаторов,
 * которые передаются в компоненты и влияют на стили */

export enum EModOrientation {
  vertical = 'orientation=vertical',
  horizontal = 'orientation=horizontal',
}

export interface IModOrientation {
  /** Ориентация контента */
  orientation?: keyof typeof EModOrientation
}

//

export enum EModColorBgText {
  rose = 'color=rose',
  lime = 'color=lime',
  blue = 'color=blue',
  gold = 'color=gold',
  navy = 'color=navy',
  silver = 'color=silver',
  white = 'color=white',
  black = 'color=black',
  yellow = 'color=yellow',
  acid = 'color=acid',
}

export interface IModColorBgText<T = never> {
  /** Цвет фона и текста внутри */
  color?: keyof typeof EModColorBgText | T
}

//

export enum EModSpacing {
  uxsmall = 'spacing=uxsmall',
  usmall = 'spacing=usmall',
  xxsmall = 'spacing=xxsmall',
  xsmall = 'spacing=xsmall',
  small = 'spacing=small',
  medium = 'spacing=medium',
  large = 'spacing=large',
  xlarge = 'spacing=xlarge',
  xxlarge = 'spacing=xxlarge',
  ularge = 'spacing=ularge',
  uxlarge = 'spacing=uxlarge',
  uxxlarge = 'spacing=uxxlarge',
  container = 'spacing=container',
  null = 'spacing=null',
}

export type TModSpacing = keyof typeof EModSpacing

export interface IModSpacing<T = never> {
  /** Отступы */
  spacing?: TModSpacing | T
}

//

export enum EModRadius {
  uxsmall = 'radius=uxsmall',
  usmall = 'radius=usmall',
  xxsmall = 'radius=xxsmall',
  xsmall = 'radius=xsmall',
  small = 'radius=small',
  medium = 'radius=medium',
  large = 'radius=large',
  xlarge = 'radius=xlarge',
  xxlarge = 'radius=xxlarge',
  ularge = 'radius=ularge',
  uxlarge = 'radius=uxlarge',
  uxxlarge = 'radius=uxxlarge',
  container = 'radius=container',
  null = 'radius=null',
}

export interface IModRadius<T = never> {
  /** Радиус */
  radius?: keyof typeof EModRadius | T
}

//

export enum EModSize {
  uxsmall = 'size=uxsmall',
  usmall = 'size=usmall',
  xxsmall = 'size=xxsmall',
  xsmall = 'size=xsmall',
  small = 'size=small',
  medium = 'size=medium',
  large = 'size=large',
  xlarge = 'size=xlarge',
  xxlarge = 'size=xxlarge',
  ularge = 'size=ularge',
  uxlarge = 'size=uxlarge',
  uxxlarge = 'size=uxxlarge',
}

export interface IModSize<T = never> {
  /** Размер */
  size?: keyof typeof EModSize | T
}

//

export enum EModSpacingV {
  uxsmall = 'spacingV=uxsmall',
  usmall = 'spacingV=usmall',
  xxsmall = 'spacingV=xxsmall',
  xsmall = 'spacingV=xsmall',
  small = 'spacingV=small',
  medium = 'spacingV=medium',
  large = 'spacingV=large',
  xlarge = 'spacingV=xlarge',
  xxlarge = 'spacingV=xxlarge',
  ularge = 'spacingV=ularge',
  uxlarge = 'spacingV=uxlarge',
  uxxlarge = 'spacingV=uxxlarge',
  container = 'spacingV=container',
  null = 'spacingV=null',
}

export interface IModSpacingV {
  /** Отступы по вертикали */
  spacingV?: keyof typeof EModSpacingV
}

//

export enum EModSpacingH {
  uxsmall = 'spacingH=uxsmall',
  usmall = 'spacingH=usmall',
  xxsmall = 'spacingH=xxsmall',
  xsmall = 'spacingH=xsmall',
  small = 'spacingH=small',
  medium = 'spacingH=medium',
  large = 'spacingH=large',
  xlarge = 'spacingH=xlarge',
  xxlarge = 'spacingH=xxlarge',
  ularge = 'spacingH=ularge',
  uxlarge = 'spacingH=uxlarge',
  uxxlarge = 'spacingH=uxxlarge',
  container = 'spacingH=container',
  null = 'spacingH=null',
}

export interface IModSpacingH {
  /** Отступы по горизонтали */
  spacingH?: keyof typeof EModSpacingH
}

//

export enum EModColor {
  transparent = 'color=transparent',
  coffee = 'color=coffee',
  mandarin = 'color=mandarin',
  orange = 'color=orange',
  orange5 = 'color=orange5',
  tangerine = 'color=tangerine',
  gold = 'color=gold',
  yellow = 'color=yellow',
  maroon = 'color=maroon',
  red = 'color=red',
  pink = 'color=pink',
  plum = 'color=plum',
  pink5 = 'color=pink5',
  flamingo = 'color=flamingo',
  rose = 'color=rose',
  pine = 'color=pine',
  emerald = 'color=emerald',
  green = 'color=green',
  green5 = 'color=green5',
  acid = 'color=acid',
  lime = 'color=lime',
  navy = 'color=navy',
  cobalt = 'color=cobalt',
  blue = 'color=blue',
  silver = 'color=silver',
  white = 'color=white',
  white9 = 'color=white9',
  white15 = 'color=white15',
  white25 = 'color=white25',
  white50 = 'color=white50',
  white70 = 'color=white70',
  black = 'color=black',
  gray2 = 'color=gray2',
  gray5 = 'color=gray5',
  gray9 = 'color=gray9',
  gray15 = 'color=gray15',
  gray25 = 'color=gray25',
  gray50 = 'color=gray50',
  gray60 = 'color=gray60',
}

export interface IModColor {
  /** Цвет */
  color?: keyof typeof EModColor
}

//

export enum EModProgress {
  true = 'progress=true',
  false = 'progress=false',
}

export interface IModProgress {
  /** Компонент в процессе загрузки чего-либо */
  progress?: boolean
}

//

export enum EModDisabled {
  true = 'disabled=true',
  false = 'disabled=false',
}

export interface IModDisabled {
  /** Компонент задизейблен */
  disabled?: boolean
}

//

export enum EModStartIcon {
  true = 'StartIcon=true',
  false = 'StartIcon=false',
}

export interface IModStartIcon {
  /** Иконка перед контентом компонента */
  StartIcon?: JSX.Element | boolean
}

//

export enum EModEndIcon {
  true = 'EndIcon=true',
  false = 'EndIcon=false',
}

export interface IModEndIcon {
  /** Иконка после контентом компонента */
  EndIcon?: JSX.Element | boolean
}

//

export enum EModStartIconSpacing {
  xsmall = 'startIconSpacing=xsmall',
  small = 'startIconSpacing=small',
  large = 'startIconSpacing=large',
}

export interface IModStartIconSpacing {
  /** Отступ от иконки в начале строки */
  startIconSpacing?: keyof typeof EModStartIconSpacing
}

//

export enum EModEndIconSpacing {
  xsmall = 'endIconSpacing=xsmall',
  small = 'endIconSpacing=small',
  large = 'endIconSpacing=large',
}

export interface IModEndIconSpacing {
  /** Отступ от иконки в конце строки */
  endIconSpacing?: keyof typeof EModEndIconSpacing
}

//

export enum EModFirstLetterUppercase {
  true = 'firstLetterUppercase=true',
  false = 'firstLetterUppercase=false',
}

export interface IModFirstLetterUppercase {
  /** Сделать первый символ заглавным */
  firstLetterUppercase?: boolean
}

//

export enum EModOpen {
  true = 'open=true',
  false = 'open=false',
}

export interface IModOpen {
  /** Компонент открыт */
  open?: boolean

  /** Келбэк выполняемый при открытии компонента */
  onOpen?: () => void
}

//

export enum EModToggleOpen {
  true = 'open=true',
  false = 'open=false',
}

export interface IModToggleOpen {
  /** Компонент открыт */
  open?: boolean

  /** Келбэк выполняемый при открытии компонента, возвращает состояние */
  toggleOpen?: (status: boolean) => void
}

//

//

export enum EModClose {
  true = 'close=true',
  false = 'close=false',
}

export interface IModClose {
  /** Компонент закрыт */
  close?: boolean

  /** Келбэк выполняемый при закрытии компонента */
  onClose?: () => void
}

//

export enum EModVerticalAlign {
  'top' = 'vertical-align=top',
  'middle' = 'vertical-align=middle',
  'bottom' = 'vertical-align=bottom',
}

export interface IModVerticalAlign {
  /** Позиционирование по вертикали */
  verticalAlign?: keyof typeof EModVerticalAlign
}

//

export enum EModAlignItems {
  'flex-start' = 'alignItems=flex-start',
  'flex-end' = 'alignItems=flex-end',
  'center' = 'alignItems=center',
}

export interface IModAlignItems {
  /** Позиционирование по вертикали */
  alignItems?: keyof typeof EModAlignItems
}

export enum EModJustifyContent {
  'flex-start' = 'justifyContent=flex-start',
  'space-between' = 'justifyContent=space-between',
  'space-around' = 'justifyContent=space-around',
  'flex-end' = 'justifyContent=flex-end',
  'center' = 'justifyContent=center',
}

export interface IModJustifyContent {
  /** Позиционирование по горизонтали */
  justifyContent?: keyof typeof EModJustifyContent
}

//

export enum EModTextAlign {
  left = 'textAlign=left',
  center = 'textAlign=center',
  right = 'textAlign=right',
}

export interface IModTextAlign {
  /** Позиционирование текста по горизонтали */
  textAlign?: keyof typeof EModTextAlign
}

//

export enum EModBordered {
  true = 'bordered=true',
  false = 'bordered=false',
}

export interface IModBordered {
  /** С бордерами */
  bordered?: boolean
}

//

export enum EModFontWeight {
  regular = 'fontWeight=regular',
  medium = 'fontWeight=medium',
  semibold = 'fontWeight=semibold',
  bold = 'fontWeight=bold',
  extrabold = 'fontWeight=extrabold',
}

export interface IModFontWeight {
  /** Жирность текста */
  fontWeight?: keyof typeof EModFontWeight
}

//

export enum EModFontSize {
  h1 = 'fontSize=h1',
  h2 = 'fontSize=h2',
  h3 = 'fontSize=h3',
  h4 = 'fontSize=h4',
  h5 = 'fontSize=h5',
  h6 = 'fontSize=h6',
  large = 'fontSize=large',
  medium = 'fontSize=medium',
  small1 = 'fontSize=small1',
  small2 = 'fontSize=small2',
  xsmall1 = 'fontSize=xsmall1',
  xsmall2 = 'fontSize=xsmall2',
}

export interface IModFontSize {
  /** Размер текста */
  fontSize?: keyof typeof EModFontSize
}

//

export enum EModLineHeight {
  h1 = 'lineHeight=h1',
  h2 = 'lineHeight=h2',
  h3 = 'lineHeight=h3',
  h4 = 'lineHeight=h4',
  h5 = 'lineHeight=h5',
  h6 = 'lineHeight=h6',
  large = 'lineHeight=large',
  medium = 'lineHeight=medium',
  small1 = 'lineHeight=small1',
  small2 = 'lineHeight=small2',
  xsmall1 = 'lineHeight=xsmall1',
  xsmall2 = 'lineHeight=xsmall2',
}

export interface IModLineHeight {
  /** Размер межстрочного интервала */
  lineHeight?: keyof typeof EModLineHeight
}

//

export enum EModUppercase {
  true = 'uppercase=true',
  false = 'uppercase=false',
}

export interface IModUppercase {
  /** Текст заглавными буквами ил нет */
  uppercase?: boolean
}

//

export enum EModChecked {
  true = 'checked=true',
  false = 'checked=false',
}

export interface IModChecked {
  /** Выбран или нет */
  checked?: boolean
}

//

export enum EModActive {
  true = 'active=true',
  false = 'active=false',
}

export interface IModActive {
  /** Активный или нет */
  active?: boolean
}

//

export enum EModFocused {
  true = 'focused=true',
  false = 'focused=false',
}

export interface IModFocused {
  /** В фокусе или нет */
  focused?: boolean
}

//

export enum EModMinimized {
  true = 'minimized=true',
  false = 'minimized=false',
}

export interface IModMinimized {
  /** Минифицированный вид */
  minimized?: boolean
}

//

export enum EModInlineScrolling {
  true = 'inlineScrolling=true',
  false = 'inlineScrolling=false',
}

export interface IModInlineScrolling {
  /** Контент выстроен в линию без переносов и скроллится */
  inlineScrolling?: boolean
}

//

export enum EModWithoutSpacingContainer {
  true = 'withoutSpacingContainer=true',
  false = 'withoutSpacingContainer=false',
}

export interface IModWithoutSpacingContainer {
  /** Контент игнорирует padding контейнера и компенсирует его своим внутренним padding`ом */
  withoutSpacingContainer?: boolean
}

//

export enum EModPosition {
  static = 'position=static',
  fixed = 'position=fixed',
  absolute = 'position=absolute',
}

export interface IModPosition {
  /** Позиционирование компонента в пространстве */
  position?: keyof typeof EModPosition
}

//

export enum EModNowrap {
  true = 'nowrap=true',
  false = 'nowrap=false',
}

export interface IModNowrap {
  /** Отменить перенос строки */
  nowrap?: boolean
}

//

export enum EModTextDecoration {
  underline = 'textDecoration=underline',
  lineThrough = 'textDecoration=lineThrough',
}

export interface IModTextDecoration {
  /** Оформление текста */
  textDecoration?: keyof typeof EModTextDecoration
}

//

export enum EModBlock {
  true = 'block=true',
  false = 'block=false',
}

export interface IModBlock {
  /** На всю ширину родителя */
  block?: boolean
}

//

export enum EModShadow {
  true = 'shadow=true',
  false = 'shadow=false',
}

export interface IModShadow {
  /** Компонент с тенью */
  shadow?: boolean
}

//

export enum EModShadowSize {
  small = 'shadowSize=small',
  medium = 'shadowSize=medium',
  large = 'shadowSize=large',
}

export interface IModShadowSize {
  /** Размер тени */
  shadowSize?: keyof typeof EModShadowSize
}

//

export enum EModWordBreak {
  'normal' = 'wordBreak=normal',
  'break-word' = 'wordBreak=break-word',
  'break-all' = 'wordBreak=break-all',
}

export interface IModWordBreak {
  /** Перенос слов */
  wordBreak?: keyof typeof EModWordBreak
}

//

export enum EModBackdrop {
  true = 'backdrop=true',
  false = 'backdrop=false',
}

export interface IModBackdrop {
  /** Отображение слоя с затемнением */
  backdrop?: boolean
}

//

export enum EModAutocomplete {
  true = 'autocomplete=true',
  false = 'autocomplete=false',
}

export interface IModAutocomplete {
  /** Наличие автокомплита */
  autocomplete?: boolean
}
