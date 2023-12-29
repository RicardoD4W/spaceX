// .prettierrc.mjs
/** @type {import("prettier").Config} */
export default {
    plugins: ['prettier-plugin-astro'],
    overrides: [
        {
            files: '*.astro',
            options: {
                trailingComma: "es5",
                tabWidth: 2,
                semi: false,
                singleQuote: true,
                jsxSingleQuote: true,
                bracketSpacing: true,
                singleAttributePerLine: true,
                printWidth: 80
            },

        },
    ],
};