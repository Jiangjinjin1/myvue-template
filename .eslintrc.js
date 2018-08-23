module.exports = {
  root: true,
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      experimentalObjectRestSpread: true
    }
  },
  env: {
    browser: true,
    node: true
  },
  extends: 'standard',
  plugins: [
    'vuefix',
    'html'
  ],
  "parser": "babel-eslint",
  'rules': {
    'arrow-parens': 0,
    'generator-star-spacing': 0,
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'no-console': 1,
    "indent": [2, "tab"],
    "no-tabs": 0,
    "vuefix/vuefix": [2, {"auto": true}],
    "camelcase":0,
    //关闭禁止混用tab和空格
    "no-mixed-spaces-and-tabs": [0],
  }
}