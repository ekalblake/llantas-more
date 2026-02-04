<script setup lang="ts">
import SectionHeader from "../SectionHeader.vue";
import ServiceCard from "../Cards/ServiceCard.vue";

type ServiceItem = { icon: string; title: string; desc: string };

defineProps<{
	eyebrow: string;
	title: string;
	subtitle: string;
	items: ServiceItem[];
}>();
</script>

<template>
	<section class="bg-[var(--light-background-color)] py-20 lg:py-28" id="services">
		<div class="container mx-auto px-4 lg:px-8">
			<SectionHeader icon="fa-tools" :eyebrow="eyebrow" :title="title" :subtitle="subtitle" />

			<div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
				<ServiceCard v-for="s in items" :key="s.title" :item="s" />
			</div>
		</div>
	</section>
</template>
