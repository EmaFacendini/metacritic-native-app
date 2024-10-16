// https://docs.expo.dev/guides/using-eslint/
module.exports = {
  extends: [
    "expo",
    "prettier", // Asegura que Prettier tenga control sobre el formato
  ],
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": [
      "error",
      {
        endOfLine: "lf", // Aquí forzamos LF como salto de línea
      },
    ],
  },
};
