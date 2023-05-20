import pixelsto from '../internalHelpers/_pxto'

/**
 * Convert pixel value to ems. The default base value is 16px, but can be changed by passing a
 * second argument to the function.
 * @param pxval - Pixel value to convert to ems.
 * @param [base='16px'] - Base pixel value for the conversion, defaults to 16px.
 * @returns The pixel value converted to ems.
 * @example
 * // Styles as object usage
 * const styles = {
 *   'height': em('16px')
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   height: ${em('16px')}
 * `
 *
 * // CSS in JS Output
 *
 * element {
 *   'height': '1em'
 * }
 */
const em = (value: string | number, base: string | number = '16px'): string =>
  pixelsto('em')(value, base)

export default em
