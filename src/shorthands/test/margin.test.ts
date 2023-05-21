import margin from '../margin'

describe('margin', () => {
  it('properly applies a value when passed only one', () => {
    expect(margin('12px')).toEqual({
      marginBottom: '12px',
      marginLeft: '12px',
      marginRight: '12px',
      marginTop: '12px',
    })
  })

  it('properly applies values when passed two', () => {
    expect(margin('12px', '24px')).toEqual({
      marginBottom: '12px',
      marginLeft: '24px',
      marginRight: '24px',
      marginTop: '12px',
    })
  })

  it('properly applies values when passed three', () => {
    expect(margin('12px', '24px', '36px')).toEqual({
      marginBottom: '36px',
      marginLeft: '24px',
      marginRight: '24px',
      marginTop: '12px',
    })
  })

  it('properly applies values when passed four', () => {
    expect(margin('12px', '24px', '36px', '48px')).toEqual({
      marginBottom: '36px',
      marginLeft: '48px',
      marginRight: '24px',
      marginTop: '12px',
    })
  })

  it('properly applies values when passed four as numbers', () => {
    expect(margin(12, 24, 36, 48)).toEqual({
      marginBottom: 36,
      marginLeft: 48,
      marginRight: 24,
      marginTop: 12,
    })
  })

  it('properly applies values when passed null', () => {
    expect(margin(null, '24px', null, '48px')).toEqual({
      marginBottom: null,
      marginLeft: '48px',
      marginRight: '24px',
      marginTop: null,
    })
  })

  it('properly applies values when passed undefined', () => {
    expect(margin(undefined, '24px', undefined, '48px')).toEqual({
      marginBottom: undefined,
      marginLeft: '48px',
      marginRight: '24px',
      marginTop: undefined,
    })
  })
})
