import { FlatCompat } from "@eslint/eslintrc"
import typescriptEslintPlugin from "@typescript-eslint/eslint-plugin"
import typescriptParser from "@typescript-eslint/parser"
import eslintPluginPrettier from "eslint-plugin-prettier"
import eslintPluginTailwindCSS from "eslint-plugin-tailwindcss"
import { dirname } from "path"
import { fileURLToPath } from "url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

export default [
  // Extends from Next.js core, TypeScript, Prettier, and TailwindCSS
  ...compat.extends(
    "next/core-web-vitals", // Next.js ESLint rules
    "plugin:@typescript-eslint/recommended", // TypeScript ESLint rules
    "prettier", // Prettier compatibility
    "plugin:tailwindcss/recommended" // TailwindCSS ESLint rules
  ),

  // Define language options and plugins
  {
    languageOptions: {
      parser: typescriptParser, // Specify the TypeScript parser
      parserOptions: {
        project: "./tsconfig.json", // Point to your tsconfig
      },
    },
    plugins: {
      "@typescript-eslint": typescriptEslintPlugin,
      tailwindcss: eslintPluginTailwindCSS,
      prettier: eslintPluginPrettier, // Add Prettier plugin
    },
  },

  // Define the rules specific to the project
  {
    rules: {
      "prettier/prettier": "warn", // Enable Prettier rules
      "import/no-anonymous-default-export": "off",
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
