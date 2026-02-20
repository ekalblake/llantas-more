<script setup lang="ts">
import SectionHeader from "../SectionHeader.vue";
import CatalogCard from "../Cards/CatalogCard.vue";
import { useCart } from "../../composables/useCart";

type CatalogItem = {
	id: string;
	name: string;
	brand?: string;
	specs?: string[];
	image?: string;
	diameter?: number;
	page?: number;
	slot?: number;
};

export type Category = {
	key: string;
	label: string;
	vehicle: string;
	diameter?: number;
	items: CatalogItem[];
};

defineProps<{
	eyebrow: string;
	title: string;
	subtitle: string;
	categories: Category[];
}>();

const cart = useCart();
</script>

<template>
	<section class="bg-[var(--light-background-color)] py-20 lg:py-28" id="catalog">
		<div class="container mx-auto px-4 lg:px-8">
			<SectionHeader icon="fa-store" :eyebrow="eyebrow" :title="title" :subtitle="subtitle" />

			<!-- Categorías -->
			<div class="mt-12 space-y-14">
				<div v-for="cat in categories" :key="cat.key">
					<div class="flex items-center justify-between mb-6">
						<h3 class="font-[var(--font-family-heading)] text-2xl text-[var(--dark-text-color)]">
							{{ cat.label }}
						</h3>
						<a href="#contact" class="text-sm font-semibold text-[var(--primary-color)] hover:underline">
							Enviar mi selección
						</a>
					</div>

					<div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
						<CatalogCard v-for="it in cat.items" :key="it.id" :item="it" :onAdd="cart.add" />
					</div>
				</div>
			</div>
			<!-- Carrito (resumen) -->
			<div class="mt-10 bg-white rounded-2xl shadow-lg border border-[var(--light-border-color)] p-6">
				<div class="flex items-center justify-between gap-4">
					<h3 class="font-[var(--font-family-heading)] text-xl text-[var(--dark-text-color)]">
						Tu selección ({{ cart.count }})
					</h3>

					<button
						type="button"
						class="text-sm font-semibold text-[var(--primary-color)] hover:underline"
						@click="cart.clear()"
						v-if="cart.lines.length"
					>
						Limpiar
					</button>
				</div>

				<p v-if="!cart.lines.length" class="text-gray-600 mt-2">Aún no agregas productos.</p>

				<ul v-else class="mt-4 space-y-3">
					<li
						v-for="line in cart.lines"
						:key="line.item.id"
						class="flex items-center justify-between gap-4 border-b border-[var(--light-border-color)] pb-3"
					>
						<div class="min-w-0">
							<p class="font-semibold text-[var(--dark-text-color)] truncate">
								{{ line.item.name }}
							</p>
							<p v-if="line.item.brand" class="text-sm text-gray-600">
								{{ line.item.brand }}
							</p>
						</div>

						<div class="flex items-center gap-2 shrink-0">
							<button
								class="w-9 h-9 rounded-lg border border-[var(--light-border-color)] hover:border-[var(--primary-color)]"
								@click="cart.dec(line.item.id)"
								type="button"
							>
								-
							</button>
							<span class="w-6 text-center font-bold">{{ line.qty }}</span>
							<button
								class="w-9 h-9 rounded-lg border border-[var(--light-border-color)] hover:border-[var(--primary-color)]"
								@click="cart.add(line.item)"
								type="button"
							>
								+
							</button>
							<button
								class="ml-2 text-sm font-semibold text-gray-500 hover:text-[var(--primary-color)]"
								@click="cart.remove(line.item.id)"
								type="button"
							>
								Quitar
							</button>
						</div>
					</li>
				</ul>

				<p class="text-sm text-gray-500 mt-4">
					* No mostramos precios: te confirmamos stock y compatibilidad por WhatsApp.
				</p>
			</div>
		</div>
	</section>
</template>
