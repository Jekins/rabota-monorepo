/** Хук, который преобразует переданные отступы в вертикальные и горизонтальные.
 * Например: <Component spacing={['small', 'large']} /> */
export const useVHSpacing = <T>(
  spacing: T | T[]
): {
  vertical: T
  horizontal: T
} => {
  const isSpacingType = typeof spacing === 'string'

  return {
    vertical: isSpacingType ? spacing : spacing[0],
    horizontal: isSpacingType ? spacing : spacing[1],
  }
}
