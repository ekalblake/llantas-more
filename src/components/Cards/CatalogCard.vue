<script setup lang="ts">
import type { CatalogItem } from "../../composables/useCart";

defineProps<{
	item: CatalogItem;
	onAdd: (item: CatalogItem) => void;
}>();
</script>

<template>
	<div
		class="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 border border-[var(--light-border-color)] hover:border-[var(--primary-color)]"
	>
		<div class="rounded-xl overflow-hidden bg-[var(--light-background-color)] mb-4">
			<img v-if="item.image" :src="item.image" :alt="item.name" class="w-full h-44 object-cover" loading="lazy" />
			<div v-else class="h-44 flex items-center justify-center text-sm text-gray-500">Imagen pendiente</div>
		</div>

		<h3 class="font-[var(--font-family-heading)] text-lg text-[var(--dark-text-color)] mb-2">
			{{ item.name }}
		</h3>

		<p v-if="item.specs?.length" class="text-sm text-gray-600 mb-4">
			{{ item.specs.join(" • ") }}
		</p>

		<button
			type="button"
			class="w-full bg-[var(--primary-color)] text-white px-5 py-3 rounded-lg font-bold hover:bg-[var(--primary-button-hover-bg-color)] transition-all duration-300 cursor-pointer"
			@click="onAdd(item)"
		>
			Agregar
		</button>
	</div>
</template>
