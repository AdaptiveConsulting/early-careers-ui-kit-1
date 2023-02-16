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
    exclude: [...configDefaults.exclude, "**/e2e/**"],
    environment: "jsdom",
  },
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, "src/index.ts"),
      name: "components",
      // the proper extensions will be added
      fileName: "components",
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        // Since we publish our ./src folder, there's no point
        // in bloating sourcemaps with another copy of it.
        sourcemapExcludeSources: true,
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          react: "React",
          ["react-dom"]: "ReactDOM",
        },
      },
    },
    sourcemap: true,
    // Leave minification up to applications.
    minify: false,
  },
  css: {
    postcss: {
      plugins: [tailwindcss(), autoprefixer],
    },
  },
})
