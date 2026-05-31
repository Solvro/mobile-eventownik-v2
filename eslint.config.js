import { solvro } from "@solvro/config/eslint";

const solvroConfig = await solvro();

export default [
  ...solvroConfig,
  {
    rules: {
      "import/no-default-export": "off",
      "unicorn/prefer-set-has": "off",
    },
  },
];
