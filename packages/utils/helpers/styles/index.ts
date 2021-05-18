// eslint-disable-next-line sonarjs/cognitive-complexity
export const RGBAToHexA = (rgbaOrigin: string): string => {
  let rgba: string | string[] | number[] = rgbaOrigin
  const ex = /^rgba\((((((((1?[1-9]?\d)|10\d|(2[0-4]\d)|25[0-5]),\s?)){3})|(((([1-9]?\d(\.\d+)?)|100|(\.\d+))%,\s?){3}))|(((((1?[1-9]?\d)|10\d|(2[0-4]\d)|25[0-5])\s){3})|(((([1-9]?\d(\.\d+)?)|100|(\.\d+))%\s){3}))\/\s)((0?\.\d+)|[01]|(([1-9]?\d(\.\d+)?)|100|(\.\d+))%)\)$/i
  if (ex.test(rgba)) {
    const sep = rgba.indexOf(',') > -1 ? ',' : ' '
    rgba = rgba.substr(5).split(')')[0].split(sep)

    // strip the slash if using space-separated syntax
    if (rgba.indexOf('/') > -1) rgba.splice(3, 1)

    // eslint-disable-next-line guard-for-in,no-restricted-syntax
    for (const R in rgba) {
      const r = rgba[R]
      if (r.indexOf('%') > -1) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        const p = r.substr(0, r.length - 1) / 100

        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        if (R < 3) {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          rgba[R] = Math.round(p * 255)
        } else {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          rgba[R] = p
        }
      }
    }

    let r = (+rgba[0]).toString(16)
    let g = (+rgba[1]).toString(16)
    let b = (+rgba[2]).toString(16)
    let a = Math.round(+rgba[3] * 255).toString(16)

    // eslint-disable-next-line eqeqeq
    if (r.length == 1) r = `0${r}`
    // eslint-disable-next-line eqeqeq
    if (g.length == 1) g = `0${g}`
    // eslint-disable-next-line eqeqeq
    if (b.length == 1) b = `0${b}`
    // eslint-disable-next-line eqeqeq
    if (a.length == 1) a = `0${a}`

    return `#${r}${g}${b}${a}`
  }
  return 'Invalid input color'
}
