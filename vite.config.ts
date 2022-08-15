import { defineConfig, loadEnv, splitVendorChunkPlugin } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

const getAlliases = () => {
  return {
    '@assets': resolve(__dirname, './src/assets'),
    '@components': resolve(__dirname, './src/components'),
    '@containers': resolve(__dirname, './src/containers'),
    '@pages': resolve(__dirname, './src/pages'),
    '@routes': resolve(__dirname, './src/routes'),
    '@styles': resolve(__dirname, './src/styles'),
    '@api': resolve(__dirname, './src/api'),
  }

}

export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd())

  if (command === 'serve' && mode === 'development') {
    return {

      plugins: [react()],
      resolve: {
        alias: getAlliases(),
      },
      server: {
        port: parseInt(env.VITE_PORT),
      }
    }
  } else {

    return {
 
      plugins: [react(), splitVendorChunkPlugin()],
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
