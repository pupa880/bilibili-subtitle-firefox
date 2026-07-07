import {defineConfig, PluginOption} from 'vite'
import react from '@vitejs/plugin-react'
import {visualizer} from "rollup-plugin-visualizer";
import fs from 'fs'
import path from 'path'

// 构建结束后把扩展所需文件复制到 dist
const copyExtensionFiles = (): PluginOption => ({
  name: 'copy-extension-files',
  apply: 'build',
  closeBundle() {
    // manifest.json
    fs.copyFileSync('./manifest.json', './dist/manifest.json')

    // content script（已经是 CommonJS，直接复制）
    fs.mkdirSync('./dist/src/chrome', {recursive: true})
    fs.copyFileSync('./src/chrome/content-script.cjs', './dist/src/chrome/content-script.cjs')
  },
})

// https://vitejs.dev/config/
export default () => {
  return defineConfig({
    base: '/',
    plugins: [
      react(),
      visualizer() as PluginOption,
      copyExtensionFiles(),
    ],
    build: {
      rollupOptions: {
        input: {
          index: './index.html',
          background: './src/chrome/background.ts',
        },
        output: {
          entryFileNames: (chunkInfo) => {
            if (chunkInfo.name === 'background') {
              return 'src/chrome/background.js'
            }
            return 'assets/[name]-[hash].js'
          },
          chunkFileNames: 'assets/[name]-[hash].js',
          assetFileNames: 'assets/[name]-[hash][extname]',
        },
      },
    },
    css: {
      modules: {
        localsConvention: "camelCase"
      }
    }
  })
}
