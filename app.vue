<template>
	<div>
		<SoundEffect
			class="soundeffect"
			v-for="sound in listOfSoundeffects"
			:soundeffect="sound"
			:key="sound.src"
		/>
	</div>
</template>

<script setup lang="ts">
	type SoundEffect = {
		title: string;
		src: string;
	};

	const listOfSoundeffects: SoundEffect[] = [
		{
			title: "Impressed audience",
			src: "/audience-impressed-laugh.mp3",
		},
		{
			title: "Sitcom laughter",
			src: "/sitcom-audience-laugh.mp3",
		},
		{
			title: "AAAAUUUGHHHH",
			src: "aaa.mp3",
		},
		{
			title: "Ah that's hot",
			src: "ah-smith.mp3",
		},
		{
			title: "Vine boom",
			src: "vine-boom.mp3",
		},
		{
			title: "Huh?",
			src: "huh-cat.mp3",
		},
		{
			title: "Bass drop",
			src: "bass-drop.mp3",
		},
		{
			title: "Short fart",
			src: "fart.mp3",
		},
		{
			title: "Wet fart",
			src: "wet-fart.mp3",
		},
		{
			title: "Oh no fart",
			src: "oh-no-fart.mp3",
		},
		{
			title: "What up guys?",
			src: "what-up-guys.mp3",
		},
		{
			title: "Samsung notification",
			src: "samsung-notification-sound.mp3",
		},
		{
			title: "Amoung us",
			src: "among-us-sound.mp3",
		},
		{
			title: "Oh my god bruh, oh hell naw man",
			src: "oh-my-god-bruh-oh-hell-naw-man-wtf.mp3",
		},
	];

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
				content: "#636f95",
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
				href: "/ios/180.png",
			},
		],
	});
</script>

<style scoped>
	.soundeffect {
		/** Have to do that when it is block - not margin left and right at auto */
		text-align: center;
		margin-top: 1em;
		display: block;
	}
</style>
