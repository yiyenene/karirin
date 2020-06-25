module.exports = {
    env: {
        browser: true,
        node: true,
        commonjs: true,
        es6: true
    },
    extends: ["eslint:recommended", "plugin:prettier/recommended"],
    plugins: ["@typescript-eslint", "react-hooks"],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        sourceType: "module"
    },
    rules: {
        // interface や jsx をうまく扱えないので off にして noUnusedLocals を tsconfig で有効化
        "no-unused-vars": "off",
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "warn",
    },
    globals: {
        google: true
    }
};
