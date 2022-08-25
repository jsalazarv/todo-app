import { defineConfig } from 'vite'

export default defineConfig(() => {
    return {
        base: mode === "deploy" ? "/todo-app" : "/",
    }
});
