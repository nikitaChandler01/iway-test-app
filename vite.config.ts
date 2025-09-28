import tsconfigPaths from "vite-tsconfig-paths";
import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  // Загружаем env-файлы (например, .env.development, .env.production)
  const env = loadEnv(mode, process.cwd(), "");
  return {
    plugins: [react(), tsconfigPaths(), svgr()],
    server: {
      proxy: {
        "/api": {
          target: env.VITE_APP_API_URL, // берем из .env
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ""),
        },
      },
    },
  };
});

