import { defineConfig, loadEnv, splitVendorChunkPlugin } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from "vite-plugin-svgr";
import { resolve } from 'path'

const getAlliases = () => {
  return {
    '@assets': resolve('src/assets'),
    '@components': resolve('src/components'),
    '@containers': resolve('src/containers'),
    '@context': resolve('src/context'),
    '@pages': resolve('src/pages'),
    '@routes': resolve('src/routes'),
    '@styles': resolve('src/styles'),
    '@api': resolve('src/api'),
    '@hooks': resolve('src/hooks'),
  }
}

export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd())

  if (command === 'serve' && mode === 'development') {
    return {

      plugins: [react(), svgr()],
      resolve: {
        alias: getAlliases(),
      },
      server: {
        port: parseInt(env.VITE_PORT),
      }
    }
  } else {

    return {
 
      plugins: [react(), splitVendorChunkPlugin(), svgr()],
      build: {
        outDir: 'build',
        chunkSizeWarningLimit: 1000,
        minify: 'esbuild',
      },
      resolve: {
        alias: getAlliases(),
      },
    }
  }
})
