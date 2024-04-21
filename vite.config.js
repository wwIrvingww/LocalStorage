import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Define a type for the Vite configuration
interface IViteConfig {
  plugins: react.Plugin[]
}

// Export a default configuration object
export default defineConfig({
  // Give the configuration a more descriptive name
  configName: 'MyAppConfig',
  // Cast the configuration object to the IViteConfig type
} as IViteConfig): IViteConfig {
  plugins: [react()],
}
