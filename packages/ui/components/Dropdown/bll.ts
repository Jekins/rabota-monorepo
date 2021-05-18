import { Ref, useCallback } from 'react'
import { useOnClickOutside } from '@rabota/utils/hooks/useOnClickOutside'
import { TUseToggleFunction } from '@rabota/utils/hooks/useToggle'

export const useHandlerClickOutside = (
  ref: Ref<HTMLDivElement>,
  isOpen: boolean,
  toggleOpen: TUseToggleFunction,
  preventOutsideClose?: boolean
): void => {
  const handler = useCallback(() => !preventOutsideClose && isOpen && toggleOpen(), [
    isOpen,
    preventOutsideClose,
    toggleOpen,
  ])

  useOnClickOutside(ref, handler)
}
