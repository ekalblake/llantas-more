<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from "vue";
import SectionHeader from "../SectionHeader.vue";
import BrandCard from "../Cards/BrandCard.vue";

type BrandItem = { name: string; logoSrc: string };

const props = defineProps<{
	eyebrow: string;
	title: string;
	subtitle: string;
	items: BrandItem[];
}>();

const trackRef = ref<HTMLDivElement | null>(null);
let timer: number | null = null;

const scrollOne = (dir: 1 | -1) => {
	const el = trackRef.value;
	if (!el) return;

	const first = el.querySelector<HTMLElement>(".snap-start");
	const slideWidth = first ? first.offsetWidth : 240;
	const maxScroll = el.scrollWidth - el.clientWidth;

	if (dir === 1) {
		if (el.scrollLeft + slideWidth >= maxScroll) {
			el.scrollTo({ left: 0, behavior: "smooth" });
		} else {
			el.scrollBy({ left: slideWidth + 24, behavior: "smooth" });
		}
	}

	if (dir === -1) {
		if (el.scrollLeft <= 0) {
			el.scrollTo({ left: maxScroll, behavior: "smooth" });
		} else {
			el.scrollBy({ left: -(slideWidth + 24), behavior: "smooth" });
		}
	}
};

onMounted(() => {
	timer = window.setInterval(() => scrollOne(1), 5000);
});

onBeforeUnmount(() => {
	if (timer) window.clearInterval(timer);
});
</script>

<template>
	<section id="brands" class="bg-[var(--light-background-color)] py-20 lg:py-28">
		<div class="container mx-auto px-4 lg:px-8">
			<SectionHeader icon="fa-award" :eyebrow="eyebrow" :title="title" :subtitle="subtitle" />

			<div class="relative mt-10">
				<button
					type="button"
					class="cursor-pointer hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 z-10 w-10 h-10 rounded-full bg-white shadow-lg border border-[var(--light-border-color)] items-center justify-center hover:scale-105 transition"
					@click="scrollOne(-1)"
				>
					<span aria-hidden="true">‹</span>
				</button>

				<button
					type="button"
					class="cursor-pointer hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 z-10 w-10 h-10 rounded-full bg-white shadow-lg border border-[var(--light-border-color)] items-center justify-center hover:scale-105 transition"
					@click="scrollOne(1)"
				>
					<span aria-hidden="true">›</span>
				</button>

				<div
					ref="trackRef"
					class="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-2 [-ms-overflow-style:none] [scrollbar-width:none]"
				>
					<div
						v-for="(b, idx) in items"
						:key="b.name"
						class="snap-start shrink-0 w-[220px] sm:w-[240px]"
						:data-slide="idx === 0 ? '1' : '0'"
					>
						<BrandCard :item="b" />
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<style>
div::-webkit-scrollbar {
	display: none;
}
</style>
