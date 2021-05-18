export enum EFooterColor {
  silver = 'gray60',
  navy = 'white70',
}

export enum EModFooterColor {
  silver = 'color=silver',
  navy = 'color=navy',
}

export interface IModFooterColor {
  color?: keyof typeof EModFooterColor
}
