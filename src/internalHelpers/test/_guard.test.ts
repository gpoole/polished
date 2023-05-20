import guard from '../_guard'

describe('guard', () => {
  it('should return the value in case it is within the boundary', () => {
    expect(guard(0, 1, 0.4)).toEqual(0.4)
  })

  it('should return the upper boundary in case the value is higher', () => {
    expect(guard(0, 1, 1.4)).toEqual(1)
  })

  it('should return the lower boundary in case the value is lower', () => {
    expect(guard(0, 1, -0.2)).toEqual(0)
  })

  it('should return the lower boundary in case the value is equal to the lower boundary', () => {
    expect(guard(0, 1, 0)).toEqual(0)
  })

  it('should return the upper boundary in case the value is equal to the upper boundary', () => {
    expect(guard(0, 1, 1)).toEqual(1)
  })

  it('should return NaN in case the value is NaN', () => {
    expect(guard(0, 1, NaN)).toBeNaN()
  })

  it('should return Infinity in case the value is Infinity', () => {
    expect(guard(0, 1, Infinity)).toEqual(1)
  })

  it('should return -Infinity in case the value is -Infinity', () => {
    expect(guard(0, 1, -Infinity)).toEqual(0)
  })
})
