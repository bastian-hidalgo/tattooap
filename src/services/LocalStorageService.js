const base64 = require('./../utils/base64');

const tempStorage = {};

const encodeKey = (key) => base64.encode(key);

const decodeKey = (key) => base64.decode(key);

const getValue = (key) => {
  const encodedKey = encodeKey(key);
  let encodedValue = undefined;

  try {
    encodedValue = window.localStorage.getItem(encodedKey);
  } catch (e) {
    encodedValue = tempStorage[encodedKey];
  }
  const stringValue = encodedValue && decodeKey(encodedValue);

  return stringValue && JSON.parse(stringValue);
};

const setValue = (key, value) => {
  const encodedKey = encodeKey(key);
  const stringValue = JSON.stringify(value);
  const encodedValue = encodeKey(stringValue);

  try {
    window.localStorage.setItem(encodedKey, encodedValue);
  } catch (e) {
    tempStorage[encodedKey] = encodedValue;
  }
};

const removeValue = (key) => {
  const encodedKey = encodeKey(key);

  try {
    window.localStorage.removeItem(encodedKey);
  } catch (e) {
    tempStorage[encodedKey] = undefined;
  }
};

const defineProperty = (prop, defaultKey = '', tag = '') => {
  const projectName = `api-way-tattoo`.replace(/-/g, '_').toUpperCase();
  const capitalizedKey = `${prop[0].toUpperCase()}${prop.substring(1)}`;

  module.exports[`set${capitalizedKey}`] = (val, key = defaultKey) =>
    setValue(`@@${projectName}:${prop}${tag}${key}`, val);
  module.exports[`get${capitalizedKey}`] = (key = defaultKey) =>
    getValue(`@@${projectName}:${prop}${tag}${key}`);
  module.exports[`remove${capitalizedKey}`] = (key = defaultKey) =>
    removeValue(`@@${projectName}:${prop}${tag}${key}`);
};

// ------------------------------ LOCAL STORAGE PROPERTIES ------------------------------
defineProperty('accessToken');
