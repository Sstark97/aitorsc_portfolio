import { defineConfig, loadEnv } from 'vite'
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

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd())
  const generalConfig = {
    plugins: [react()],
    resolve: {
      alias: getAlliases(),
    }
  }

  if (command === 'serve' && mode === "development") {
    return {
      ...generalConfig,
      server: {
        port: parseInt(env.VITE_PORT),
      }
    }

  } else {
    return {
      ...generalConfig,
      build: {
        outDir: 'build',
        chunkSizeWarningLimit: 1000,
        minify: 'esbuild',
      },
    }
  }
  
})
