import easeIn from '../easeIn'
import { TimingFunction } from '../../types/timingFunction'

describe('easeIn', () => {
  it('should return easeInBack cubic-bezier', () => {
    expect({
      'transition-timing-function': easeIn('easeInBack'),
    }).toEqual({
      'transition-timing-function': 'cubic-bezier(0.600, -0.280, 0.735, 0.045)',
    })
  })

  it('should return easeInCirc cubic-bezier', () => {
    expect({
      'transition-timing-function': easeIn('easeInCirc'),
    }).toEqual({
      'transition-timing-function': 'cubic-bezier(0.600,  0.040, 0.980, 0.335)',
    })
  })

  it('should return easeInCubic cubic-bezier', () => {
    expect({
      'transition-timing-function': easeIn('easeInCubic'),
    }).toEqual({
      'transition-timing-function': 'cubic-bezier(0.550,  0.055, 0.675, 0.190)',
    })
  })

  it('should return easeInExpo cubic-bezier', () => {
    expect({
      'transition-timing-function': easeIn('easeInExpo'),
    }).toEqual({
      'transition-timing-function': 'cubic-bezier(0.950,  0.050, 0.795, 0.035)',
    })
  })

  it('should return easeInQuad cubic-bezier', () => {
    expect({
      'transition-timing-function': easeIn('easeInQuad'),
    }).toEqual({
      'transition-timing-function': 'cubic-bezier(0.550,  0.085, 0.680, 0.530)',
    })
  })

  it('should return easeInQuart cubic-bezier', () => {
    expect({
      'transition-timing-function': easeIn('easeInQuart'),
    }).toEqual({
      'transition-timing-function': 'cubic-bezier(0.895,  0.030, 0.685, 0.220)',
    })
  })

  it('should return easeInQuint cubic-bezier', () => {
    expect({
      'transition-timing-function': easeIn('easeInQuint'),
    }).toEqual({
      'transition-timing-function': 'cubic-bezier(0.755,  0.050, 0.855, 0.060)',
    })
  })

  it('should return easeInSine cubic-bezier', () => {
    expect({
      'transition-timing-function': easeIn('easeInSine'),
    }).toEqual({
      'transition-timing-function': 'cubic-bezier(0.470,  0.000, 0.745, 0.715)',
    })
  })

  it('should return undefined if invalid argument is provided', () => {
    expect({
      'transition-timing-function': easeIn('invalidArgument' as TimingFunction),
    }).toEqual({
      'transition-timing-function': undefined,
    })
  })

  it('should return undefined if no argument is provided', () => {
    expect({
      'transition-timing-function': easeIn(undefined),
    }).toEqual({
      'transition-timing-function': undefined,
    })
  })
})
