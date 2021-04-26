module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 9,
    sourceType: 'module',
  },
  plugins: ['react', 'react-hooks'],
  parser: 'babel-eslint',

  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/jsx-props-no-spreading': 'off',
    'react-hooks/rules-of-hooks': 'error', // added "react-hooks/rules-of-hooks"
    'react-hooks/exhaustive-deps': 'warn',
    'jsx-quotes': 'off',
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
      },
    },
  },
};
