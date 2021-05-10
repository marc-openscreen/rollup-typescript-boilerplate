//------------------------------------------------------------ Global Imports --
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';

//---------------------------------------------------------- Relative Imports --
import pkg from './package.json';

// Project entry point.
const input = 'src/main.ts';

//------------------------------------------------------------ Default Export --
export default [
  // browser-friendly UMD build
  {
    input,
    output: {
      name: 'howLongUntilLunch',
      file: pkg.browser,
      format: 'umd',
    },
    plugins: [
      resolve(), // so Rollup can find `ms`
      commonjs(), // so Rollup can convert `ms` to an ES module
      typescript(), // so Rollup can convert TypeScript to JavaScript
    ],
  },

  // CommonJS for Node and ES module for bundlers build.  We could have three entries in the
  // configuration array instead of two, but it's quicker to generate multiple builds from a
  // single configuration where possible, using an array for the `output` option, where we
  // can specify `file` and `format` for each target.
  {
    input,
    external: ['ms'],
    output: [
      {file: pkg.main, format: 'cjs'}, // CommonJS build
      {file: pkg.module, format: 'es'}, // ES module build
    ],
    plugins: [
      typescript(), // so Rollup can convert TypeScript to JavaScript
    ],
  },
];
