import hslToRgb from '../internalHelpers/_hslToRgb'
import nameToHex from '../internalHelpers/_nameToHex'
import PolishedError from '../internalHelpers/_errors'
import { RgbColor, RgbaColor } from '../types/color'

const hexRegex: RegExp = /^#[a-fA-F0-9]{6}$/
const hexRgbaRegex: RegExp = /^#[a-fA-F0-9]{8}$/
const reducedHexRegex: RegExp = /^#[a-fA-F0-9]{3}$/
const reducedRgbaHexRegex: RegExp = /^#[a-fA-F0-9]{4}$/
const rgbRegex: RegExp = /^rgb\(\s*(\d{1,3})\s*,?\s*(\d{1,3})\s*,?\s*(\d{1,3})\s*\)$/i
const rgbaRegex: RegExp =
  /^rgba?\(\s*(\d{1,3})\s*,?\s*(\d{1,3})\s*,?\s*(\d{1,3})\s*[,/]\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i
const hslRegex: RegExp =
  /^hsl\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*,?\s*(\d{1,3}[.]?[0-9]?)%\s*,?\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i
const hslaRegex: RegExp =
  /^hsla?\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*,?\s*(\d{1,3}[.]?[0-9]?)%\s*,?\s*(\d{1,3}[.]?[0-9]?)%\s*[,/]\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i

function parseRgb(hex: string): RgbColor {
  return {
    red: parseInt(`${hex[1]}${hex[2]}`, 16),
    green: parseInt(`${hex[3]}${hex[4]}`, 16),
    blue: parseInt(`${hex[5]}${hex[6]}`, 16),
  }
}

function parseRgba(hex: string): RgbaColor {
  return {
    ...parseRgb(hex),
    alpha: parseFloat((parseInt(`${hex[7]}${hex[8]}`, 16) / 255).toFixed(2)),
  }
}

export default function parseToRgb(color: string): RgbColor | RgbaColor {
  if (typeof color !== 'string') {
    throw new PolishedError(3)
  }
  const normalizedColor = nameToHex(color)

  if (normalizedColor.match(hexRegex)) {
    return parseRgb(normalizedColor)
  }
  if (normalizedColor.match(hexRgbaRegex)) {
    return parseRgba(normalizedColor)
  }
  if (normalizedColor.match(reducedHexRegex)) {
    return parseRgb(normalizedColor.repeat(2))
  }
  if (normalizedColor.match(reducedRgbaHexRegex)) {
    return parseRgba(normalizedColor.repeat(2))
  }

  const rgbMatched = rgbRegex.exec(normalizedColor)
  if (rgbMatched) {
    return parseRgb(rgbMatched.join(''))
  }

  const rgbaMatched = rgbaRegex.exec(normalizedColor)
  if (rgbaMatched) {
    return parseRgba(rgbaMatched.join(''))
  }

  const hslMatched = hslRegex.exec(normalizedColor)
  if (hslMatched) {
    const rgbColorString = hslToRgb(hslMatched)
    const hslRgbMatched = rgbRegex.exec(rgbColorString)
    if (!hslRgbMatched) {
      throw new PolishedError(4, normalizedColor, rgbColorString)
    }
    return parseRgb(hslRgbMatched.join(''))
  }

  const hslaMatched = hslaRegex.exec(normalizedColor)
  if (hslaMatched) {
    const rgbColorString = hslToRgb(hslaMatched)
    const hslRgbMatched = rgbRegex.exec(rgbColorString)
    if (!hslRgbMatched) {
      throw new PolishedError(4, normalizedColor, rgbColorString)
    }
    return parseRgba(hslRgbMatched.join(''))
  }

  throw new PolishedError(5)
}
