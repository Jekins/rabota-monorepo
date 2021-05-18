export interface IHeadContentProps {
  description?: string
  canonical?: string
  og?: IOgProps
}

export interface IOgProps {
  image: string
  height: number
  width: number
}

export interface ICachedScrollPositions {
  [asPath: string]: {
    x: number
    y: number
  }
}
