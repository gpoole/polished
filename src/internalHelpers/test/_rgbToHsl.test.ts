import rgbToHsl from '../_rgbToHsl'
import { HslColor, HslaColor, RgbColor, RgbaColor } from '../../types/color'

describe('rgbToHsl', () => {
  it('should convert black to HSL', () => {
    expect(rgbToHsl({ red: 0, green: 0, blue: 0 })).toEqual({ hue: 0, saturation: 0, lightness: 0 })
  })

  it('should convert white to HSL', () => {
    expect(rgbToHsl({ red: 255, green: 255, blue: 255 })).toEqual({
      hue: 0,
      saturation: 0,
      lightness: 1,
    })
  })

  it('should convert red to HSL', () => {
    expect(rgbToHsl({ red: 255, green: 0, blue: 0 })).toEqual({
      hue: 0,
      saturation: 1,
      lightness: 0.5,
    })
  })

  it('should convert green to HSL', () => {
    expect(rgbToHsl({ red: 0, green: 255, blue: 0 })).toEqual({
      hue: 120,
      saturation: 1,
      lightness: 0.5,
    })
  })

  it('should convert blue to HSL', () => {
    expect(rgbToHsl({ red: 0, green: 0, blue: 255 })).toEqual({
      hue: 240,
      saturation: 1,
      lightness: 0.5,
    })
  })

  it('should convert yellow to HSL', () => {
    expect(rgbToHsl({ red: 255, green: 255, blue: 0 })).toEqual({
      hue: 60,
      saturation: 1,
      lightness: 0.5,
    })
  })

  it('should convert cyan to HSL', () => {
    expect(rgbToHsl({ red: 0, green: 255, blue: 255 })).toEqual({
      hue: 180,
      saturation: 1,
      lightness: 0.5,
    })
  })

  it('should convert magenta to HSL', () => {
    expect(rgbToHsl({ red: 255, green: 0, blue: 255 })).toEqual({
      hue: 300,
      saturation: 1,
      lightness: 0.5,
    })
  })

  it('should convert gray to HSL', () => {
    expect(rgbToHsl({ red: 128, green: 128, blue: 128 })).toEqual({
      hue: 0,
      saturation: 0,
      lightness: 0.5,
    })
  })

  it('should convert a custom color to HSL', () => {
    expect(rgbToHsl({ red: 128, green: 0, blue: 128 })).toEqual({
      hue: 300,
      saturation: 1,
      lightness: 0.25,
    })
  })

  it('should convert an RGBA color to HSLA', () => {
    const rgbaColor: RgbaColor = { red: 255, green: 0, blue: 0, alpha: 0.5 }
    const hslaColor: HslaColor = { hue: 0, saturation: 1, lightness: 0.5, alpha: 0.5 }
    expect(rgbToHsl(rgbaColor)).toEqual(hslaColor)
  })

  it('should convert an RGB color to HSL', () => {
    const rgbColor: RgbColor = { red: 255, green: 0, blue: 0 }
    const hslColor: HslColor = { hue: 0, saturation: 1, lightness: 0.5 }
    expect(rgbToHsl(rgbColor)).toEqual(hslColor)
  })
})
