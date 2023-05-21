import backgrounds from '../backgrounds'

describe('backgrounds', () => {
  it('should generate a single background from a parameter', () => {
    expect(backgrounds('url("/image/background.jpg")')).toEqual({
      background: 'url("/image/background.jpg")',
    })
  })

  it('should generate a multiple backgrounds from multiple parameters', () => {
    expect(
      backgrounds(
        'url("/image/background.jpg")',
        'linear-gradient(red, green)',
        'center no-repeat',
      ),
    ).toEqual({
      background: 'url("/image/background.jpg"), linear-gradient(red, green), center no-repeat',
    })
  })

  it('should generate a single background from a parameter with spaces', () => {
    expect(backgrounds('url("/image/background with spaces.jpg")')).toEqual({
      background: 'url("/image/background with spaces.jpg")',
    })
  })

  it('should generate a multiple backgrounds from multiple parameters with spaces', () => {
    expect(
      backgrounds(
        'url("/image/background with spaces.jpg")',
        'linear-gradient(red, green)',
        'center no-repeat',
      ),
    ).toEqual({
      background:
        'url("/image/background with spaces.jpg"), linear-gradient(red, green), center no-repeat',
    })
  })

  it('should generate a single background from a parameter with quotes', () => {
    expect(backgrounds('url("/image/background\'s.jpg")')).toEqual({
      background: 'url("/image/background\'s.jpg")',
    })
  })

  it('should generate a multiple backgrounds from multiple parameters with quotes', () => {
    expect(
      backgrounds(
        'url("/image/background\'s.jpg")',
        'linear-gradient(red, green)',
        'center no-repeat',
      ),
    ).toEqual({
      background: 'url("/image/background\'s.jpg"), linear-gradient(red, green), center no-repeat',
    })
  })
})
