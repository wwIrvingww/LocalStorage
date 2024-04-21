import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Define a type for the Vite configuration
interface IViteConfig {
  plugins: react.Plugin[] // Specify that the plugins property is an array of react.Plugin objects
}

// Export a default configuration object
export default defineConfig({ // The defineConfig function is used to configure Vite
  // Give the configuration a more descriptive name
  configName: 'MyAppConfig',
  // Cast the configuration object to the IViteConfig type to ensure type safety
} as IViteConfig): IViteConfig {
  plugins: [react()], // Include the react plugin to enable support for React in the project
}
