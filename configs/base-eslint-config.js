import tseslint from "typescript-eslint";
import js from "@eslint/js";
import eslintPluginPrettier from "eslint-plugin-prettier/recommended";
import eslintPluginImportX from "eslint-plugin-import-x";
import turboPlugin from "eslint-plugin-turbo";

const importXRecommended = eslintPluginImportX.flatConfigs.recommended;
const importXTypescript = eslintPluginImportX.flatConfigs.typescript;

export const baseESLintConfig = tseslint.config(
  js.configs.recommended,
  tseslint.configs.recommended,
  importXRecommended,
  importXTypescript,
  eslintPluginPrettier,
  {
    plugins: {
      turbo: turboPlugin
    },
    rules: {
      "turbo/no-undeclared-env-vars": "error"
    }
  },
  {
    rules: {
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
        }
      ]
    }
  },
  {
    ignores: ['dist/**', ".sanity/**", "node_modules/**"]
  }
)