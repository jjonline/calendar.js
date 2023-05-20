import { babel } from "@rollup/plugin-babel";

export default [
{
  input: "./src/calendar-ui-index.js",
  output: [
    {
      file: `./ui/js/calendar-ui.js`,
      format: "iife",
      name: 'Calendar',
      exports: "default",  //"auto" | "default"| "named"| "none"
      sourcemap: true,
    },
    
    {
      file: `./dist/js-calendar-converter.js`,
      format: "iife",
      name: 'calendar',
      exports: "default",  //"auto" | "default"| "named"| "none"
      sourcemap: true,
    }
  ],
  plugins: [
    babel({
      babelHelpers: "bundled",
      presets: ["@babel/preset-env"],
    }),
  ],
},

];
