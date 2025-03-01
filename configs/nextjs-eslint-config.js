// nextjs-eslint-config.js
import eslintPluginReact from 'eslint-plugin-react';
import eslintPluginReactHooks from 'eslint-plugin-react-hooks';
import tseslint from 'typescript-eslint';
import {baseESLintConfig} from './base-eslint-config.js';
import pluginNext from "@next/eslint-plugin-next";
import eslintPluginPrettier from "eslint-plugin-prettier/recommended";

export const nextjsESLintConfig = tseslint.config(
  baseESLintConfig,
  eslintPluginReact.configs.flat["jsx-runtime"],
  {
    plugins: {
      "@next/next": pluginNext
    },
    rules: {
      ...pluginNext.configs.recommended.rules,
      ...pluginNext.configs["core-web-vitals"].rules
    }
  },
  {
    plugins: {
      "react-hooks": eslintPluginReactHooks,
    },
    settings: { react: { version: "detect" } },
    rules: {
      ...eslintPluginReactHooks.configs.recommended.rules,
      // React scope no longer necessary with new JSX transform.
      "react/react-in-jsx-scope": "off"
    }
  },
  eslintPluginPrettier
);
