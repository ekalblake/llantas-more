<template>
	<HeroSection :image-src="site.header.logoSrc"></HeroSection>
	<ProductSection
		:eyebrow="site.products.eyebrow"
		:categories="site.products.categories"
		:subtitle="site.products.subtitle"
		:title="site.products.title"
	></ProductSection>
	<ServicesSection
		:eyebrow="site.services.eyebrow"
		:title="site.services.title"
		:subtitle="site.services.subtitle"
		:items-aros="site.services.itemsAros"
		:items-mecanica="site.services.itemsMecanica"
	/>
	<AdventagesSection
		:eyebrow="site.advantages.eyebrow"
		:items="site.advantages.items"
		:subtitle="site.advantages.subtitle"
		:title="site.advantages.title"
	></AdventagesSection>
	<BrandSection
		:eyebrow="site.brands.eyebrow"
		:items="site.brands.items"
		:subtitle="site.brands.subtitle"
		:title="site.brands.title"
	></BrandSection>
	<CatalogSection
		:categories="catalog.categories"
		:eyebrow="catalog.eyebrow"
		:title="catalog.title"
		:subtitle="catalog.subtitle"
	/>
	<ContactSection
		:info-cards="site.contact.infoCards"
		:whatsapp-href="site.contact.whatsappHref"
		:subtitle="site.contact.subtitle"
		:title="site.contact.title"
	></ContactSection>
</template>
<script lang="ts" setup>
import { site } from "../data/site";
import { catalog } from "../data/catalog-items";
import HeroSection from "../components/Sections/HeroSection.vue";
import ProductSection from "../components/Sections/ProductsSection.vue";
import ServicesSection from "../components/Sections/ServicesSection.vue";
import AdventagesSection from "../components/Sections/AdventagesSection.vue";
import ContactSection from "../components/Sections/ContactSection.vue";
import BrandSection from "../components/Sections/BrandSection.vue";
import CatalogSection from "../components/Sections/CatalogSection.vue";
</script>
<style></style>
