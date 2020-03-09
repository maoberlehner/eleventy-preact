module.exports = {
  root: true,
  extends: [
    `preact`,
    `@avalanche/eslint-config`,
  ],
  rules: {
    'no-console': process.env.NODE_ENV === `production` ? `error` : `warn`,
    'no-debugger': process.env.NODE_ENV === `production` ? `error` : `warn`,
    'no-underscore-dangle': `off`,
  },
  parserOptions: {
    ecmaVersion: 2020,
    parser: `babel-eslint`,
  },
};
