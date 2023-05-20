import memoizedNameToHex from '../_nameToHex'

describe('memoizedNameToHex', () => {
  it('should convert a named color to a hex value', () => {
    expect(memoizedNameToHex('white')).toEqual('#fff')
  })

  it('should convert a camel-cased named color to a hex value', () => {
    expect(memoizedNameToHex('PowderBlue')).toEqual('#b0e0e6')
  })

  it('should return a passed hex value without mutation', () => {
    expect(memoizedNameToHex('#fff')).toEqual('#fff')
  })

  it('should return a passed RGB string value without mutation', () => {
    expect(memoizedNameToHex('rgb(0,0,0)')).toEqual('rgb(0,0,0)')
  })

  it('should return a passed HSL value without mutation', () => {
    expect(memoizedNameToHex('hsl(180, 50%, 50%)')).toEqual('hsl(180, 50%, 50%)')
  })

  it('should return a non-string value without mutation', () => {
    expect(memoizedNameToHex('2')).toEqual('2')
  })
})
