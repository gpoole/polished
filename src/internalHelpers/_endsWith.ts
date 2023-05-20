/**
 * Check if a string ends with something
 * @private
 */
export default function endsWith(string: string, suffix: string): boolean {
  return string.slice(-suffix.length) === suffix
}
