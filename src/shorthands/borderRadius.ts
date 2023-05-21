import capitalizeString from '../internalHelpers/_capitalizeString'
import PolishedError from '../internalHelpers/_errors'

import type { Styles } from '../types/style'
import type { SideKeyword } from '../types/sideKeyword'

/**
 * Shorthand that accepts a value for side and a value for radius and applies the radius value to both corners of the side.
 * @example
 * // Styles as object usage
 * const styles: Styles = {
 *   ...borderRadius('top', '5px')
 * }
 *
 * // styled-components usage
 * const Div = styled.div`
 *   ${borderRadius('top', '5px')}
 * `
 *
 * // CSS as JS Output
 *
 * Div {
 *   'borderTopRightRadius': '5px',
 *   'borderTopLeftRadius': '5px',
 * }
 */
export default function borderRadius(side: SideKeyword, radius: string | number): Styles {
  const uppercaseSide = capitalizeString(side)
  if (!radius && radius !== 0) {
    throw new PolishedError(62)
  }
  if (uppercaseSide === 'Top' || uppercaseSide === 'Bottom') {
    return {
      [`border${uppercaseSide}RightRadius`]: radius,
      [`border${uppercaseSide}LeftRadius`]: radius,
    }
  }

  if (uppercaseSide === 'Left' || uppercaseSide === 'Right') {
    return {
      [`borderTop${uppercaseSide}Radius`]: radius,
      [`borderBottom${uppercaseSide}Radius`]: radius,
    }
  }

  throw new PolishedError(63)
}
