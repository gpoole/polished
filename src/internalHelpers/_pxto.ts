import endsWith from './_endsWith'
import stripUnit from '../helpers/stripUnit'
import PolishedError from './_errors'

/**
 * Factory function that creates pixel-to-x converters
 * @private
 */
const pxtoFactory =
  (to: string) =>
  (pxval: string | number, base: string | number = '16px'): string => {
    const newPxval = typeof pxval === 'string' && endsWith(pxval, 'px') ? stripUnit(pxval) : pxval
    const newBase = typeof base === 'string' && endsWith(base, 'px') ? stripUnit(base) : base

    if (typeof newPxval !== 'number') {
      throw new PolishedError(71, pxval, to)
    }

    if (typeof newBase !== 'number') {
      throw new PolishedError(72, base, to)
    }

    return `${newPxval / newBase}${to}`
  }

export default pxtoFactory
