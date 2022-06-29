module.exports = {
    env: {
        browser: false,
        es2022: true,
        node: true,
    },
    parser: '@typescript-eslint/parser',
    plugins: ['prettier', 'import', '@typescript-eslint', 'mocha'],
    overrides: [
        {
            files: ['*.ts', '*.tsx'],
            extends: ['airbnb-typescript/base', 'plugin:@typescript-eslint/eslint-recommended', 'plugin:@typescript-eslint/recommended', 'prettier', 'plugin:mocha/recommended'],
            parserOptions: {
                sourceType: "module",
                project: ['./tsconfig.json', './tsconfig.eslint.json'], // Only for TypeScript files
                tsconfigRootDir: __dirname
            },
            rules: {
                'max-len': ["error", { "code": 100 }],
                semi: ['error'],
                'mocha/no-mocha-arrows': 'off',
                'no-unused-vars': 'off',
                '@typescript-eslint/no-unused-vars': 'off',
                'no-console': 'off',
                'prettier/prettier': 'off',
                "import/no-extraneous-dependencies": ["error", {"devDependencies": true}]
            },
        },
    ],
};
