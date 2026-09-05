import { resolve } from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

function injectUiSource() {
  const ui = resolve(__dirname, '../../packages/ui/src')
  return {
    name: 'inject-ui-source',
    enforce: 'pre',
    transform(code: string, id: string) {
      if (
        id.endsWith('/src/index.css') &&
        code.includes("@import 'tailwindcss'") &&
        !code.includes('@source')
      ) {
        return { code: "@source '" + ui + "'; " + code, map: null }
      }
    },
  }
}

export default defineConfig({
  plugins: [react(), injectUiSource(), tailwindcss()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
})
