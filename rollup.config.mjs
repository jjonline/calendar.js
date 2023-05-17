import { babel } from "@rollup/plugin-babel";
import fileSize from "rollup-plugin-filesize";

const libraryName = 'js-calendar-converter';

export default {
  input: "src/index.js",
  output: [
    {
      file: `./dist/${libraryName}.cjs`,
      format: "cjs",
    },
    {
      file: `./dist/${libraryName}.mjs`,
      format: "esm",
    },
    {
      file: `./dist/${libraryName}.js`,
      format: "iife",
      name: 'calendar',
      exports: "default",  //"auto" | "default"| "named"| "none"
      sourcemap: true,
    },
  ],
  plugins: [
    babel({
      babelHelpers: "bundled",
      presets: ["@babel/preset-env"],
    }),
    fileSize(),
  ],
}
