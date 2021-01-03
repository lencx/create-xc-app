import * as reactPlugin from 'vite-plugin-react';
// import * as rustPlugin from 'vite-plugin-rust';
import type { UserConfig } from 'vite';
const rustPlugin = require('vite-plugin-rust');
import path from 'path';

const config: UserConfig = {
  jsx: 'react',
  minify: 'esbuild',
  plugins: [
    reactPlugin,
    // https://github.com/gliheng/vite-plugin-rust
    rustPlugin({
      crates: {
        rust_crate: './rust-crate',
      }
    }),
  ],
  // see: https://github.com/vitejs/vite/blob/master/src/node/config.ts
  // the key must start and end with a slash
  alias: {
    '/@/': path.resolve(__dirname, 'src'),
  },
};

export default config;