import React, { FC, memo } from 'react'
import SC from '../base/Avatar.styles'
import { IAvatarProps } from '../types'
import UserIcon from '../../../icons/icon__user.svg'

const { Block, Photo, NoPhoto } = SC

/** Аватар */
const Avatar: FC<IAvatarProps> = (props) => {
  const { imgUrl, size, ...otherProps } = props

  return (
    <Block size={size} {...otherProps}>
      {imgUrl ? (
        <Photo src={imgUrl} alt='Аватар' />
      ) : (
        <NoPhoto size={size}>
          <UserIcon color='gray25' />
        </NoPhoto>
      )}
    </Block>
  )
}

export { Avatar }
export default memo(Avatar)
