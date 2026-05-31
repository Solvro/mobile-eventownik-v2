import { solvro } from "@solvro/config/eslint";

const solvroConfig = await solvro();

export default [
  ...solvroConfig,
  {
    rules: {
      "unicorn/prefer-set-has": "off",
    },
  },
];
