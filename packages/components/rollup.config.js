import resolve from "@rollup/plugin-node-resolve";
import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import { terser } from "rollup-plugin-terser";

const packageJson = require("./package.json");
const path = require("path");

export default {
  input: "src/index.js",
  external: ["@babel/runtime"],
  output: [
    {
      file: packageJson.main,
      format: "cjs",
      sourcemap: true,
    },
    {
      file: packageJson.module,
      format: "es",
      sourcemap: true,
    },
  ],
  plugins: [
    babel({
      babelHelpers: "runtime",
      configFile: path.resolve(__dirname, "../../babel.config.json"),
      exclude: ["**/node_modules/**", "**/*.stories.js"],
    }),
    resolve(),
    commonjs(),
    terser(),
    peerDepsExternal(),
  ],
};
