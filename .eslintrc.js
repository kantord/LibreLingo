module.exports = {
  parser: "@typescript-eslint/parser",
  ignorePatterns: [
    "node_modules/",
    "dist",
    "__sapper__",
    "build",
    "jest-coverage",
    "coverage",
  ],
  env: {
    browser: true,
    es6: true,
    node: true,
    "jest/globals": true,
    "cypress/globals": true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
    process: true,
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    extraFileExtensions: [".svelte"],
  },
  plugins: ["svelte3", "jest", "cypress", "@typescript-eslint", "prettier"],
  overrides: [
    {
      files: ["**/*.svelte"],
      processor: "svelte3/svelte3",
      rules: {
        "import/first": "off",
        "import/no-duplicates": "off",
        "import/no-mutable-exports": "off",
        "import/no-unresolved": "off",
      },
    },
  ],
  rules: {
    "prettier/prettier": ["error", { semi: false }],
    "@typescript-eslint/no-unused-vars": "error",
    "linebreak-style": ["error", "unix"],
  },
  settings: {
    "svelte3/ignore-styles": () => true,
    "svelte3/typescript": require("typescript"),
  },
}
