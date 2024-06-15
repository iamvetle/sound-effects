// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	nitro: {
		prerender: {
			// Have to specify this (npx nuxi generate) or manifest.json will become a html file..
			ignore: ["/manifest.json"],
		},
	},
});
