import babel from "rollup-plugin-babel";
// import { eslint} from 'rollup-plugin-eslint'
import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import commonjs from "@rollup/plugin-commonjs";
import terser from "rollup-plugin-terser";

export default {
  input: "src/index.ts",
  plugins: [
    resolve(),
    commonjs(),
    typescript(),
    terser(),
    babel({
      babelrc: false,
      presets: [["@babel/preset-env", { modules: false }]],
      exclude: "node_modules/**", // 只编译我们的源代码，忽略第三方代码
    }),
  ],
  output: [
    {
      dir: "dist",
      format: "cjs",
      entryFileNames: "[name].cjs.js",
    },
    {
      dir: "dist",
      format: "esm",
      entryFileNames: "[name].esm.js",
    },
    {
      dir: "dist",
      format: "umd",
      entryFileNames: "[name].umd.js",
    },
  ],
};
