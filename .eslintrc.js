module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-s
  // tyle
  extends: 'standard',
  // required to lint *.vue files
  plugins: ['html'],
  // add your custom rules here
  'rules': {
    'comma-dangle': ['error', 'never'],
    "no-with": "error",
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
  }
}
