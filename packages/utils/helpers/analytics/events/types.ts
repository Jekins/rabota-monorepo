export interface IAnalyticEvent {
  (props: IAnalyticEventProps): void
}

export interface IAnalyticEventProps {
  /** В какие системы аналитики отправлять. оставьте пустым, чтобы отправить во все */
  targets?: EAnalyticEventTargets[]

  /** Название ивента */
  eventName: string

  /** Значение, отправляемое в аналитику */
  value?: Record<string, any>
}

export enum EAnalyticEventTargets {
  ym = 'ym',
  ga = 'ga',
}

export type TGAEventName = {
  category: string
  action: string
  label: string
}
