import { defineConfig } from "vitest/config"
import react from "@vitejs/plugin-react"
import { resolve } from "path"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    /* for example, use global to avoid globals imports (describe, test, expect): */
    globals: true,
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
})
