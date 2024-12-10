import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";
// import cleanPlugin from "vite-plugin-clean";

export default defineConfig({
  resolve: {
    alias: {
      // react: path.resolve(__dirname, "node_modules/react"),
      // "styled-components": path.resolve(
      //   __dirname,
      //   "node_modules/styled-components"
      // ),
      // Components: path.resolve(__dirname, "client/html/Components/"),
      "webmotors-react-pj": path.resolve(
        __dirname,
        "../webmotors.react.pj/dist"
      ),

      // Containers: path.resolve(__dirname, "client/html/Containers/"),
      // Api: path.resolve(__dirname, "client/js/Api/"),
      // Helpers: path.resolve(__dirname, "client/js/Helpers/"),
      // Libraries: path.resolve(__dirname, "client/js/Libraries/"),
      // scss: path.resolve(__dirname, "client/scss/"),
      // "webmotors-react-pj/translate": path.resolve(
      //   __dirname,
      //   `../../../webmotors.react.pj/dist/translate/${process.env.translate}`
      // ),
      // "webmotors-react-pj/config": path.resolve(
      //   __dirname,
      //   `../../../webmotors.react.pj/dist/config/env/${process.env.NODE_ENV}`
      // ),
      // "webmotors-react-pj/i18n/lang": path.resolve(
      //   __dirname,
      //   `../../../webmotors.react.pj/i18n/lang/${process.env.translate}.js`
      // ),
      // "webmotors-react-pj/i18n/config": path.resolve(
      //   __dirname,
      //   `../../../webmotors.react.pj/i18n/config/${process.env.translate}.js`
      // ),
      // "webmotors-react-pj": path.resolve(
      //   __dirname,
      //   "../../../webmotors.react.pj/dist"
      // ),
      // "@": path.resolve(__dirname, "src"),
      // "@webmotors/eleanor-ui/webmotors": path.resolve(
      //   __dirname,
      //   "node_modules/@webmotors/eleanor-ui/dist/webmotors"
      // ),
    },
  },
  build: {
    outDir: path.join(process.cwd(), ".build"),
    rollupOptions: {
      output: {
        entryFileNames: "moreloyalty/[name].bundle.js?t=[hash]",
        chunkFileNames: "[name].bundle.js?t=[hash]",
      },
    },
  },
  plugins: [
    react(),
    // cleanPlugin(),
    // copy({
    //   targets: [{ src: "public/*", dest: ".build" }],
    // }),
    // createHtmlPlugin({
    //   minify: true,
    //   inject: {
    //     data: {
    //       environment: process.env.NODE_ENV,
    //       urls: require("./config/urls"),
    //       scripts: require("./config/scripts"),
    //     },
    //   },
    // }),
  ],
  server: {
    open: true,
    host: "local.webmotors.com.br",
    port: 8000,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers":
        "X-Requested-With, content-type, Authorization",
    },
  },
});
