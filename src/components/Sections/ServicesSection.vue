<script setup lang="ts">
import SectionHeader from "../SectionHeader.vue";
import ServiceCard from "../Cards/ServiceCard.vue";

type ServiceItem = { icon: string; title: string; desc: string };

defineProps<{
	eyebrow: string;
	title: string;
	subtitle: string;

	// 👇 nuevo: 2 listas (sin cambiar tu estilo)
	itemsAros: ServiceItem[];
	itemsMecanica: ServiceItem[];
}>();
</script>

<template>
	<section class="bg-[var(--light-background-color)] py-20 lg:py-28" id="services">
		<div class="container mx-auto px-4 lg:px-8">
			<SectionHeader icon="fa-tools" :eyebrow="eyebrow" :title="title" :subtitle="subtitle" />

			<div class="mt-12">
				<div class="flex items-center justify-between mb-6">
					<h3 class="font-[var(--font-family-heading)] text-2xl text-[var(--dark-text-color)]">
						Neumáticos y Aros
					</h3>
					<p class="hidden sm:block text-sm text-gray-600">Aros del 13 al 21</p>
				</div>

				<div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
					<ServiceCard v-for="s in itemsAros" :key="s.title" :item="s" />
				</div>
			</div>
			<div class="mt-14">
				<div class="flex items-center justify-between mb-6">
					<h3 class="font-[var(--font-family-heading)] text-2xl text-[var(--dark-text-color)]">
						Mecánica General
					</h3>
					<p class="hidden sm:block text-sm text-gray-600">Dirección • Suspensión • Frenos</p>
				</div>
				<div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
					<ServiceCard v-for="s in itemsMecanica" :key="s.title" :item="s" />
				</div>
			</div>
		</div>
	</section>
</template>
