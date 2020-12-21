module.exports = {
    ignorePatterns: ["node_modules/"],
    env: {
        browser: true,
        es6: true,
        node: true,
        "jest/globals": true,
        "cypress/globals": true,
    },
    extends: ["eslint:recommended"],
    globals: {
        Atomics: "readonly",
        SharedArrayBuffer: "readonly",
        process: true,
    },
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: "module",
    },
    plugins: ["svelte3", "jest", "cypress"],
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
        indent: ["error", 4],
        "linebreak-style": ["error", "unix"],
        quotes: ["error", "double"],
        semi: ["error", "never"],
    },
    settings: {
        "svelte3/ignore-styles": () => true,
    },
}

