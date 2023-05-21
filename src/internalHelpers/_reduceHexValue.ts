/**
 * Reduces hex values if possible e.g. #ff8866 to #f86
 * @private
 */
const reduceHexValue = (value: string): string => {
  const match = value.match(/^#(.)\1(.)\2(.)\3$/)
  if (match) {
    return `#${match[1]}${match[2]}${match[3]}`
  }
  return value
}

export default reduceHexValue
