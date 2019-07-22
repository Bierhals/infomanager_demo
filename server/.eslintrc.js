module.exports = {
  extends: 'airbnb-typescript/base',
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  rules: {
    'no-underscore-dangle': ["error", { "allow": ["_embedded"] }]
  },
};
