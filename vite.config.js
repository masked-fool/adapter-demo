import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { multiCSSPlugin } from "./scripts/vite-plugin-multi-css.js";

export default defineConfig({
  plugins: [
    react(),
    // 多份 CSS 生成插件（开发模式）
    multiCSSPlugin(),
  ],
  server: {
    port: 5174,
    host: true,
    headers: {
      "access-control-allow-origin": "*",
    },
    disableHostCheck: true,
  },
  preview: {
    port: 5174,
    host: true,
  },
});
