import stripUnit from '../stripUnit'

describe('stripUnit', () => {
  const units = [
    'px',
    'pt',
    'pc',
    'mm',
    'q',
    'cm',
    'in',
    'em',
    'rem',
    'ex',
    'ch',
    'vh',
    'vw',
    'vmin',
    'vmax',
    '%',
  ]
  const values = [1, 1.5, 100, 33.33, 80, 33.3]

  for (const unit of units) {
    for (const value of values) {
      it(`should strip ${unit} from ${value}`, () => {
        expect(stripUnit(`${value}${unit}`)).toEqual(value)
      })
    }
  }

  it('should return a unitless value when passed', () => {
    expect(stripUnit('33')).toEqual(33)
    expect(stripUnit(33)).toEqual(33)
  })

  it('should return the original string when passed an invalid value', () => {
    expect(stripUnit('blah')).toEqual('blah')
  })
})
