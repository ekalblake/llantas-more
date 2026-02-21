<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref, computed, nextTick } from "vue";
import { gsap } from "gsap";

import SectionHeader from "../SectionHeader.vue";
import BrandCard from "../Cards/BrandCard.vue";

type BrandItem = { name: string; logoSrc: string };

const props = defineProps<{
	eyebrow: string;
	title: string;
	subtitle: string;
	items: BrandItem[];
}>();

const duplicatedItems = computed(() => [...props.items, ...props.items]);

const viewportRef = ref<HTMLDivElement | null>(null);
const trackInnerRef = ref<HTMLDivElement | null>(null);

let tween: gsap.core.Tween | null = null;

onMounted(async () => {
	await nextTick();

	const viewport = viewportRef.value;
	const track = trackInnerRef.value;
	if (!viewport || !track) return;

	const loopWidth = track.scrollWidth / 2;

	tween = gsap.to(track, {
		x: -loopWidth,
		duration: 15,
		ease: "none",
		repeat: -1,
	});
});

onBeforeUnmount(() => {
	tween?.kill();
	tween = null;
});
</script>

<template>
	<section id="brands" class="bg-[var(--light-background-color)] py-20 lg:py-28">
		<div class="container mx-auto px-4 lg:px-8">
			<SectionHeader icon="fa-award" :eyebrow="eyebrow" :title="title" :subtitle="subtitle" />
			<div class="relative mt-10">
				<div ref="viewportRef" class="overflow-hidden">
					<div ref="trackInnerRef" class="flex gap-4 will-change-transform">
						<div
							v-for="(b, idx) in duplicatedItems"
							:key="idx + '-' + b.name"
							class="shrink-0 w-[220px] sm:w-[240px]"
						>
							<BrandCard :item="b" />
						</div>
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
