import { baseESLintConfig } from './base-eslint-config.js';
import eslintPluginReact from 'eslint-plugin-react';
import eslintPluginReactHooks from 'eslint-plugin-react-hooks';
import eslintPluginPrettier from 'eslint-plugin-prettier/recommended';
import tseslint from 'typescript-eslint';

export const reactESLintConfig = tseslint.config(
  baseESLintConfig,
  eslintPluginReact.configs.flat['jsx-runtime'],
  {
    plugins: {
      'react-hooks': eslintPluginReactHooks
    },
    settings: { react: { version: 'detect' } },
    rules: {
      ...eslintPluginReactHooks.configs.recommended.rules,
      // React scope no longer necessary with new JSX transform.
      'react/react-in-jsx-scope': 'off'
    }
  },
  eslintPluginPrettier
);
