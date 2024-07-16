<template>
	<VitePwaManifest />
	<div id="page-wrapper">
		<h1 class="text-3xl mt-12 mb-8 text-center">Sound effects</h1>

		<div class="flex flex-wrap justify-center lg:w-4/6 mx-auto">
			<SoundEffect
				class="mt-4 text-center p-2 border-2 mx-2 flex h-auto rounded-md hover:opacity-75"
				v-for="sound in listOfSoundeffects"
				:soundeffect="sound"
				:key="sound.src"
			/>
		</div>
	</div>
</template>

<script setup lang="ts">
	import listOfSoundeffects from "~/assets/listOfSoundeffects";

	useSeoMeta({
		title: "Sound effects",
		description:
			"Click on the various buttons to hear the different sound effects.",
	});

	useHead({
		htmlAttrs: {
			lang: "en",
		},
		meta: [
			{
				name: "theme-color",
				content: "#ffffff",
			},
		],
		link: [
			{
				rel: "icon",
				href: "/favicon.ico",
			},
			{
				rel: "manifest",
				href: "/manifest.json",
			},
			{
				rel: "apple-touch-icon",
				sizes: "180x180",
				href: "/ios/180-wb.png",
			},
		],
	});
</script>
