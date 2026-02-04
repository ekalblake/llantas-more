<script setup lang="ts">
import SectionHeader from "../ui/SectionHeader.vue";
import CategoryCard from "../ui/CategoryCard.vue";

type Category = {
	badge?: string;
	image: string;
	title: string;
	href: string;
	bullets: string[];
};

defineProps<{
	eyebrow: string;
	title: string;
	subtitle: string;
	categories: Category[];
}>();
</script>

<template>
	<section class="bg-white py-20 lg:py-28" id="products">
		<div class="container mx-auto px-4 lg:px-8">
			<SectionHeader icon="fa-tire" :eyebrow="eyebrow" :title="title" :subtitle="subtitle" />

			<div class="grid md:grid-cols-3 gap-8 mb-16">
				<CategoryCard v-for="c in categories" :key="c.title" :category="c" />
			</div>
		</div>
	</section>
</template>
