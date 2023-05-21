const { BABEL_ENV, NODE_ENV } = process.env;
const cjs = BABEL_ENV === "cjs" || NODE_ENV === "test";

module.exports = {
  presets: [
    [
      "@babel/preset-env",
      "@babel/preset-typescript",
      {
        loose: true,
        exclude: [/transform-typeof-symbol/],
        bugfixes: true,
        useBuiltIns: "usage",
        corejs: 3,
      },
    ]
  ],
  plugins: [
    cjs && "add-module-exports",
    "macros",
    "annotate-pure-calls",
  ].filter(Boolean),
};
