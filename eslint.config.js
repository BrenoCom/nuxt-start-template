import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginVue from "eslint-plugin-vue";
import pluginPrettier from "eslint-config-prettier";

export default [
  {
    ignores: [".config/*", "node_module/*", "playground/*", ".nuxt/*"],
  },
  { files: ["**/*.{js,mjs,cjs,ts,vue}"] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginVue.configs["flat/essential"],
  pluginPrettier,
  {
    files: ["**/*.vue"],
    languageOptions: { parserOptions: { parser: tseslint.parser } },
  },
];
