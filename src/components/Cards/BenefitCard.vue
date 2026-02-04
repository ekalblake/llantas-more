<script setup lang="ts">
defineProps<{
	item: { icon: string; title: string; desc: string };
}>();
</script>

<template>
	<div
		class="rounded-2xl p-8 border border-[var(--light-border-color)] hover:border-[var(--primary-color)] hover:shadow-xl transition-all duration-300"
	>
		<div class="flex items-start gap-4">
			<div class="w-12 h-12 rounded-xl bg-[var(--light-background-color)] flex items-center justify-center">
				<i class="fas text-[var(--primary-color)]" :class="item.icon"></i>
			</div>

			<div>
				<h3 class="font-[var(--font-family-heading)] text-lg text-[var(--dark-text-color)] mb-2">
					{{ item.title }}
				</h3>
				<p class="text-gray-600 leading-relaxed">
					{{ item.desc }}
				</p>
			</div>
		</div>
	</div>
</template>
