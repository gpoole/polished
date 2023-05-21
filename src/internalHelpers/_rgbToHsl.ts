import { HslColor, HslaColor, RgbColor, RgbaColor } from '../types/color'

function isRgbaColor(color: RgbColor | RgbaColor): color is RgbaColor {
  return (color as RgbaColor).alpha !== undefined
}

function rgbToHsl(color: RgbColor | RgbaColor): HslColor | HslaColor {
  const red = color.red / 255
  const green = color.green / 255
  const blue = color.blue / 255

  const max = Math.max(red, green, blue)
  const min = Math.min(red, green, blue)
  const lightness = (max + min) / 2

  if (max === min) {
    // achromatic
    return isRgbaColor(color)
      ? { hue: 0, saturation: 0, lightness, alpha: color.alpha }
      : { hue: 0, saturation: 0, lightness }
  }

  const delta = max - min
  const saturation = lightness > 0.5 ? delta / (2 - max - min) : delta / (max + min)
  let hue = 0
  switch (max) {
    case red:
      hue = (green - blue) / delta + (green < blue ? 6 : 0)
      break
    case green:
      hue = (blue - red) / delta + 2
      break
    default:
      // blue case
      hue = (red - green) / delta + 4
      break
  }

  hue *= 60
  return isRgbaColor(color)
    ? { hue, saturation, lightness, alpha: color.alpha }
    : { hue, saturation, lightness }
}

export default rgbToHsl
