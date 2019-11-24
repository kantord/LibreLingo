module.exports = {
    env: {
        browser: true,
        es6: true
    },
    extends: "eslint:recommended",
    globals: {
        Atomics: "readonly",
        SharedArrayBuffer: "readonly"
    },
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: "module"
    },
    plugins: ["svelte3"],
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
