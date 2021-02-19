# create-xc-app

Create a project in seconds!

> **Compatibility Note:**
> Vite requires [Node.js](https://nodejs.org/en/) version >=12.0.0.

With NPM:

```bash
npm init xc-app
```

With Yarn:

```bash
yarn create xc-app
```

Then follow the prompts!

You can also directly specify the project name and the template you want to use via additional command line options. For example, to scaffold a Vite + WebAssembly + React project, run:

```bash
npm init xc-app my-wasm-app --template wasm-react
```

Currently supported template presets include:

* `react-dva-ts`
* `wasm-react`
* `wasm-vue`
* `deno-oak`
* `deno-vscode-cmd`: Based `deno` and `vscode user snippets`, displaying all `"@cmd: "` commands in the project.
  * `snippets` must contain `"@cmd: "` string
  * the string must be in the first 10 lines of the file will be matched
  * `$ deno run --allow-read --allow-write cmd.ts` - use cache `cmd.output`
  * `$ deno run --allow-read --allow-write cmd.ts --update` - update `cmd.output` file
  * `$ deno run --allow-read --allow-write cmd.ts --update=tree` - tree structure

## Related List

- [🦕 Deno](https://deno.land): A secure runtime for JavaScript and TypeScript.
- [🦕 Oak](https://github.com/oakserver/oak): A middleware framework for Deno's net server.
- [🦕 deno-getfiles](https://github.com/lencx/deno-getfiles): Recursively get all files in a directory
- [Dvajs](https://github.com/dvajs/dva): React and redux based, lightweight and elm-style framework.
- [Vite](https://github.com/vitejs/vite): Native-ESM powered web dev build tool. It's fast.
- [VS Code User Snippets](https://code.visualstudio.com/docs/editor/userdefinedsnippets): Code snippets are templates that make it easier to enter repeating code patterns, such as loops or conditional-statements.
- [vite-plugin-rsw](https://github.com/lencx/vite-plugin-rsw): wasm-pack plugin for vite@v2.
- [WebAssembly入门](https://mtc.nofwl.com/tech/post/wasm-start.html)
- [Awesome WebAssembly](https://mtc.nofwl.com/awesome/wasm.html)

## License

MIT License © 2020 [lencx](https://github.com/lencx)
