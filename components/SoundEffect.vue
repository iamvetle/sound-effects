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

	defineProps<{
		soundeffect: SoundEffect;
	}>();

	function playAudio() {
		if (audioRef.value) {
			audioRef.value.pause();
			audioRef.value.play();
			audioRef.value.currentTime = 0;
		}
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
		width: 80vw;
		text-transform: uppercase;
		font-size: 16px;
	}
</style>
