module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true
  },
  globals: {
    "$": true,
    "_": true,
    "moment": true
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential',
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  rules: {
    "comma-dangle": ["warn", "always-multiline"],
    "indent": ["warn", 2],
    "linebreak-style": ["warn", "unix"],
    "quotes": ["warn", "double"],
    "semi": ["warn", "always"],
    "no-unused-vars": ["warn"],
    "no-console": 0,
    "no-new": 0,
    "space-before-function-paren": 0
  },
};
