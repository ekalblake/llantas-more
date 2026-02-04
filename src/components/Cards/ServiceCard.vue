<script setup lang="ts">
defineProps<{
	item: { icon: string; title: string; desc: string };
}>();
</script>

<template>
	<div
		class="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-[var(--light-border-color)] hover:border-[var(--primary-color)] group"
	>
		<div
			class="w-14 h-14 rounded-2xl flex items-center justify-center bg-[var(--primary-color)] text-white mb-6 group-hover:scale-110 transition-transform duration-300"
		>
			<i class="fas text-xl" :class="item.icon"></i>
		</div>

		<h3 class="font-[var(--font-family-heading)] text-xl text-[var(--dark-text-color)] mb-3">
			{{ item.title }}
		</h3>

		<p class="text-gray-600 leading-relaxed">
			{{ item.desc }}
		</p>
	</div>
</template>
