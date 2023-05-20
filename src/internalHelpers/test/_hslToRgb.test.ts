import hslToRgb from '../_hslToRgb'

describe('hslToRgb', () => {
  it('should convert numbers to an RGB color', () => {
    expect(hslToRgb(360, 0.75, 0.4)).toEqual('179,25,25')
  })

  it('should convert the color red', () => {
    expect(hslToRgb(0, 1, 0.5)).toEqual('255,0,0')
  })

  it('should convert the color yellow', () => {
    expect(hslToRgb(60, 1, 0.5)).toEqual('255,255,0')
  })

  it('should convert the color lime', () => {
    expect(hslToRgb(120, 1, 0.5)).toEqual('0,255,0')
  })

  it('should convert the color cyan', () => {
    expect(hslToRgb(180, 1, 0.5)).toEqual('0,255,255')
  })

  it('should convert the color blue', () => {
    expect(hslToRgb(240, 1, 0.5)).toEqual('0,0,255')
  })

  it('should convert the color magenta', () => {
    expect(hslToRgb(300, 1, 0.5)).toEqual('255,0,255')
  })

  it('should convert black', () => {
    expect(hslToRgb(360, 0, 0.4)).toEqual('102,102,102')
  })

  it('should convert correctly even when passed a "faulty" negative hue', () => {
    expect(hslToRgb(-10, 1, 0.5)).toEqual('255,0,43')
    expect(hslToRgb(-100, 1, 0.5)).toEqual('85,0,255')
    expect(hslToRgb(-1000, 1, 0.5)).toEqual('170,255,0')
  })
})
