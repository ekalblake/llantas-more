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
	carItems: BrandItem[];
}>();

const duplicatedItems = computed(() => [...props.items, ...props.items]);

const carItems = computed(() => [...props.carItems, ...props.carItems]);

const viewportRef = ref<HTMLDivElement | null>(null);
const trackInnerRef = ref<HTMLDivElement | null>(null);

const cartItemRef = ref<HTMLDivElement | null>(null);
const trackInnerCartRef = ref<HTMLDivElement | null>(null);

let tween: gsap.core.Tween | null = null;
let tweenCart: gsap.core.Tween | null = null;

const trackSponsor = async () => {
	const viewport = viewportRef.value;
	const track = trackInnerRef.value;
	if (!viewport || !track) return;

	const loopWidth = track.scrollWidth / 2;

	tweenCart = gsap.to(track, {
		x: -loopWidth,
		duration: 35,
		ease: "none",
		repeat: -1,
	});
};

const trackTires = async () => {
	const viewport = cartItemRef.value;
	const track = trackInnerCartRef.value;
	if (!viewport || !track) return;

	const loopWidth = track.scrollWidth / 2;

	tween = gsap.to(track, {
		x: -loopWidth,
		duration: 35,
		ease: "none",
		repeat: -1,
	});
};

onMounted(async () => {
	await nextTick();

	await trackSponsor();
	await trackTires();
});

onBeforeUnmount(() => {
	tween?.kill();
	tween = null;
	tweenCart?.kill();
	tweenCart = null;
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
			<div class="relative mt-10">
				<div ref="cartItemRef" class="overflow-hidden">
					<div ref="trackInnerCartRef" class="flex gap-4 will-change-transform">
						<div
							v-for="(b, idx) in carItems"
							:key="idx + '-' + b.name"
							class="shrink-0 w-[420px] sm:w-[440px]"
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
