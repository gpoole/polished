import directionalProperty from '../helpers/directionalProperty'

import type { Styles } from '../types/style'

/**
 * Shorthand that accepts up to four values, including null to skip a value, and maps them to their respective directions.
 * @example
 * // Styles as object usage
 * const styles: Styles = {
 *   ...borderStyle('solid', 'dashed', 'dotted', 'double')
 * }
 *
 * // styled-components usage
 * const Div = styled.div`
 *   ${borderStyle('solid', 'dashed', 'dotted', 'double')}
 * `
 *
 * // CSS as JS Output
 *
 * Div {
 *   'borderTopStyle': 'solid',
 *   'borderRightStyle': 'dashed',
 *   'borderBottomStyle': 'dotted',
 *   'borderLeftStyle': 'double'
 * }
 */
export default function borderStyle(...values: (string | null | undefined)[]): Styles {
  return directionalProperty(
    'borderStyle',
    ...values.filter((value): value is string => value !== null && value !== undefined),
  )
}
