<template>
	<div>
		<audio ref="audioRef" nodownload nofullscreen>
			<source :src="soundeffect.src" type="audio/mpeg" />
		</audio>
		<audio-button @click="playAudio" class="audiobutton">{{
			soundeffect.title
		}}</audio-button>
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
	.audiobutton {
		font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
			"Lucida Sans", Arial, sans-serif;
		height: 3em;
		width: 70vw;
		text-transform: uppercase;
		font-size: 16px;
	}
</style>
