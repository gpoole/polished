import endsWith from '../_endsWith'

describe('endsWith', () => {
  it('should return true if string ends with suffix', () => {
    expect(endsWith('hello world', 'world')).toBe(true)
    expect(endsWith('hello world', 'ld')).toBe(true)
    expect(endsWith('hello world', 'o world')).toBe(true)
  })

  it('should return false if string does not end with suffix', () => {
    expect(endsWith('hello world', 'hello')).toBe(false)
    expect(endsWith('hello world', 'world!')).toBe(false)
    expect(endsWith('hello world', 'o worl')).toBe(false)
  })
})
