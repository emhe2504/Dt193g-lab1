import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(import.meta.dirname, "index.html"),
                frameworkOne: resolve(import.meta.dirname, "frameworkOne.html"),
                frameworkTwo: resolve(import.meta.dirname, "frameworkTwo.html"),
                publication: resolve(import.meta.dirname, "publication.html")
            }
        }
    }
})