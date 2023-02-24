module.exports = {
  root: true,
  extends: ['prettier', 'eslint:recommended', 'plugin:react/recommended'],
  parserOptions: {
    ecmaVersion: 'latest',
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: 'module',
  },
  plugins: ['react', 'prettier', 'import'],
  rules: {
    'react/jsx-uses-react': 'warn',
    'react/jsx-fragments': 'warn',
    'no-unused-vars': 'warn',
    'react/jsx-uses-vars': 'warn',
    'import/order': 'warn',
    'prettier/prettier': 'warn',
    'react/display-name': 'off',
    'no-shadow': 'off',
    'no-empty-pattern': 'warn',
    'react/no-unescaped-entities': 'off',
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    radix: 'off',
  },
  settings: {
    react: {
      version: '17.0.1',
    },
  },
  globals: {
    setTimeout: false,
    document: false,
    localStorage: false,
    clearInterval: false,
    setInterval: false,
    process: false,
    FormData: false,
    window: false,
    Promise: false,
    chrome: false,
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
}
