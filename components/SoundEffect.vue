<template>
	<div>
		<audio class="invisible" ref="audioRef" nodownload nofullscreen>
			<source :src="soundeffect.src" type="audio/mpeg" />
		</audio>
		<audio-button @click="playAudio" class="">{{
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
