<script setup lang="ts">
defineProps<{
	card: { icon: string; label: string; value: string };
}>();
</script>

<template>
	<div class="bg-white/10 border border-white/10 rounded-2xl p-5 text-center">
		<div class="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mx-auto mb-3">
			<i class="fas text-white" :class="card.icon"></i>
		</div>
		<div class="text-white font-semibold text-sm">{{ card.label }}</div>
		<div class="text-white/80 text-xs mt-1 break-words">{{ card.value }}</div>
	</div>
</template>
