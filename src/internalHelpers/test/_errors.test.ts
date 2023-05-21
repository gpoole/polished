import PolishedError from '../_errors'

describe('PolishedError', () => {
  it('should throw an error with the correct message for code 1', () => {
    expect(() => {
      throw new PolishedError(1)
    }).toThrowError('Property must be a string value.')
  })

  it('should throw an error with the correct message for code 2', () => {
    expect(() => {
      throw new PolishedError(2)
    }).toThrowError('Property must be a string value. Property must be a string value.')
  })

  it('should throw an error with the correct message for code 3', () => {
    expect(() => {
      throw new PolishedError(3)
    }).toThrowError(
      'Property must be a string value. Property must be a string value. Property must be a string value.',
    )
  })

  it('should throw an error with the correct message for code 64', () => {
    expect(() => {
      throw new PolishedError(64)
    }).toThrowError(
      'The animation shorthand arrays can only have 8 elements. See the specification for more information: http://mdn.io/animation',
    )
  })

  it('should throw an error with the correct message for code 65', () => {
    expect(() => {
      throw new PolishedError(65)
    }).toThrowError('Property must be a string value.')
  })

  it('should throw an error with the correct message for code 66', () => {
    expect(() => {
      throw new PolishedError(66)
    }).toThrowError(
      'borderRadius expects a radius value as a string or number as the second argument.',
    )
  })

  it('should throw an error with the correct message for code 67', () => {
    expect(() => {
      throw new PolishedError(67)
    }).toThrowError(
      'borderRadius expects one of "top", "bottom", "left" or "right" as the first argument.',
    )
  })

  it('should throw an error with the correct message for code 68', () => {
    expect(() => {
      throw new PolishedError(68)
    }).toThrowError('Property must be a string value.')
  })

  it('should throw an error with the correct message for code 69', () => {
    expect(() => {
      throw new PolishedError(69)
    }).toThrowError('Value must be a string or number.')
  })

  it('should throw an error with the correct message for code 70', () => {
    expect(() => {
      throw new PolishedError(70, 'test')
    }).toThrowError('Syntax Error at test.')
  })

  it('should throw an error with the correct message for code 71', () => {
    expect(() => {
      throw new PolishedError(71, 'test')
    }).toThrowError('Formula contains a function that needs parentheses at test.')
  })

  it('should throw an error with the correct message for code 72', () => {
    expect(() => {
      throw new PolishedError(72, 'test')
    }).toThrowError('Formula is missing closing parenthesis at test.')
  })

  it('should throw an error with the correct message for code 73', () => {
    expect(() => {
      throw new PolishedError(73, 'test')
    }).toThrowError('Formula has too many closing parentheses at test.')
  })

  it('should throw an error with the correct message for code 74', () => {
    expect(() => {
      throw new PolishedError(74)
    }).toThrowError('All values in a formula must have the same unit or be unitless.')
  })

  it('should not throw an error in production mode', () => {
    const env = process.env.NODE_ENV
    process.env.NODE_ENV = 'production'

    expect(() => {
      throw new PolishedError(64)
    }).not.toThrow()

    process.env.NODE_ENV = env
  })
})
