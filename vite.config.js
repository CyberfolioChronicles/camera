import { sveltekit } from '@sveltejs/kit/vite';
import { enhancedImages } from '@sveltejs/enhanced-img';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	plugins: [enhancedImages(), sveltekit()],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	},
	server: {
		// Fix for dev container, probably not needed if running in wsl directly
		watch: {
			usePolling: true
		}
	},
	build: {
		// Can be set to false for better readability when trying to convert to quickjs
		minify: true
	}
});
