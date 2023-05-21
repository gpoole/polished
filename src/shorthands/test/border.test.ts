import border from '../border'

describe('border', () => {
  it('properly returns separated border styles', () => {
    expect(border('1px', 'solid', 'red')).toEqual({
      borderColor: 'red',
      borderStyle: 'solid',
      borderWidth: '1px',
    })
  })

  it('properly returns separated border styles for a specific side', () => {
    expect(border('top', '1px', 'solid', 'red')).toEqual({
      borderTopColor: 'red',
      borderTopStyle: 'solid',
      borderTopWidth: '1px',
    })
  })

  it('properly returns separated border styles when passed a number for borderWidth', () => {
    expect(border(1, 'solid', 'red')).toEqual({
      borderColor: 'red',
      borderStyle: 'solid',
      borderWidth: 1,
    })
  })

  it('properly returns separated border styles for a specific side when passed a number for borderWidth', () => {
    expect(border('top', 1, 'solid', 'red')).toEqual({
      borderTopColor: 'red',
      borderTopStyle: 'solid',
      borderTopWidth: 1,
    })
  })

  it('properly returns separated border styles for a specific side when passed a string for borderWidth', () => {
    expect(border('top', '1px', 'solid', 'red')).toEqual({
      borderTopColor: 'red',
      borderTopStyle: 'solid',
      borderTopWidth: '1px',
    })
  })

  it('properly returns separated border styles when passed a string for borderWidth', () => {
    expect(border('1px', 'solid', 'red')).toEqual({
      borderColor: 'red',
      borderStyle: 'solid',
      borderWidth: '1px',
    })
  })

  it('properly returns separated border styles when passed a number for borderColor', () => {
    expect(border('1px', 'solid', 123)).toEqual({
      borderColor: 123,
      borderStyle: 'solid',
      borderWidth: '1px',
    })
  })

  it('properly returns separated border styles when passed a string for borderColor', () => {
    expect(border('1px', 'solid', 'red')).toEqual({
      borderColor: 'red',
      borderStyle: 'solid',
      borderWidth: '1px',
    })
  })

  it('properly returns separated border styles when passed a number for borderStyle', () => {
    expect(border('1px', 123, 'red')).toEqual({
      borderColor: 'red',
      borderStyle: 123,
      borderWidth: '1px',
    })
  })

  it('properly returns separated border styles when passed a string for borderStyle', () => {
    expect(border('1px', 'solid', 'red')).toEqual({
      borderColor: 'red',
      borderStyle: 'solid',
      borderWidth: '1px',
    })
  })

  it('properly returns separated border styles when passed a number for all properties', () => {
    expect(border(1, 2, 3)).toEqual({
      borderColor: 3,
      borderStyle: 2,
      borderWidth: 1,
    })
  })

  it('properly returns separated border styles when passed a string for all properties', () => {
    expect(border('1px', 'solid', 'red')).toEqual({
      borderColor: 'red',
      borderStyle: 'solid',
      borderWidth: '1px',
    })
  })

  it('properly returns separated border styles when passed a number for all properties and a side keyword', () => {
    expect(border('top', 1, 2, 3)).toEqual({
      borderTopColor: 3,
      borderTopStyle: 2,
      borderTopWidth: 1,
    })
  })

  it('properly returns separated border styles when passed a string for all properties and a side keyword', () => {
    expect(border('top', '1px', 'solid', 'red')).toEqual({
      borderTopColor: 'red',
      borderTopStyle: 'solid',
      borderTopWidth: '1px',
    })
  })

  it('properly returns separated border styles when passed a number for all properties and a non-side keyword', () => {
    expect(border('foo', 1, 2, 3)).toEqual({
      borderColor: 3,
      borderStyle: 2,
      borderWidth: 1,
    })
  })

  it('properly returns separated border styles when passed a string for all properties and a non-side keyword', () => {
    expect(border('foo', '1px', 'solid', 'red')).toEqual({
      borderColor: 'red',
      borderStyle: 'solid',
      borderWidth: '1px',
    })
  })
})
