import { purgeCss } from 'vite-plugin-tailwind-purgecss';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		sveltekit(),
		purgeCss({
			// Excluding classes that start with this because it was removing some arbitrary selectors from tailwind such as [&>li]:!mt-0
			safelist: { greedy: [/^\[&>/] }
		})
	]
});
