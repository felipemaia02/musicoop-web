module.exports = {
    root: true,
    env: {
      node: true,
    },
    extends: [
      'plugin:vue/essential',
      '@vue/airbnb',
    ],
    parserOptions: {
      ecmaVersion: 2020,
    },
    rules: {
      'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      "space-before-blocks": "off",
      quotes: "off",
      "no-extra-semi": "off",
      semi: "off",
      "import/no-extraneous-dependencies": ["error", { devDependencies: true }],
      "import/prefer-default-export": "off",
      'prefer-template': 'off',
      'no-else-return': 'off',
      'no-undef': 'off',
      'no-explicit-any': 'off',
      'import/no-named-as-default': 'off',
      'max-len': [2, 150, 4],
      'import/no-mutable-exports': 'off',
      'no-const-assign': 'off',
      'no-use-before-define': 'off',
      'import/no-cycle': 'off',
      'function-paren-newline': 'off',
      'comma-dangle': 'off',
      'implicit-arrow-linebreak': 'off',
      'operator-linebreak': 'off',
      'singleQuote': 'off', 
    },
  };
  