import curry from '../_curry'

describe('curry', () => {
  it('should execute the function right now', () => {
    const fn = (amount: number, color: string): string => `${amount}-${color}`
    expect(curry(fn)(0.5, '#FFF')).toEqual('0.5-#FFF')
  })

  it('should create another function that can be executed', () => {
    const fn = (amount: number, color: string): string => `${amount}-${color}`
    expect(curry(fn)(0.5)('#FFF')).toEqual('0.5-#FFF')
  })

  it('should support more than 2 arguments', () => {
    const fn = (amount: number, color: string, opacity: number): string =>
      `${amount}-${color}-${opacity}`
    expect(curry(fn)(0.5)('#FFF')(0.8)).toEqual('0.5-#FFF-0.8')
  })

  it('should return a function when no arguments are provided', () => {
    const fn = (amount: number, color: string): string => `${amount}-${color}`
    const curried = curry(fn)
    expect(typeof curried).toBe('function')
    expect(curried(0.5)('#FFF')).toEqual('0.5-#FFF')
  })
})
