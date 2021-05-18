import { IPropImgUrl } from '@rabota/utils/helpers/components/prop.types'
import { IModSize } from '@rabota/utils/helpers/styles/mod.types'

export interface IAvatarProps extends IPropImgUrl<null>, Required<IModSize> {}
