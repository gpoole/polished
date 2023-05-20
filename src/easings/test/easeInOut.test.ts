import easeInOut from '../easeInOut'
import { TimingFunction } from '../../types/timingFunction'

describe('easeInOut', () => {
  it('should return easeInOutBack cubic-bezier', () => {
    expect({
      'transition-timing-function': easeInOut('easeInOutBack'),
    }).toEqual({
      'transition-timing-function': 'cubic-bezier(0.680, -0.550, 0.265, 1.550)',
    })
  })

  it('should return easeInOutCirc cubic-bezier', () => {
    expect({
      'transition-timing-function': easeInOut('easeInOutCirc'),
    }).toEqual({
      'transition-timing-function': 'cubic-bezier(0.785,  0.135, 0.150, 0.860)',
    })
  })

  it('should return easeInOutCubic cubic-bezier', () => {
    expect({
      'transition-timing-function': easeInOut('easeInOutCubic'),
    }).toEqual({
      'transition-timing-function': 'cubic-bezier(0.645,  0.045, 0.355, 1.000)',
    })
  })

  it('should return easeInOutExpo cubic-bezier', () => {
    expect({
      'transition-timing-function': easeInOut('easeInOutExpo'),
    }).toEqual({
      'transition-timing-function': 'cubic-bezier(1.000,  0.000, 0.000, 1.000)',
    })
  })

  it('should return easeInOutQuad cubic-bezier', () => {
    expect({
      'transition-timing-function': easeInOut('easeInOutQuad'),
    }).toEqual({
      'transition-timing-function': 'cubic-bezier(0.455,  0.030, 0.515, 0.955)',
    })
  })

  it('should return easeInOutQuart cubic-bezier', () => {
    expect({
      'transition-timing-function': easeInOut('easeInOutQuart'),
    }).toEqual({
      'transition-timing-function': 'cubic-bezier(0.770,  0.000, 0.175, 1.000)',
    })
  })

  it('should return easeInOutQuint cubic-bezier', () => {
    expect({
      'transition-timing-function': easeInOut('easeInOutQuint'),
    }).toEqual({
      'transition-timing-function': 'cubic-bezier(0.860,  0.000, 0.070, 1.000)',
    })
  })

  it('should return undefined if invalid argument is provided', () => {
    expect({
      'transition-timing-function': easeInOut('invalidArgument' as TimingFunction),
    }).toEqual({
      'transition-timing-function': undefined,
    })
  })

  it('should return undefined if no argument is provided', () => {
    expect({
      'transition-timing-function': easeInOut(undefined),
    }).toEqual({
      'transition-timing-function': undefined,
    })
  })
})
