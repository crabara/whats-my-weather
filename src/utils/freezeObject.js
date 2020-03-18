/**
 *
 * @param {Boolean} isSymbol: Whether or not values should be Symbols
 * typically because of annoyance with configuring redux-dev-tools to serialize
 * actions dispatched with symbols as value.
 * @param  {...<String>} keys: Array of strings that represent the keys and their values
 */
const freezeObject = (isSymbol = false, ...keys) => {
  return Object.freeze(
    keys.reduce((obj, key) => {
      obj[key] = !isSymbol ? key : Symbol(key);
      return obj;
    }, {}),
  );
};

export default freezeObject;
