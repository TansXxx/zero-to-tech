import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // 单根改造之后整个项目只有一个入口 index.html（就在项目根目录），
  // Vite 默认就把它当入口，所以不需要再写 build.rollupOptions.input。
});
