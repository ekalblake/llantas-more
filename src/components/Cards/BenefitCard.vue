<script setup lang="ts">
defineProps<{
	item: { icon: string; title: string; desc: string };
}>();
</script>

<template>
	<div class="text-center group">
		<div class="relative inline-block mb-6">
			<div
				class="absolute inset-0 bg-[var(--primary-color)] rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300"
			></div>
			<div
				class="relative bg-[var(--light-background-color)] w-24 h-24 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300"
			>
				<i class="fas text-[var(--primary-color)] text-4xl" :class="item.icon"></i>
			</div>
		</div>
		<h3 class="font-[var(--font-family-heading)] text-2xl text-[var(--dark-text-color)] mb-3">
			{{ item.title }}
		</h3>
		<p class="text-gray-600 leading-relaxed">
			{{ item.desc }}
		</p>
	</div>
</template>
