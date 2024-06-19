<template>
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
			title: "Oh my god bruh",
			src: "oh-my-god-bruh-oh-hell-naw-man-wtf.mp3",
		},
		{
			title: "DJ airhorn",
			src: "dj-airhorn.mp3",
		},
		{
			title: "Correct buzzer",
			src: "correct-buzzer.mp3",
		},
		{
			title: "Wrong buzzer",
			src: "wrong-buzzer.mp3",
		},
		{
			title: "Sad violin",
			src: "sad-violin.mp3",
		},
		{
			title: "I blame Joe Biden",
			src: "i-blame-joe-biden.mp3",
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
				href: "/ios/180.png",
			},
		],
	});
</script>
