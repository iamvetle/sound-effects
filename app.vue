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
	const listOfSoundeffects = [
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
	];
</script>

<style scoped>
	.soundeffect {
		/** Have to do that when it is block - not margin left and right at auto */
		text-align: center;
		margin-top: 1em;
		display: block;
	}
</style>
