// vite.config.ts
import { configDefaults, defineConfig } from "file:///Users/abdurrahman.mohamoud/Desktop/early-careers-ui-kit-1/node_modules/vitest/dist/config.js";
import react from "file:///Users/abdurrahman.mohamoud/Desktop/early-careers-ui-kit-1/node_modules/@vitejs/plugin-react/dist/index.mjs";
import { resolve } from "path";
import tailwindcss from "file:///Users/abdurrahman.mohamoud/Desktop/early-careers-ui-kit-1/node_modules/tailwindcss/lib/index.js";
import autoprefixer from "file:///Users/abdurrahman.mohamoud/Desktop/early-careers-ui-kit-1/node_modules/autoprefixer/lib/autoprefixer.js";
var __vite_injected_original_dirname = "/Users/abdurrahman.mohamoud/Desktop/early-careers-ui-kit-1/components";
var vite_config_default = defineConfig({
  plugins: [react()],
  test: {
    /* for example, use global to avoid globals imports (describe, test, expect): */
    globals: true,
    exclude: [...configDefaults.exclude, "**/e2e/**", "**/tests-examples/**"]
  },
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__vite_injected_original_dirname, "src/index.ts"),
      name: "components",
      // the proper extensions will be added
      fileName: "components"
    }
  },
  css: {
    postcss: {
      plugins: [tailwindcss(), autoprefixer]
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvYWJkdXJyYWhtYW4ubW9oYW1vdWQvRGVza3RvcC9lYXJseS1jYXJlZXJzLXVpLWtpdC0xL2NvbXBvbmVudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy9hYmR1cnJhaG1hbi5tb2hhbW91ZC9EZXNrdG9wL2Vhcmx5LWNhcmVlcnMtdWkta2l0LTEvY29tcG9uZW50cy92aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMvYWJkdXJyYWhtYW4ubW9oYW1vdWQvRGVza3RvcC9lYXJseS1jYXJlZXJzLXVpLWtpdC0xL2NvbXBvbmVudHMvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBjb25maWdEZWZhdWx0cywgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVzdC9jb25maWdcIlxuaW1wb3J0IHJlYWN0IGZyb20gXCJAdml0ZWpzL3BsdWdpbi1yZWFjdFwiXG5pbXBvcnQgeyByZXNvbHZlIH0gZnJvbSBcInBhdGhcIlxuaW1wb3J0IHRhaWx3aW5kY3NzIGZyb20gXCJ0YWlsd2luZGNzc1wiXG5pbXBvcnQgYXV0b3ByZWZpeGVyIGZyb20gXCJhdXRvcHJlZml4ZXJcIlxuXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcGx1Z2luczogW3JlYWN0KCldLFxuICB0ZXN0OiB7XG4gICAgLyogZm9yIGV4YW1wbGUsIHVzZSBnbG9iYWwgdG8gYXZvaWQgZ2xvYmFscyBpbXBvcnRzIChkZXNjcmliZSwgdGVzdCwgZXhwZWN0KTogKi9cbiAgICBnbG9iYWxzOiB0cnVlLFxuICAgIGV4Y2x1ZGU6IFsuLi5jb25maWdEZWZhdWx0cy5leGNsdWRlLCBcIioqL2UyZS8qKlwiLCBcIioqL3Rlc3RzLWV4YW1wbGVzLyoqXCJdLFxuICB9LFxuICBidWlsZDoge1xuICAgIGxpYjoge1xuICAgICAgLy8gQ291bGQgYWxzbyBiZSBhIGRpY3Rpb25hcnkgb3IgYXJyYXkgb2YgbXVsdGlwbGUgZW50cnkgcG9pbnRzXG4gICAgICBlbnRyeTogcmVzb2x2ZShfX2Rpcm5hbWUsIFwic3JjL2luZGV4LnRzXCIpLFxuICAgICAgbmFtZTogXCJjb21wb25lbnRzXCIsXG4gICAgICAvLyB0aGUgcHJvcGVyIGV4dGVuc2lvbnMgd2lsbCBiZSBhZGRlZFxuICAgICAgZmlsZU5hbWU6IFwiY29tcG9uZW50c1wiLFxuICAgIH0sXG4gIH0sXG4gIGNzczoge1xuICAgIHBvc3Rjc3M6IHtcbiAgICAgIHBsdWdpbnM6IFt0YWlsd2luZGNzcygpLCBhdXRvcHJlZml4ZXJdLFxuICAgIH0sXG4gIH0sXG59KVxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFpWSxTQUFTLGdCQUFnQixvQkFBb0I7QUFDOWEsT0FBTyxXQUFXO0FBQ2xCLFNBQVMsZUFBZTtBQUN4QixPQUFPLGlCQUFpQjtBQUN4QixPQUFPLGtCQUFrQjtBQUp6QixJQUFNLG1DQUFtQztBQU96QyxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTLENBQUMsTUFBTSxDQUFDO0FBQUEsRUFDakIsTUFBTTtBQUFBO0FBQUEsSUFFSixTQUFTO0FBQUEsSUFDVCxTQUFTLENBQUMsR0FBRyxlQUFlLFNBQVMsYUFBYSxzQkFBc0I7QUFBQSxFQUMxRTtBQUFBLEVBQ0EsT0FBTztBQUFBLElBQ0wsS0FBSztBQUFBO0FBQUEsTUFFSCxPQUFPLFFBQVEsa0NBQVcsY0FBYztBQUFBLE1BQ3hDLE1BQU07QUFBQTtBQUFBLE1BRU4sVUFBVTtBQUFBLElBQ1o7QUFBQSxFQUNGO0FBQUEsRUFDQSxLQUFLO0FBQUEsSUFDSCxTQUFTO0FBQUEsTUFDUCxTQUFTLENBQUMsWUFBWSxHQUFHLFlBQVk7QUFBQSxJQUN2QztBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
