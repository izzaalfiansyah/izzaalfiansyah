import { defineConfig } from "eslint/config"
import js from "@eslint/js"
import ts from "typescript-eslint"
import prettierConfig from "eslint-config-prettier/flat"

const config = defineConfig([
  js.configs.recommended,
  ...ts.configs.recommended,
  prettierConfig,
])

export default config
