/** @type {import('eslint').Linter.Config} */

const config = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json']
  },
  plugins: ['@typescript-eslint', 'react', 'prettier'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'react-app',
    'plugin:prettier/recommended'
  ],
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
    jest: true
  },
  rules: {
    '@typescript-eslint/no-unused-vars': 'error',
    'import/no-unresolved': 'error'
  },
  overrides: [
    {
      files: ['**/*.test.{ts,tsx}', '*.config.ts', '*.config.js'],
      rules: {
        '@typescript-eslint/no-unsafe-call': 'off',
        '@typescript-eslint/no-unsafe-assignment': 'off',
        '@typescript-eslint/no-unsafe-member-access': 'off',
        '@typescript-eslint/no-unsafe-argument': 'off'
      }
    }
  ],
  settings: {
    'import/resolver': {
      typescript: {}
    }
  }
};

module.exports = config;
