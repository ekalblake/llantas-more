<script setup lang="ts">
import SectionHeader from "../SectionHeader.vue";
import BenefitCard from "../Cards/BenefitCard.vue";

type BenefitItem = { icon: string; title: string; desc: string };

defineProps<{
	eyebrow: string;
	title: string;
	subtitle: string;
	items: BenefitItem[];
}>();
</script>

<template>
	<section class="bg-white py-20 lg:py-28" id="advantages">
		<div class="container mx-auto px-4 lg:px-8">
			<SectionHeader icon="fa-star" :eyebrow="eyebrow" :title="title" :subtitle="subtitle" />

			<div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
				<BenefitCard v-for="b in items" :key="b.title" :item="b" />
			</div>
		</div>
	</section>
</template>
