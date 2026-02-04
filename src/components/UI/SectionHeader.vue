<script setup lang="ts">
defineProps<{
	icon: string;
	eyebrow: string;
	title: string;
	subtitle: string;
}>();
</script>

<template>
	<div class="text-center max-w-3xl mx-auto mb-16">
		<div
			class="inline-block bg-[var(--light-background-color)] text-[var(--primary-color)] px-4 py-2 rounded-full font-semibold text-sm mb-4"
		>
			<i class="fas mr-2" :class="icon"></i>
			{{ eyebrow }}
		</div>

		<h2
			class="font-[var(--font-family-heading)] text-4xl sm:text-5xl lg:text-6xl text-[var(--dark-text-color)] mb-6"
		>
			{{ title }}
		</h2>

		<p class="text-lg text-gray-600">
			{{ subtitle }}
		</p>
	</div>
</template>
