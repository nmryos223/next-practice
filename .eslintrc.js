module.exports = {
  plugins: ["prettier"],
  extends: ["plugin:@next/next/recommended", "next"],
  rules: {
    "prettier/prettier": "error",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
  },
};
