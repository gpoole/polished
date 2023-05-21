import { InteractionState } from '../types/interactionState'

class PolishedError extends Error {
  constructor(code: number) {
    super(`PolishedError ${code}`)
  }
}

function generateSelectors(
  template: (stateSuffix: string) => string,
  state?: InteractionState,
): string {
  const stateSuffix = state ? `:${state}` : ''
  return template(stateSuffix)
}

function statefulSelectors(
  states: InteractionState[],
  template: (stateSuffix: string) => string,
  stateMap?: InteractionState[],
): string {
  if (!template) throw new PolishedError(67)
  const invalidStates = states.filter(state => !stateMap?.includes(state))
  if (invalidStates.length) throw new PolishedError(68)
  return states.map(state => generateSelectors(template, state)).join(',')
}

export default statefulSelectors
