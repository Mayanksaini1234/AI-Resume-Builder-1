import path from "path"
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

// https://vite.dev/config/
export default defineConfig({
  
  plugins: [react(), tailwindcss()],
  server: {
    watch: {
      usePolling: true, // 👈 forces Vite to watch files actively
      interval: 100,     // 👈 how frequently it checks (ms)
    },
    hmr: {
      overlay: true, // show error overlay in browser
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
