import { defineConfig } from 'vite'

export default defineConfig(
	{
		css: {
			postcss: './postcss.config.js'
		},
		build: {
			outDir: './docs/generated',
			rollupOptions: {
				input: {
					main: './docs/js/main.ts',
				},
				output: {
					entryFileNames: '[name].js',
					chunkFileNames: '[name].js',
					assetFileNames: '[name].[ext]',
				}
			}
		}
	}
)