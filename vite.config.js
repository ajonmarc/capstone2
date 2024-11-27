import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
    plugins: [
        laravel({
            input: 'resources/js/app.js',
            refresh: true,
        }),
        vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false,
                },
            },
        }),
    ],
    build: {
        cssCodeSplit: true, // Enable CSS code splitting
        chunkSizeWarningLimit: 1500, // Suppress chunk size warnings
        minify: 'esbuild', // Use esbuild for faster builds
        sourcemap: false, // Disable source maps for production builds
        rollupOptions: {
            output: {
                manualChunks(id) {
                    if (id.includes('node_modules')) {
                        if (id.includes('vue')) {
                            return 'vue'; // Separate Vue into its own chunk
                        }
                        if (id.includes('vue-router')) {
                            return 'vue-router'; // Separate vue-router
                        }
                        if (id.includes('axios')) {
                            return 'axios'; // Separate axios
                        }
                        return 'vendor'; // All other vendor libraries
                    }
                },
            },
        },
    },
});
