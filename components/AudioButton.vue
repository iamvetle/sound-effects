<template>
	<button class="uppercase text-base">
		<slot />
	</button>
</template>
<script setup lang="ts">
	defineSlots<{
		default(): any;
	}>();
</script>
