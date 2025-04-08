// @ts-check

import eslint from '@eslint/js';
import { globalIgnores } from 'eslint/config';
import tseslint from 'typescript-eslint';
import stylistic from '@stylistic/eslint-plugin';

export default tseslint.config(
  globalIgnores([
    'dist',
  ]),
  eslint.configs.recommended,
  tseslint.configs.recommended,
  stylistic.configs.customize({
    semi: true,
  }),
);
