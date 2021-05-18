import React, { FC } from 'react'
import { IDeviceComponent, IConditionalWrapper } from './types'

/** В зависимости от свойства isTouch вернет либо десктопную, либо тач версию компонента */
export const getIDeviceComponent: IDeviceComponent = (
  { isTouch, ...props },
  devicesComponents
) => {
  const ComponentTouch = devicesComponents.touch
  const ComponentDesktop = devicesComponents.desktop

  return <>{isTouch ? <ComponentTouch {...props} /> : <ComponentDesktop {...props} />}</>
}

/** Оборачивать ли по условию в другой компонент */
/*
 * Пример:
 * <ConditionalWrapper
 *   condition={condition}
 *   wrapper={(children) => <WrapperComponent>{children}</WrapperComponent>}
 * >
 *   <Children />
 * </ConditionalWrapper>
 */
export const ConditionalWrapper: FC<IConditionalWrapper> = ({
  condition,
  wrapper,
  children,
}) => (condition ? wrapper(children) : children)

/** Жестко сравнивает пропсы компонент в момент перерендеринга.
 * Испольнуется для memo() */
export const arePropsEqual = (prevProps, nextProps): boolean =>
  JSON.stringify(prevProps) === JSON.stringify(nextProps)
