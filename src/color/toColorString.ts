import { RgbColor, RgbaColor, HslColor, HslaColor } from '../types/color'
import rgb from './rgb'
import rgba from './rgba'
import hsl from './hsl'
import hsla from './hsla'
import PolishedError from '../internalHelpers/_errors'

type Color = RgbColor | RgbaColor | HslColor | HslaColor

const isRgb = (color: Color): color is RgbColor =>
  typeof color.red === 'number' &&
  typeof color.green === 'number' &&
  typeof color.blue === 'number' &&
  (typeof color.alpha !== 'number' || typeof color.alpha === 'undefined')

const isRgba = (color: Color): color is RgbaColor =>
  typeof color.red === 'number' &&
  typeof color.green === 'number' &&
  typeof color.blue === 'number' &&
  typeof color.alpha === 'number'

const isHsl = (color: Color): color is HslColor =>
  typeof color.hue === 'number' &&
  typeof color.saturation === 'number' &&
  typeof color.lightness === 'number' &&
  (typeof color.alpha !== 'number' || typeof color.alpha === 'undefined')

const isHsla = (color: Color): color is HslaColor =>
  typeof color.hue === 'number' &&
  typeof color.saturation === 'number' &&
  typeof color.lightness === 'number' &&
  typeof color.alpha === 'number'

export default function toColorString(color: Color): string {
  if (typeof color !== 'object') throw new PolishedError(8)
  if (isRgba(color)) return rgba(color)
  if (isRgb(color)) return rgb(color)
  if (isHsla(color)) return hsla(color)
  if (isHsl(color)) return hsl(color)

  throw new PolishedError(8)
}
