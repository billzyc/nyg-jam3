/**
 * Wait a specific amount of time and return a promise
 * Promisified setTimeout
 *
 * @export
 * @param {number} [ms=0]
 * @returns {Promise}
 */
export function wait(ms: number = 0): Promise<any> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Noop function to reuse in function definitions
 *
 * @export
 */
export function noop(): void {}

/**
 * Prevent event, includes preventDefault and stopPropagation
 *
 * @export
 * @param {any} e
 * @param {boolean} [preventDefault=true]
 * @param {boolean} [stopPropagation=true]
 */
export function preventEvent(
  e: SyntheticEvent<*>,
  preventDefault: boolean = true,
  stopPropagation: boolean = true
): void {
  preventDefault && e.preventDefault();
  stopPropagation && e.stopPropagation();
}