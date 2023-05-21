import statefulSelectors from '../_statefulSelectors'
import { InteractionState } from '../../types/interactionState'

const mockStateMap: InteractionState[] = [undefined, ':before', ':after']

function mockTemplate(pseudoSelector: string): string {
  return `section a${pseudoSelector},
  p a${pseudoSelector}`
}

describe('statefulSelectors', () => {
  it('populates selectors for a single state', () => {
    expect(statefulSelectors([':before'], mockTemplate, mockStateMap)).toEqual(`section a::before,
  p a::before`)
  })

  it('populates selectors for multiple states', () => {
    expect(statefulSelectors([':before', ':after'], mockTemplate, mockStateMap))
      .toEqual(`section a::before,
  p a::before,section a::after,
  p a::after`)
  })

  it('populates both base selectors and selectors for a single state', () => {
    expect(statefulSelectors([undefined, ':after'], mockTemplate, mockStateMap)).toEqual(`section a,
  p a,section a::after,
  p a::after`)
  })

  it('populates both base selectors and selectors for a single state when not passed a stateMap', () => {
    expect(statefulSelectors([undefined, ':after'], mockTemplate)).toEqual(`section a,
  p a,section a::after,
  p a::after`)
  })

  it('throws an error when passed an unsupported selector state', () => {
    expect(() => {
      statefulSelectors([':visited'], mockTemplate, mockStateMap)
    }).toThrow('You passed an unsupported selector state to this method')
  })

  it('throws an error when passed an unsupported selector state in a list', () => {
    expect(() => {
      statefulSelectors(['hover', ':visited'], mockTemplate, mockStateMap)
    }).toThrow('You passed an unsupported selector state to this method')
  })

  it('throws an error when not passed a template', () => {
    expect(() => {
      // @ts-expect-error
      statefulSelectors([':visited'])
    }).toThrow('You must provide a template to this method.')
  })
})
