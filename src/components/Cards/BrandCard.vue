<script setup lang="ts">
defineProps<{
	item: { name: string; logoSrc: string };
}>();
</script>

<template>
	<div class="p-6 flex items-center justify-center">
		<img :src="item.logoSrc" :alt="item.name" class="h-50 sm:h-50 object-contain" loading="lazy" />
	</div>
</template>
