const OFF = 0;
const WARN = 1;
const ERROR = 2;
module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true,
  },
  extends: [
    "airbnb",
    "airbnb/hooks",
    "plugin:react/recommended",
    "plugin:unicorn/recommended",
    "plugin:promise/recommended",
    "plugin:@typescript-eslint/recommended",
    'plugin:prettier/recommended',
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: "module",
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".tsx", ".ts", ".js", ".json"],
      },
    },
  },
  plugins: ["react", "unicorn", "promise", "@typescript-eslint","prettier"],
  rules: {
    "import/extensions": [
      ERROR,
      "ignorePackages",
      {
        ts: "nerver",
        tsx: "nerver",
        json: "nerver",
        js: "nerver",
      },
    ],
    "unicorn/prefer-module":OFF,
    "@typescript-eslint/no-var-requires":OFF,
    'import/no-extraneous-dependencies': [ERROR, { devDependencies: true }],
    "prettier/prettier": ["error", {"singleQuote": true, "parser": "flow"}]
  },
};
