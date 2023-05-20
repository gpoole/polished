import hslToHex from '../_hslToHex'

describe('hslToHex', () => {
  it('should convert numbers to a hex color', () => {
    expect(hslToHex(360, 0.75, 0.4)).toEqual('#b31919')
  })

  it('should convert the color red', () => {
    expect(hslToHex(0, 1, 0.5)).toEqual('#ff0000')
  })

  it('should convert the color yellow', () => {
    expect(hslToHex(60, 1, 0.5)).toEqual('#ffff00')
  })

  it('should convert the color lime', () => {
    expect(hslToHex(120, 1, 0.5)).toEqual('#00ff00')
  })

  it('should convert the color cyan', () => {
    expect(hslToHex(180, 1, 0.5)).toEqual('#00ffff')
  })

  it('should convert the color blue', () => {
    expect(hslToHex(240, 1, 0.5)).toEqual('#0000ff')
  })

  it('should convert the color magenta', () => {
    expect(hslToHex(300, 1, 0.5)).toEqual('#ff00ff')
  })

  it('should convert black', () => {
    expect(hslToHex(360, 0, 0.4)).toEqual('#666666')
  })
})
