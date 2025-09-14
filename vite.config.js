import { defineConfig } from 'vite'

export default defineConfig(
	{
		css: {
			postcss: './postcss.config.js'
		},
		build: {
			outDir: './src/generated',
			rollupOptions: {
				input: {
					main: './src/js/main.ts',
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