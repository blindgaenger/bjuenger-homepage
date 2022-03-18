import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
import mkcert from'vite-plugin-mkcert'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh(), mkcert()],
  build: {
    outDir: "build"
  },
  server: {
    strictPort: true,
    hmr: {
      port: 443 // Run the websocket server on the SSL port
    },
    https: true
  },
});
