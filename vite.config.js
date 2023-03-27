import { defineConfig } from 'vite';
import postcssPresetEnv from 'postcss-preset-env';

export default defineConfig({
  base: '/todo-list/',
  css: {
    devSourcemap: true,
    postcss: {
      plugins: [postcssPresetEnv()],
    },
  },
});
