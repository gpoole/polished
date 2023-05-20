// @flow
import hslToRgb from './_hslToRgb'
import reduceHexValue from './_reduceHexValue'
import toHex from './_numberToHex'

function colorToHex(color: number): string {
  return toHex(Math.round(color * 255))
}

function convertToHex(red: number, green: number, blue: number): string {
  return reduceHexValue(
    `#${colorToHex(red * 255)}${colorToHex(green * 255)}${colorToHex(blue * 255)}`,
  )
}

function hslToHex(hue: number, saturation: number, lightness: number): string {
  return hslToRgb(hue, saturation, lightness, convertToHex)
}

export default hslToHex
