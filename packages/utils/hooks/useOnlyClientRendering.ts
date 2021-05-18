import { useEffect, useState } from 'react'

/** Хук позволяет рендерить только на клиенте без ошибки регидрации */
export const useOnlyClientRendering = (): boolean => {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  return isClient
}
