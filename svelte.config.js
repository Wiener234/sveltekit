import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: null
		}),
		// target: '#svelte',
	},
	preprocess: vitePreprocess(),
	paths:{
		base: "/repo-name"
	}
};

export default config;
