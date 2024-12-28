/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').PluginOptions} */
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  endOfLine: "lf",
  semi: false,
  singleQuote: false,
  tabWidth: 2,
  trailingComma: "es5",
  importOrder: [
    // React imports
    "^(react/(.*)$)|^(react$)",
    // Next.js imports
    "^(next/(.*)$)|^(next$)",
    // Third-party imports
    "<THIRD_PARTY_MODULES>",
    "",
    // Custom types
    "^types$",
    // Module imports from our project
    "^@/types/(.*)$", // types
    "^@/config/(.*)$", // config
    "^@/lib/(.*)$", // lib
    "^@/hooks/(.*)$", // hooks
    "^@/components/ui/(.*)$", // UI components
    "^@/components/(.*)$", // general components
    "^@/styles/(.*)$", // styles
    "^@/app/(.*)$", // app
    "",
    // Relative imports
    "^[./]",
  ],
  importOrderSeparation: false,
  importOrderSortSpecifiers: true,
  importOrderBuiltinModulesToTop: true,
  importOrderParserPlugins: ["typescript", "jsx", "decorators-legacy"],
  importOrderMergeDuplicateImports: true,
  importOrderCombineTypeAndValueImports: true,
  tailwindAttributes: ["tw"],
  tailwindFunctions: ["cva"],
  plugins: ["prettier-plugin-tailwindcss"],
}
