import errors from './errors.json'

/**
 * Create an error file out of errors.json for development and a simple web link to the full errors
 * in production mode.
 * @private
 */
export default class PolishedError extends Error {
  constructor(code: string | number, ...args: any[]) {
    const message =
      process.env.NODE_ENV === 'production'
        ? `An error occurred. See https://github.com/styled-components/polished/blob/main/src/internalHelpers/errors.json#${code} for more information.`
        : errors[String(code)].replace(/%[a-z]/, match => args.shift())

    super(message)
  }
}
