import React, { FC, memo } from 'react'
import { IVideoProps } from '../types'
import SC from '../base/Video.styles'

const { Block } = SC

/** Видео */
const Video: FC<IVideoProps> = (props) => {
  const { video, width, ...otherProps } = props

  return (
    <Block width={width} preload='auto' autoPlay loop playsInline muted {...otherProps}>
      <source src={video.webm} type='video/webm' />
      <source src={video.mp4} type='video/mp4' />
    </Block>
  )
}

export { Video }
export default memo(Video)
