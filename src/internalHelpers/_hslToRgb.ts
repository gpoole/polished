type ConversionFunction = (red: number, green: number, blue: number) => string

function colorToInt(color: number): number {
  return Math.round(color * 255)
}

function convertToInt(red: number, green: number, blue: number): string {
  return `${colorToInt(red)},${colorToInt(green)},${colorToInt(blue)}`
}

function hslToRgb(hue: number, saturation: number, lightness: number): string {
  const chroma = (1 - Math.abs(2 * lightness - 1)) * saturation
  const huePrime = hue / 60
  const secondComponent = chroma * (1 - Math.abs((huePrime % 2) - 1))
  const lightnessModification = lightness - chroma / 2

  let red = 0,
    green = 0,
    blue = 0

  if (huePrime < 1) {
    red = chroma
    green = secondComponent
  } else if (huePrime < 2) {
    red = secondComponent
    green = chroma
  } else if (huePrime < 3) {
    green = chroma
    blue = secondComponent
  } else if (huePrime < 4) {
    green = secondComponent
    blue = chroma
  } else if (huePrime < 5) {
    red = secondComponent
    blue = chroma
  } else {
    red = chroma
    blue = secondComponent
  }

  red += lightnessModification
  green += lightnessModification
  blue += lightnessModification

  return `${Math.round(red * 255)},${Math.round(green * 255)},${Math.round(blue * 255)}`
}

export default hslToRgb
