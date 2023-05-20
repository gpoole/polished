import constructGradientValue from '../_constructGradientValue'

describe('constructGradientValue', () => {
  it('constructs a gradient value', () => {
    const literals = ['literal1', 'literal2']
    const substitutions = ['substitution1', 'substitution2']
    expect(constructGradientValue(literals, ...substitutions)).toEqual(
      'literal1substitution1 literal2, substitution2',
    )
  })

  it('constructs a gradient value without trailing space if color-stops is the only param provided', () => {
    const literals = ['literal1', 'literal2']
    const substitutions = ['', 'substitution2']
    expect(constructGradientValue(literals, ...substitutions)).toEqual(
      'literal1literal2substitution2',
    )
  })

  it('constructs a gradient value with no substitutions', () => {
    const literals = ['literal1', 'literal2']
    const substitutions: string[] = []
    expect(constructGradientValue(literals, ...substitutions)).toEqual('literal1literal2')
  })
})
