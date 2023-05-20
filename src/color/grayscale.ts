import parseToHsl from './parseToHsl'
import toColorString from './toColorString'

/**
 * Converts the color to grayscale by reducing its saturation to 0.
 *
 * @example
 * // Styles as object usage
 * const styles = {
 *   background: grayscale('#CCCD64'),
 *   background: grayscale('rgba(204,205,100,0.7)'),
 * }
 *
 * // styled-components usage
 * const div = styled.div`
 *   background: ${grayscale('#CCCD64')};
 *   background: ${grayscale('rgba(204,205,100,0.7)')};
 * `
 *
 * // CSS in JS Output
 * element {
 *   background: "#999";
 *   background: "rgba(153,153,153,0.7)";
 * }
 */
export default function grayscale(color: string): string {
  if (color === 'transparent') return color
  const hslColor = parseToHsl(color)
  hslColor.saturation = 0
  return toColorString(hslColor)
}
