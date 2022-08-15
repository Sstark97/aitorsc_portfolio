import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

const getAlliases = (mode) => {
  const development = {
    '@assets': resolve(__dirname, './src/assets'),
    '@components': resolve(__dirname, './src/components'),
    '@containers': resolve(__dirname, './src/containers'),
    '@pages': resolve(__dirname, './src/pages'),
    '@routes': resolve(__dirname, './src/routes'),
    '@styles': resolve(__dirname, './src/styles'),
    '@api': resolve(__dirname, './src/api'),
  }

  const production = {
    '@assets': resolve(__dirname, '/opt/build/repo/src/assets'),
    '@components': resolve(__dirname, '/opt/build/repo/src/components'),
    '@containers': resolve(__dirname, '/opt/build/repo/src/containers'),
    '@pages': resolve(__dirname, '/opt/build/repo/src/pages'),
    '@routes': resolve(__dirname, '/opt/build/repo/src/routes'),
    '@styles': resolve(__dirname, '/opt/build/repo/src/styles'),
    '@api': resolve(__dirname, '/opt/build/repo/src/api'),
  }

  return mode === 'development' ? development : production
}

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd())
  const generalConfig = {
    plugins: [react()],
    resolve: {
      alias: getAlliases(mode),
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
