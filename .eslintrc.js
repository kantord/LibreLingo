module.exports = {
    ignorePatterns: ["node_modules/"],
    env: {
        browser: true,
        es6: true,
        "jest/globals": true
    },
    extends: "eslint:recommended",
    globals: {
        Atomics: "readonly",
        SharedArrayBuffer: "readonly",
        process: true
    },
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: "module"
    },
    plugins: ["svelte3", "jest"],
    overrides: [
        {
            files: ["**/*.svelte"],
            processor: "svelte3/svelte3"
        }
    ],
    rules: {
        indent: ["error", 4],
        "linebreak-style": ["error", "unix"],
        quotes: ["error", "double"],
        semi: ["error", "never"]
    }
}
