import babel from "@rollup/plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import replace from "@rollup/plugin-replace";
import terser  from "@rollup/plugin-terser";

const root = process.platform === "win32" ? path.resolve("/") : "/";
const external = (id) => !id.startsWith(".") && !id.startsWith(root);
const globals = {
  "@babel/runtime/helpers/esm/extends": "extends",
  "@babel/runtime/helpers/esm/assertThisInitialized": "assertThisInitialized",
  "@babel/runtime/helpers/esm/inheritsLoose": "inheritsLoose",
  "@babel/runtime/helpers/esm/wrapNativeSuper": "wrapNativeSuper",
  "@babel/runtime/helpers/esm/taggedTemplateLiteralLoose":
    "taggedTemplateLiteralLoose",
};

const input = "src/index.ts";
const name = "polished";

const getBabelOptions = ({ useESModules }, targets) => ({
  babelrc: false,
  babelHelpers: 'runtime',
  presets: [
    [
      "@babel/preset-env",
      "@babel/preset-typescript",
      {
        loose: true,
        modules: false,
        exclude: [/transform-typeof-symbol/],
        targets,
        bugfixes: true,
        useBuiltIns: "usage",
        corejs: 3,
      },
    ]
  ],
  plugins: [
    "add-module-exports",
    "macros",
    "annotate-pure-calls",
    [
      "@babel/transform-runtime",
      { useESModules },
      ">0.5%, not dead, ie >= 11, not op_mini all",
    ],
  ],
  sourceMaps: true,
});

export default [
  {
    input,
    output: { file: `dist/${name}.esm.js`, format: "esm" },
    external,
    plugins: [
      resolve(),
      babel(getBabelOptions({ useESModules: true })),
    ],
  },
  {
    input,
    output: { file: `dist/${name}.cjs.js`, format: "cjs" },
    external,
    plugins: [
      resolve(),
      babel(getBabelOptions({ useESModules: false })),
    ],
  },
  {
    input,
    output: { file: `dist/${name}.js`, format: "umd", name, globals },
    external,
    plugins: [
      resolve(),
      babel(getBabelOptions({ useESModules: true })),
      replace({ "process.env.NODE_ENV": JSON.stringify("development"), preventAssignment: true }),
    ],
  },
  {
    input,
    output: { file: `dist/${name}.min.js`, format: "umd", name, globals },
    external,
    plugins: [
      resolve(),
      babel(getBabelOptions({ useESModules: true })),
      replace({ "process.env.NODE_ENV": JSON.stringify("production"), preventAssignment: true }),
      terser(),
    ],
  },
];
