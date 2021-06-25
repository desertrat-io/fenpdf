/**
 *
 * @param {Boolean} condition
 * @param {Object|Function} ErrorClass
 * @param args
 */
export function throwIf(condition, ErrorClass, ...args) {
    if (condition) {
        throw new ErrorClass(args);
    }
}

/**
 *
 * @param {Boolean} condition
 * @param {Object|Function} ErrorClass
 * @param args
 */
export function throwUnless(condition, ErrorClass, ...args) {
    throwIf(!condition, ErrorClass, args);
}
