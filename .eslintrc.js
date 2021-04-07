module.exports = {
    parser: "@typescript-eslint/parser",
    ignorePatterns: ["node_modules/"],
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
    plugins: ["svelte3", "jest", "cypress", "@typescript-eslint"],
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
        "@typescript-eslint/no-unused-vars": "error",
        indent: ["error", 4],
        "linebreak-style": ["error", "unix"],
        quotes: ["error", "double"],
        semi: ["error", "never"],
    },
    settings: {
        "svelte3/ignore-styles": () => true,
        "svelte3/typescript": require("typescript"),
    },
}

