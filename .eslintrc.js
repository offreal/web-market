module.exports = {
  extends: [
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
  ],
  env: {
    es6: true,
    node: true,
    browser: true,
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 8,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  ignorePatterns: ['/node_modules/**', '/build/**'],
  rules: {
    'no-unused-vars': ['warn', { args: 'none', argsIgnorePattern: 'req|res|next|val' }],
    'prettier/prettier': ['error'],
    'react/prop-types': ['off'],
    'react/react-in-jsx-scope': ['off'],
    'no-unsafe-optional-chaining': ['off'],
    'no-restricted-properties': [
      2,
      {
        object: 'disallowedObjectName',
        property: 'disallowedPropertyName',
      },
    ],
    'max-len': ['error', { code: 100 }],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
}
