import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  resolve: {
    alias: {
      "webmotors-react-pj": path.resolve(
        __dirname,
        "../webmotors.react.pj/dist"
      ),
    },
  },
  plugins: [react()],
});
