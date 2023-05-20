import { RgbaColor } from '../types/color'
import parseToRGB from './parseToRgb'
import rgb from './rgb'
import PolishedError from '../internalHelpers/_errors'

// Helper function to create rgba string
const createRgbaString = (red: number, green: number, blue: number, alpha: number): string => {
  return `rgba(${red},${green},${blue},${alpha})`
}

export default function rgba(
  firstValue: RgbaColor | number | string,
  secondValue?: number,
  thirdValue?: number,
  fourthValue?: number,
): string {
  switch (typeof firstValue) {
    case 'string':
      if (typeof secondValue === 'number') {
        const rgbValue = parseToRGB(firstValue)
        return createRgbaString(rgbValue.red, rgbValue.green, rgbValue.blue, secondValue)
      }
      break
    case 'number':
      if (secondValue && thirdValue && fourthValue) {
        return fourthValue >= 1
          ? rgb(firstValue, secondValue, thirdValue)
          : createRgbaString(firstValue, secondValue, thirdValue, fourthValue)
      }
      break
    case 'object':
      if (!secondValue && !thirdValue && !fourthValue) {
        return firstValue.alpha >= 1
          ? rgb(firstValue.red, firstValue.green, firstValue.blue)
          : createRgbaString(firstValue.red, firstValue.green, firstValue.blue, firstValue.alpha)
      }
      break
    default:
      break
  }
  throw new PolishedError(7)
}
