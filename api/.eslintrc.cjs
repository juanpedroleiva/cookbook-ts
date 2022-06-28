module.exports = {
    env: {
        browser: false,
        es2022: true,
        node: true,
    },
    parser: '@typescript-eslint/parser',
    plugins: ['prettier', 'import', '@typescript-eslint', 'jest'],
    overrides: [
        {
            files: ['*.ts', '*.tsx'],
            extends: ['airbnb-typescript/base', 'plugin:@typescript-eslint/eslint-recommended', 'plugin:@typescript-eslint/recommended', 'plugin:jest/recommended', 'prettier'],
            parserOptions: {
                project: ['./tsconfig.json'], // Only for TypeScript files
                tsconfigRootDir: __dirname
            },
            rules: {
                'max-len': ["error", { "code": 100 }],
                semi: ['error'],
                'no-unused-vars': 'off',
                '@typescript-eslint/no-unused-vars': 'off',
                'no-console': 'off',
                'prettier/prettier': 'off',
            },
        },
    ],
};
