import { solvro } from "@solvro/config/eslint";

const solvroConfig = await solvro();

export default [
  ...solvroConfig,
  {
    ignores: ["android/**", "ios/**", "**/routeTree.gen.ts"],
  },
  {
    rules: {
      "unicorn/prefer-set-has": "off",
      "react/no-unescaped-entities": "off",
      "react-refresh/only-export-components": "off",
    },
  },
];
