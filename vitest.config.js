import { defineConfig, mergeConfig } from 'vitest/config'
import viteConfig from './vite.config.mjs'

export default mergeConfig(viteConfig, defineConfig({
  test: {
    globals:true,
    environment: 'happy-dom', 
   },

  resolve: {
    alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  }
}))