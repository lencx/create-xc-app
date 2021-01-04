#!/usr/bin/env node
const path = require('path');
const fs = require('fs');

// function wasmCopy(config, crates) {
//   Object.entries(crates).map(crate => {
//     const id = path.resolve(__dirname, `../${crate[1]}/pkg/${crate[0]}_bg.wasm`);
//     const ext = path.extname(id);
//     const baseName = path.basename(id, ext);
//     const content = fs.readFileSync(id);
//     let hashsum = Buffer.isBuffer(content) ? hash(content) : 'empty'

//     const resolvedFileName = `${baseName}.${hashsum}${ext}`;
//     const distWasmFile = `./${config.outDir}/${config.assetsDir}/${resolvedFileName}`;
//     fs.copyFile(id, distWasmFile, (err) => {
//       if (err) console.error(err);
//     });
//   })
// }
(function wasmCopy() {
  const baseDir = path.resolve(__dirname, '../dist/_assets');
  const wasmFile = path.resolve(__dirname, `../rust-crate/pkg/rust_crate_bg.wasm`);
  let distWasmFile = '';
  try {
    const files = fs.readdirSync(baseDir);
    files.some(i => {
      if (/^index.*.js$/.test(i)) {
        distWasmFile = i.split('.js')[0] + '_bg.wasm';
        return;
      }
    })
  } catch (err) {
    console.error(err);
  }
  fs.copyFile(wasmFile, `${baseDir}/${distWasmFile}`, (err) => {
    if (err) console.error(err);
  });
})()