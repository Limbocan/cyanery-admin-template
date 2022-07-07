module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'standard',
    'plugin:vue/vue3-recommended'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  plugins: [
    'vue',
    '@typescript-eslint'
  ],
  rules: {
    'vue/no-mutating-props': 0,
    'vue/multi-word-component-names': 0,
    'no-unused-vars': 1,
    'no-debugger': 0,
    'comma-dangle': 0,
    'space-before-function-paren': 0,
  }
}
