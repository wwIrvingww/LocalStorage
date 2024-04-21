// This is the main ESLint configuration file for the project.
// It sets up the rules and options for ESLint to follow when analyzing the code.

module.exports = {

  // Specifies the root directory of the project.
  root: true,

  // Sets the environment variables that ESLint should take into account.
  // In this case, the code will be executed in a browser environment and support ES2020 features.
  env: { browser: true, es2020: true },

  // Extends recommended rules and configurations from ESLint and various plugins.
  extends: [
    'eslint:recommended', // Enables ESLint's recommended rules.
    'plugin:react/recommended', // Enables React's recommended rules.
    'plugin:react/jsx-runtime', // Enables rules for using JSX runtime.
    'plugin:react-hooks/recommended', // Enables rules for using React Hooks.
  ],

  // Ignores certain files and directories during analysis.
  ignorePatterns: ['dist', '.eslintrc.cjs'],

  // Sets the parser options for ESLint.
  parserOptions: {
    ecmaVersion: 'latest', // Enables the latest ECMAScript features.
    sourceType: 'module', // Enables using ES6 module syntax.
  },

  // Configures settings for React.
  settings: {
    react: {
      version: '18.2', // Sets the version of React to use for rules that depend on it.
    },
  },

  // Enables the 'react-refresh' plugin for faster development cycles.
  plugins: ['react-refresh'],

  // Defines custom rules for ESLint to follow.
  rules: {
    // Add any custom rules here.
  },

};

