<template>
	<div>
		<audio ref="audioRef" :src="soundeffect.src"></audio>
		<audio-button @click="playAudio"
			>Click to play {{ soundeffect.title }}</audio-button
		>
	</div>
</template>

<script setup lang="ts">
	// Fetches the sound effect that it should have

	const audioRef = ref<HTMLAudioElement | null>(null);

	// Stores the actual sound (url to sound)

	type SoundEffect = {
		title: string;
		src: string;
	};

	const props = defineProps<{
		soundeffect: SoundEffect;
	}>();

	// const propSoundeffect = toRef(() => props.soundeffect);

	// onMounted(async () => {
	// 	const response = (await $fetch(propSoundeffect.value.src)) as Blob;

	// 	const url = URL.createObjectURL(response);
	// 	sound.value = url;
	// 	console.log("url for sound", url);
	// 	console.log("entire response with $fetch", response);
	// });

	function playAudio() {
		audioRef.value?.play();
	}
</script>

<style>
	audio {
		display: none;
	}
</style>
