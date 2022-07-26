import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const generalConfig = {
    plugins: [react()],
  }

  if (command === 'serve' && mode === "development") {
    console.log('serve development')
    return {
      ...generalConfig,
      server: {
        port: 3000,
      }
    }
    
  } else {
    return generalConfig
  }
  
})
