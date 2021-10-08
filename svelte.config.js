/** @type {import('@sveltejs/kit').Config} */
import node from "@sveltejs/adapter-node";
import vercel from '@sveltejs/adapter-vercel'

const config = {
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: "#svelte",
		adapter: vercel(),
		// adapter: node({ env: { port: process.env.PORT } }),
	},
};

export default config;
