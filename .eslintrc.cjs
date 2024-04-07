module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'airbnb',
    'airbnb-typescript',
    'plugin:@typescript-eslint/recommended-type-checked',
    'plugin:@typescript-eslint/stylistic-type-checked',
    'plugin:@stencil-community/recommended',
    'plugin:storybook/recommended',
    'prettier',
  ],
  ignorePatterns: ['!.storybook', 'dist', 'loader', 'www', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: 'module',
    project: ['tsconfig.json'],
  },
  plugins: [],
  settings: {
    react: {
      version: '999.999.999',
    },
  },
  rules: {
    '@stencil-community/strict-boolean-conditions': 'off',
    '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
    '@typescript-eslint/consistent-type-imports': [
      'error',
      {
        fixMixedExportsWithInlineTypeSpecifier: true,
      },
    ],
    '@typescript-eslint/consistent-type-imports': [
      'error',
      {
        prefer: 'type-imports',
        fixStyle: 'inline-type-imports',
      },
    ],
    '@typescript-eslint/no-import-type-side-effects': 'error',
    '@typescript-eslint/no-unsafe-return': 'off',
    'arrow-body-style': 'off',
    'class-methods-use-this': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/prefer-default-export': 'off',
    'no-plusplus': 'off',
    'no-void': ['error', { allowAsStatement: true }],
    'react/no-unknown-property': 'off',
    'react/react-in-jsx-scope': 'off',
  },
};
