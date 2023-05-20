import numberToHex from '../_numberToHex'

describe('numberToHex', () => {
  it('should convert 0 to "00"', () => {
    expect(numberToHex(0)).toEqual('00')
  })

  it('should convert 15 to "0f"', () => {
    expect(numberToHex(15)).toEqual('0f')
  })

  it('should convert 16 to "10"', () => {
    expect(numberToHex(16)).toEqual('10')
  })

  it('should convert 17 to "11"', () => {
    expect(numberToHex(17)).toEqual('11')
  })

  it('should convert 255 to "ff"', () => {
    expect(numberToHex(255)).toEqual('ff')
  })

  it('should convert 256 to "100"', () => {
    expect(numberToHex(256)).toEqual('100')
  })

  it('should convert 4095 to "fff"', () => {
    expect(numberToHex(4095)).toEqual('fff')
  })

  it('should convert 4096 to "1000"', () => {
    expect(numberToHex(4096)).toEqual('1000')
  })
})
