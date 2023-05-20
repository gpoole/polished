/**
 * Capitalizes the first character of the input string.
 * @param {string} str - The string to capitalize.
 * @returns {string} The input string with the first character capitalized.
 */
export default function capitalizeString(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1)
}
