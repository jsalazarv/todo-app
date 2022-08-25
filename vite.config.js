import { defineConfig } from 'vite'

export default defineConfig(({command, mode}) => {
    return {
        base: mode === "deploy" ? "/todo-app" : "/",
    }
});
