<template>
	<button>
		<slot />
	</button>
</template>

<script setup lang="ts">
	defineSlots<{
		default(): any;
	}>();
</script>
