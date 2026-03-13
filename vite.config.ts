import { defineConfig, Plugin } from 'vite'
import vue from '@vitejs/plugin-vue'
import * as path from 'path'
import * as fs from 'fs'

// Если у тебя проект в ESM-среде без CommonJS, 
// то __dirname может не работать по умолчанию. 
// Можно написать так:
// import { fileURLToPath } from 'url'
// const __filename = fileURLToPath(import.meta.url)
// const __dirname = path.dirname(__filename)

// Плагин для фильтрации файлов из public/ - исключаем папку video/
function filterPublicPlugin(): Plugin {
  return {
    name: 'filter-public-assets',
    enforce: 'post',
    async closeBundle() {
      const videoDir = path.resolve(__dirname, 'dist/trends-all-geo/video')
      
      // Удаляем папку video/ из выходной директории после сборки
      if (fs.existsSync(videoDir)) {
        fs.rmSync(videoDir, { recursive: true, force: true })
        console.log('✓ Папка video/ исключена из сборки')
      }
    }
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    filterPublicPlugin(),
  ],
  base: './',
  resolve: {
    alias: {
      '@img': path.resolve(__dirname, 'src/assets/img'),
      '@video': path.resolve(__dirname, 'src/assets/img/video'),
      '@posters': path.resolve(__dirname, 'src/assets/img/video/posters'),
      '@thumbs': path.resolve(__dirname, 'src/assets/img/thumbs'),
    },
  },
  build: {
    outDir: 'dist/trends-all-geo',
    assetsDir: 'shorts',
  },
})