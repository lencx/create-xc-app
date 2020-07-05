import * as reactPlugin from 'vite-plugin-react';
import type { UserConfig } from 'vite';
import path from 'path';

const config: UserConfig = {
  jsx: 'react',
  plugins: [reactPlugin],
  // see: https://github.com/vitejs/vite/blob/master/src/node/config.ts
  // the key must start and end with a slash
  alias: {
    '/@/': path.resolve(__dirname, 'src'),
    '/@core/': path.resolve(__dirname, 'src/core'),
    '/@route/': path.resolve(__dirname, 'src/router'),
  },
};

export default config;