import { configDefaults, defineConfig } from "vitest/config"
import react from "@vitejs/plugin-react"
import { resolve } from "path"
import tailwindcss from "tailwindcss"
import autoprefixer from "autoprefixer"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    /* for example, use global to avoid globals imports (describe, test, expect): */
    globals: true,
    exclude: [...configDefaults.exclude, "**/e2e/**", "**/tests-examples/**"],
  },
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, "src/index.ts"),
      name: "components",
      // the proper extensions will be added
      fileName: "components",
    },
  },
  css: {
    postcss: {
      plugins: [tailwindcss(), autoprefixer],
    },
  },
})
