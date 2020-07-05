# create-lx-cli

Create an project in seconds!

```bash
# command help
$ npx create-lx-cli -h
```

```bash
$ npm init lx-cli <project-name> <-t|--template> [template]
$ cd <project-name>
# if the project has a package.json
$ npm install # install dependencies
$ npm run dev # run project
```

If using Yarn:

```bash
$ yarn create lx-cli <project-name> <-t|--template> [template]
$ cd <project-name>
# if the project has a package.json
$ yarn # install dependencies
$ yarn dev # run project
```

## Templates

Available templates:

> `Vite`

- `react-dva-ts` (default)

To scaffold with specific template:

```bash
# or `npm init lx-cli my-react-project`
$ npm init lx-cli my-react-project --template react-dva-ts
```

## Powered By

- [Vite](https://github.com/vitejs/vite)
