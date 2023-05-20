import PolishedError from '../_errors'

const errors = {
  1: 'Error 1: %s',
  2: 'Error 2: %s %s',
  3: 'Error 3: %s %s %s',
}

describe('PolishedError', () => {
  it('should create an error with the correct message', () => {
    const error = new PolishedError(1, 'foo')
    expect(error.message).toBe('Error 1: foo')
  })

  it('should replace all placeholders in the error message', () => {
    const error = new PolishedError(2, 'foo', 'bar')
    expect(error.message).toBe('Error 2: foo bar')
  })

  it('should work with multiple placeholders of the same type', () => {
    const error = new PolishedError(3, 'foo', 'bar', 'baz')
    expect(error.message).toBe('Error 3: foo bar baz')
  })

  it('should provide a link to the errors file in production mode', () => {
    process.env.NODE_ENV = 'production'
    const error = new PolishedError(1, 'foo')
    expect(error.message).toBe(
      'An error occurred. See https://github.com/styled-components/polished/blob/main/src/internalHelpers/errors.json#1 for more information.',
    )
  })

  it('should throw an error with the correct message', () => {
    expect(() => {
      throw new PolishedError(1, 'foo')
    }).toThrow('Error 1: foo')
  })

  it('should work with no arguments', () => {
    const error = new PolishedError(1)
    expect(error.message).toBe('Error 1: undefined')
  })

  it('should throw an error with no arguments', () => {
    expect(() => {
      throw new PolishedError(1)
    }).toThrow('Error 1: undefined')
  })

  it('should throw an error with extra arguments', () => {
    expect(() => {
      throw new PolishedError(1, 'foo', 'bar')
    }).toThrow('Error 1: foo')
  })

  it('should throw an error with an invalid code', () => {
    expect(() => {
      throw new PolishedError(4, 'foo')
    }).toThrow('Error 4: undefined')
  })

  it('should throw an error with an invalid message', () => {
    expect(() => {
      throw new PolishedError(1, 'foo', 'bar')
    }).toThrow('Error 1: foo bar')
  })

  it('should throw an error with an invalid message and extra arguments', () => {
    expect(() => {
      throw new PolishedError(1, 'foo', 'bar', 'baz')
    }).toThrow('Error 1: foo bar')
  })

  it('should throw an error with an invalid message and no arguments', () => {
    expect(() => {
      throw new PolishedError(1)
    }).toThrow('Error 1: undefined')
  })

  it('should throw an error with an invalid message and an invalid code', () => {
    expect(() => {
      throw new PolishedError(4)
    }).toThrow('Error 4: undefined')
  })

  it('should throw an error with an invalid message and an invalid code and extra arguments', () => {
    expect(() => {
      throw new PolishedError(4, 'foo', 'bar', 'baz')
    }).toThrow('Error 4: undefined')
  })

  it('should throw an error with an invalid message and an invalid code and no arguments', () => {
    expect(() => {
      throw new PolishedError(4)
    }).toThrow('Error 4: undefined')
  })

  it('should throw an error with an invalid message and an invalid code and extra arguments', () => {
    expect(() => {
      throw new PolishedError(4, 'foo', 'bar', 'baz')
    }).toThrow('Error 4: undefined')
  })

  it('should throw an error with an invalid message and an invalid code and no arguments', () => {
    expect(() => {
      throw new PolishedError(4)
    }).toThrow('Error 4: undefined')
  })

  it('should throw an error with an invalid message and an invalid code and extra arguments', () => {
    expect(() => {
      throw new PolishedError(4, 'foo', 'bar', 'baz')
    }).toThrow('Error 4: undefined')
  })

  it('should throw an error with an invalid message and an invalid code and no arguments', () => {
    expect(() => {
      throw new PolishedError(4)
    }).toThrow('Error 4: undefined')
  })
})
