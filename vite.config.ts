import {defineConfig, PluginOption} from 'vite'
import react from '@vitejs/plugin-react'
import {visualizer} from "rollup-plugin-visualizer";
import fs from 'fs'

// 构建结束后把根目录 manifest.json 复制到 dist
const copyManifest = (): PluginOption => ({
  name: 'copy-manifest',
  apply: 'build',
  closeBundle() {
    fs.copyFileSync('./manifest.json', './dist/manifest.json')
  },
})

// https://vitejs.dev/config/
export default () => {
  return defineConfig({
    base: '/',
    plugins: [
      react(),
      visualizer() as PluginOption,
      copyManifest(),
    ],
    css: {
      modules: {
        localsConvention: "camelCase"
      }
    }
  })
}
