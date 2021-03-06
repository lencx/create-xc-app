# wasm-vue

[WebAssembly Series](https://github.com/lencx/fzj/discussions/22)

## Quick Start

### Step1

```bash
npm install
```

### Step2

edit `vite.config.ts`

```js
// ...
ViteRsw({
  crates: [
    // https://github.com/lencx/vite-plugin-rsw#plugin-options
    'wasm-test', // custom package name
  ]
}),
```

### Step3

```bash
npm run dev
```

## Remote Deployment

### Step1

edit `.rswrc.json`

```json
{
  "root": ".",
  "crates": [
    // https://github.com/lencx/rsw-node#step2
    "wasm-test" // package name, same as `vite.config.ts`
  ]
}
```

### Step2

```bash
npm run rsw:deploy
```
