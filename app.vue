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
