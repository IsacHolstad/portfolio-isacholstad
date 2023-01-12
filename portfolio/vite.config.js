import {resolve} from 'path'
import {defineConfig} from 'vite'

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                home: resolve(__dirname, 'index.html'),
                skills: resolve(__dirname, 'skills.html'),
                projects: resolve(__dirname, 'projects.html'),
            }
        }
    }
});

