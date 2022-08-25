import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig(() => {
    return {
        rollupOptions: {
            main: resolve(__dirname, "index.html")
        }
    }
});
