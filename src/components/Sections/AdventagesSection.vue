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
	<section class="code-section bg-white py-20 lg:py-28" id="sfmutsa">
		<div class="container mx-auto px-4 lg:px-8">
			<div class="text-center max-w-3xl mx-auto mb-16">
				<SectionHeader icon="fa-star" :eyebrow="eyebrow" :title="title" :subtitle="subtitle" />
			</div>

			<div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
				<BenefitCard v-for="b in items" :key="b.title" :item="b" />
			</div>

			<div
				class="grid grid-cols-2 lg:grid-cols-4 gap-6 bg-gradient-to-r from-[var(--dark-background-color)] to-[var(--primary-color)] rounded-2xl p-8 lg:p-12 text-center"
			>
				<div class="border-r border-white/20 last:border-r-0">
					<div class="text-4xl lg:text-5xl font-bold text-white mb-2">10+</div>
					<div class="text-[var(--gray-text-color)] font-medium">Años de Experiencia</div>
				</div>
				<div class="border-r border-white/20 last:border-r-0">
					<div class="text-4xl lg:text-5xl font-bold text-white mb-2">5000+</div>
					<div class="text-[var(--gray-text-color)] font-medium">Clientes Satisfechos</div>
				</div>
				<div class="border-r border-white/20 last:border-r-0">
					<div class="text-4xl lg:text-5xl font-bold text-white mb-2">50+</div>
					<div class="text-[var(--gray-text-color)] font-medium">Marcas Disponibles</div>
				</div>
				<div>
					<div class="text-4xl lg:text-5xl font-bold text-white mb-2">100%</div>
					<div class="text-[var(--gray-text-color)] font-medium">Satisfacción</div>
				</div>
			</div>
		</div>
	</section>
</template>
