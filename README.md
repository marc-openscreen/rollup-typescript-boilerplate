# rollup-typescript-boilerplate

This repo contains an updated version of the [rollup-starter-lib] example to demonstrate a potential approach to building the Openscreen SDK.

The SDK source code is written in TypeScript and uses [RollupJS] to bundle, transpile and generate equivalent outputs that support Node (CommonJS), web-browsers (UMD) and the latest ES module syntax.

A TypeScript codebase has the benefits of static typing, rich IDE support, and generally tends to make the code more readable and predictable as a project grows in scale. The typings used in the code can also be made accessible to developers using our SDK to provide them with a better overall coding experience. The popularity and adoption of TypeScript continues to grow significantly each year to the point where lacking support may or may not be detrimental.


## Getting started

Clone this repository and install its dependencies:

```bash
git clone https://github.com/marc-openscreen/rollup-typescript-boilerplate.git
cd rollup-typescript-boilerplate
npm install
```

`npm run build` builds the library to `dist`, generating three files:

* `dist/how-long-till-lunch.cjs.js`
    A CommonJS bundle, suitable for use in Node.js, that `require`s the external dependency. This corresponds to the `"main"` field in package.json
* `dist/how-long-till-lunch.esm.js`
    an ES module bundle, suitable for use in other people's libraries and applications, that `import`s the external dependency. This corresponds to the `"module"` field in package.json
* `dist/how-long-till-lunch.umd.js`
    a UMD build, suitable for use in any environment (including the browser, as a `<script>` tag), that includes the external dependency. This corresponds to the `"browser"` field in package.json

`npm run dev` builds the library, then keeps rebuilding it whenever the source files change.

`npm test` builds the library before running the tests.


## Feedback

As always, any and all feedback is always welcome! This boilerplate is just a quick and simple example to hightlight some of the points mentioned above which leaves a lot of room for addtionnal featues, improvements or a different approach all together!

[rollup-starter-lib]: https://github.com/rollup/rollup-starter-lib/tree/typescript 
[RollupJS]: https://rollupjs.org/guide/en/
