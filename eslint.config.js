import { defineConfig } from "eslint/config"
import js from "@eslint/js"
import ts from "typescript-eslint"
import prettierConfig from "eslint-config-prettier/flat"

const config = defineConfig([
  {
    files: ["**/*.ts"],
    plugins: {
      ts,
    },
    extends: ["ts/recommended"],
  },
  {
    files: ["**/*.js"],
    plugins: {
      js,
    },
    extends: ["js/recommended"],
  },
  prettierConfig,
])

export default config
