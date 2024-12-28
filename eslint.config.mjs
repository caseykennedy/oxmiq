import { dirname } from "path"
import { fileURLToPath } from "url"
import { FlatCompat } from "@eslint/eslintrc"

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

const eslintConfig = [
  // Extends from Next.js core, TypeScript, Prettier, and TailwindCSS
  ...compat.extends(
    "next/core-web-vitals",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "plugin:tailwindcss/recommended"
  ),

  // Add plugins for TypeScript and TailwindCSS
  {
    plugins: ["@typescript-eslint", "tailwindcss"],
  },

  // Define parser and parserOptions for TypeScript
  {
    parser: "@typescript-eslint/parser",
    parserOptions: {
      project: "./tsconfig.json", // Ensure it points to your tsconfig
    },
  },

  // Define the rules specific to the project
  {
    rules: {
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_" },
      ],
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/array-type": "off",
      "@typescript-eslint/consistent-type-imports": [
        "warn",
        { prefer: "type-imports", fixStyle: "inline-type-imports" },
      ],
      "@typescript-eslint/no-misused-promises": [
        2,
        { checksVoidReturn: { attributes: false } },
      ],
      "react-hooks/exhaustive-deps": "error",
    },
  },

  // TailwindCSS specific settings
  {
    settings: {
      tailwindcss: {
        callees: ["cn", "cva"],
        config: "./tailwind.config.ts",
        classRegex: "^(class(Name)?|tw)$",
      },
    },
  },
]

export default eslintConfig
