// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

module.exports = {
  parser: '@typescript-eslint/parser',
  root: true,
  env: {
    es6: true,
    browser: true,
  },
  plugins: ['prettier', 'import', '@typescript-eslint', 'react-hooks'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:react-hooks/recommended',
    // Make sure that prettier is always the last rule
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    project: path.resolve(__dirname, 'tsconfig.json'),
    jsx: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.spec.ts', '.ts', '.tsx', '.js'],
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        project: path.resolve(__dirname, 'tsconfig.json'),
      },
      node: {
        paths: [path.resolve(__dirname)],
      },
    },
    'import/extensions': ['.js', '.jsx', '.ts', '.spec.ts', '.tsx'],
  },
  rules: {
    '@typescript-eslint/no-unused-vars': ['warn', { ignoreRestSiblings: true }],
    eqeqeq: 'warn',
    'import/no-cycle': 'off',
    'prettier/prettier': 'error',
    'import/prefer-default-export': 'warn',
    'jsx-a11y/anchor-is-valid': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/control-has-associated-label': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'no-console': 'off',
    'no-plusplus': 'off',
    'react/prop-types': 'off',
    'react-hooks/exhaustive-deps': 'off',
    'react/forbid-prop-types': 'off',
    'max-len': 'off',
    'react-hooks/rules-of-hooks': 'warn',
    'react/self-closing-comp': 'error',
  },
};
