<script setup lang="ts">
import SectionHeader from "../SectionHeader.vue";
import CatalogCard from "../Cards/CatalogCard.vue";
import { useCart } from "../../composables/useCart";
import { reactive } from "vue";
import type { CatalogItem } from "../../composables/useCart";

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

const catRefs = reactive<Record<string, HTMLDivElement | null>>({});

const setCatRef = (key: string, el: HTMLDivElement | null) => {
	if (!el) return;
	catRefs[key] = el;
};

const scrollCat = (key: string, dir: 1 | -1) => {
	const el = catRefs[key];
	if (!el) return;

	const slide = el.querySelector<HTMLElement>(".snap-start");
	const slideWidth = slide ? slide.offsetWidth : 280;
	const gap = 24;
	const step = slideWidth + gap;

	const maxScroll = el.scrollWidth - el.clientWidth;
	const next = el.scrollLeft + dir * step;

	if (next >= maxScroll - 5) {
		el.scrollTo({ left: 0, behavior: "smooth" });
		return;
	}

	if (next <= 0) {
		el.scrollTo({ left: maxScroll, behavior: "smooth" });
		return;
	}

	el.scrollBy({ left: dir * step, behavior: "smooth" });
};

const canScroll = (key: string) => {
	const el = catRefs[key];
	if (!el) return false;
	return el.scrollWidth > el.clientWidth + 5;
};
</script>

<template>
	<section class="bg-white py-10 lg:pt-15 lg:py-5" id="catalog">
		<div class="container mx-auto px-4 lg:px-8">
			<SectionHeader icon="fa-store" :eyebrow="eyebrow" :title="title" :subtitle="subtitle" />

			<div class="mt-12 space-y-14">
				<div v-for="cat in categories" :key="cat.key">
					<div class="flex items-center justify-between mb-6">
						<h3 class="font-[var(--font-family-heading)] text-2xl text-[var(--dark-text-color)]">
							{{ cat.label }}
						</h3>
					</div>
					<div class="relative">
						<button
							v-if="canScroll(cat.key)"
							type="button"
							class="cursor-pointer hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-10 h-10 rounded-full bg-white shadow-lg border border-[var(--light-border-color)] items-center justify-center hover:scale-105 transition"
							@click="scrollCat(cat.key, -1)"
						>
							‹
						</button>
						<div
							:ref="(el) => setCatRef(cat.key, el as HTMLDivElement)"
							class="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 [-ms-overflow-style:none] [scrollbar-width:none]"
						>
							<div
								v-for="it in cat.items"
								:key="it.id"
								class="snap-start shrink-0 w-[260px] sm:w-[280px]"
							>
								<CatalogCard :item="it" :onAdd="cart.add" />
							</div>
						</div>

						<button
							v-if="canScroll(cat.key)"
							type="button"
							class="cursor-pointer hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-10 h-10 rounded-full bg-white shadow-lg border border-[var(--light-border-color)] items-center justify-center hover:scale-105 transition"
							@click="scrollCat(cat.key, 1)"
						>
							›
						</button>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>
<style>
.no-scrollbar::-webkit-scrollbar {
	display: none;
}
</style>
