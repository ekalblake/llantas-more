<script setup lang="ts">
defineProps<{
	category: {
		badge?: string;
		image: string;
		title: string;
		href: string;
		bullets: string[];
	};
	href?: string;
}>();
</script>

<template>
	<div
		class="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-[var(--light-border-color)] hover:border-[var(--primary-color)]"
	>
		<div class="relative h-64 overflow-hidden">
			<img
				:src="category.image"
				:alt="category.title"
				class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
			/>
			<div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

			<div v-if="category.badge" class="absolute bottom-4 left-4 right-4">
				<div class="bg-[var(--primary-color)] text-white px-3 py-1 rounded-full text-xs font-bold inline-block">
					{{ category.badge }}
				</div>
			</div>
		</div>

		<div class="p-6">
			<h3 class="font-[var(--font-family-heading)] text-2xl text-[var(--dark-text-color)] mb-4">
				{{ category.title }}
			</h3>

			<ul class="space-y-2 mb-6">
				<li v-for="b in category.bullets" :key="b" class="flex items-center text-sm text-gray-700">
					<i class="fas fa-check-circle text-[var(--accent4-color)] mr-2"></i>
					{{ b }}
				</li>
			</ul>

			<a
				:href="href || '#catalog'"
				class="cursor-pointer block text-center bg-[var(--dark-background-color)] text-white px-6 py-3 rounded-lg font-bold hover:bg-[var(--primary-color)] transition-all duration-300 group-hover:shadow-lg"
			>
				Ver Opciones <i class="fas fa-arrow-right ml-2"></i>
			</a>
		</div>
	</div>
</template>
