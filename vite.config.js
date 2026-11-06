import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, "index.html"),
                frameworkOne: resolve(__dirname, "frameworkOne.html"),
                frameworkTwo: resolve(__dirname, "frameworkTwo.html"),
                publication: resolve(__dirname, "publication.html")
            }
        }
    }
})