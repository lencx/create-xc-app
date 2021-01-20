# create-xc-app

Create a project in seconds!

```bash
# command help
$ npx create-xc-app -h
```

```bash
# project-name: target directory
# Options: template options
# --force: even if the target directory is not empty, it is mandatory to create a template.
$ npm init xc-app <project-name> <-t|--template> [Options] [--force]
$ cd <project-name>
# if the project has a package.json
$ npm install # install dependencies
$ npm run dev # run project
```

If using `yarn`:

```bash
$ yarn create xc-app <project-name> <-t|--template> [Options] [--force]
$ cd <project-name>
# if the project has a package.json
$ yarn # install dependencies
$ yarn dev # run project
```

If using `npx`:

```bash
$ npx create-xc-app <project-name> <-t|--template> [Options] [--force]
# ...
```

## Templates

Available templates: default is `react-dva-ts`
> `Vite`

- `react-dva-ts`: Build apps based on React, Dvajs and TypeScript.
- `wasm-react`: Build webAssembly apps based on React, Rust and TypeScript.

> Deno

- `deno-oak`: Creating a basic web server in Deno using Oak.
- `deno-vscode-cmd`: Based `deno` and `vscode user snippets`, displaying all `"@cmd: "` commands in the project.
  - `snippets` must contain `"@cmd: "` string
  - the string must be in the first 10 lines of the file will be matched
  - `$ deno run --allow-read --allow-write cmd.ts` - use cache `cmd.output`
  - `$ deno run --allow-read --allow-write cmd.ts --update` - update `cmd.output` file
  - `$ deno run --allow-read --allow-write cmd.ts --update=tree` - tree structure

To scaffold with specific template:

```bash
# default template: `npm init xc-app my-react-project`
$ npm init xc-app my-react-project --template react-dva-ts
$ npm init xc-app . --template deno-vscode-cmd --force # force
```

## Related List

- [🦕 Deno](https://deno.land): A secure runtime for JavaScript and TypeScript.
- [🦕 Oak](https://github.com/oakserver/oak): A middleware framework for Deno's net server.
- [🦕 deno-getfiles](https://github.com/lencx/deno-getfiles): Recursively get all files in a directory
- [Dvajs](https://github.com/dvajs/dva): React and redux based, lightweight and elm-style framework.
- [Vite](https://github.com/vitejs/vite): Native-ESM powered web dev build tool. It's fast.
- [VS Code User Snippets](https://code.visualstudio.com/docs/editor/userdefinedsnippets): Code snippets are templates that make it easier to enter repeating code patterns, such as loops or conditional-statements.
- [vite-plugin-rsw](https://github.com/lencx/vite-plugin-rsw): wasm-pack plugin for vite@v2.

## License

MIT
