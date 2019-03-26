/**
 * Ease way to assert styles in an obj
 * @param {Object} obj = { address: "0x12345" }
 * @param {Object} referenceTypes = { address: "0x" }
 * @param {String} id: to make errors more comprehensive
 */
export function assertObjTypes(obj, referenceTypes, id = "Obj") {
  Object.getOwnPropertyNames(referenceTypes).forEach(key => {
    if (!sameType(obj[key], referenceTypes[key])) {
      throw Error(
        `${id} prop ${key} must be like ${
          referenceTypes[key]
        } (${typeof referenceTypes[key]}), instead is: ${
          obj[key]
        } (${typeof obj[key]})`
      );
    }
  });
}

/**
 * Ease way to assert styles in a reducer
 *   case t.MY_ACTION:
 *     assertAction(action, { id: "someId", data: {} });
 *     return { ...state, [action.id]: action.data };
 * @param {Object} action
 * @param {Object} referenceTypes
 */
export function assertAction(action, referenceTypes) {
  assertObjTypes(action, referenceTypes, `action ${action.type}`);
}

export function toLowercase(s) {
  return s ? s.toLowerCase() : s;
}

/**
 * Compares types while differentiating arrays from objects
 * @param {Any} a
 * @param {Any} b
 */
function sameType(a, b) {
  if (
    (Array.isArray(a) && !Array.isArray(b)) ||
    (Array.isArray(b) && !Array.isArray(a))
  ) {
    return false;
  }
  return typeof a === typeof b;
}
