// import adapter from '@sveltejs/adapter-auto';
import adapter from '@sveltejs/adapter-static';

import preprocess from 'svelte-preprocess';
import { mdsvex } from 'mdsvex';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	extensions: ['.svelte', '.svx', '.md', '.svelte.md'],
	preprocess: [
		mdsvex({
			extensions: ['.svx', '.md', '.svelte.md'],
			layout: {
				handwritten: 'src/layouts/handwritten.svelte'
			}
		}),
		preprocess({})
	],

	kit: {
		alias: {
			'@douganderson444/rough-css': '/src/lib/index.js'
		},
		adapter: adapter({
			pages: 'docs',
			assets: 'docs'
		}),
		paths: {
			// change below to your repo name
			base: process.env.NODE_ENV === 'development' ? '' : '/rough-css'
		}
	}
};

export default config;
