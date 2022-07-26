import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd())
  const generalConfig = {
    plugins: [react()],
  }

  if (command === 'serve' && mode === "development") {
    return {
      ...generalConfig,
      server: {
        port: parseInt(env.VITE_PORT),
      }
    }

  } else {
    return generalConfig
  }
  
})
