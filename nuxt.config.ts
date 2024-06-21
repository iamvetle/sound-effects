// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	modules: ["@nuxtjs/tailwindcss", "@vite-pwa/nuxt"],
	// nitro: {
	// 	prerender: {
	// 		// Have to specify this (npx nuxi generate) or manifest.json will become a html file..
	// 		ignore: ["/manifest.json"],
	// 	},
	// },
	pwa: {
		minify: false,
		injectManifest: {
			maximumFileSizeToCacheInBytes: undefined,
		},
		registerType: "autoUpdate",
		manifestFilename: "manifest.json",
		workbox: {
			navigateFallback: "/",
			// ! THIS IS WHAT MADE IT WORK -> including svg, png and ico in "globPatterns"
			globPatterns: ["**/*.{js,wasm,css,html,svg,png,ico}"],
		},
		devOptions: { enabled: true, type: "module" },
	},

	// nitro: {
	// 	prerender: {
	// 		// Have to specify this (npx nuxi generate) or manifest.json will become a html file..
	// 		ignore: ["/manifest.json"],
	// 	},
	// },
	ssr: false,
});
