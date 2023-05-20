import easeOut from '../easeOut'
import { TimingFunction } from '../../types/timingFunction'

describe('easeOut', () => {
  it('should return easeOutBack cubic-bezier', () => {
    expect({
      'transition-timing-function': easeOut('easeOutBack'),
    }).toEqual({
      'transition-timing-function': 'cubic-bezier(0.175,  0.885, 0.320, 1.275)',
    })
  })

  it('should return easeOutCirc cubic-bezier', () => {
    expect({
      'transition-timing-function': easeOut('easeOutCirc'),
    }).toEqual({
      'transition-timing-function': 'cubic-bezier(0.075,  0.820, 0.165, 1.000)',
    })
  })

  it('should return easeOutCubic cubic-bezier', () => {
    expect({
      'transition-timing-function': easeOut('easeOutCubic'),
    }).toEqual({
      'transition-timing-function': 'cubic-bezier(0.215,  0.610, 0.355, 1.000)',
    })
  })

  it('should return easeOutExpo cubic-bezier', () => {
    expect({
      'transition-timing-function': easeOut('easeOutExpo'),
    }).toEqual({
      'transition-timing-function': 'cubic-bezier(0.190,  1.000, 0.220, 1.000)',
    })
  })

  it('should return easeOutQuad cubic-bezier', () => {
    expect({
      'transition-timing-function': easeOut('easeOutQuad'),
    }).toEqual({
      'transition-timing-function': 'cubic-bezier(0.250,  0.460, 0.450, 0.940)',
    })
  })

  it('should return easeOutQuart cubic-bezier', () => {
    expect({
      'transition-timing-function': easeOut('easeOutQuart'),
    }).toEqual({
      'transition-timing-function': 'cubic-bezier(0.165,  0.840, 0.440, 1.000)',
    })
  })

  it('should return easeOutQuint cubic-bezier', () => {
    expect({
      'transition-timing-function': easeOut('easeOutQuint'),
    }).toEqual({
      'transition-timing-function': 'cubic-bezier(0.230,  1.000, 0.320, 1.000)',
    })
  })

  it('should return undefined if invalid argument is provided', () => {
    expect({
      'transition-timing-function': easeOut('invalidArgument' as TimingFunction),
    }).toEqual({
      'transition-timing-function': undefined,
    })
  })

  it('should return undefined if no argument is provided', () => {
    expect({
      'transition-timing-function': easeOut(undefined),
    }).toEqual({
      'transition-timing-function': undefined,
    })
  })
})
