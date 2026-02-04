<template>
	<HeroSection></HeroSection>
	<ProductSection
		:eyebrow="site.products.eyebrow"
		:categories="site.products.categories"
		:subtitle="site.products.subtitle"
		:title="site.products.title"
	></ProductSection>
	<ServicesSection
		:eyebrow="site.services.eyebrow"
		:items="site.services.items"
		:subtitle="site.services.subtitle"
		:title="site.services.title"
	></ServicesSection>
	<AdventagesSection
		:eyebrow="site.advantages.eyebrow"
		:items="site.advantages.items"
		:subtitle="site.advantages.subtitle"
		:title="site.advantages.title"
	></AdventagesSection>
	<ContactSection
		:info-cards="site.contact.infoCards"
		:whatsapp-href="site.contact.whatsappHref"
		:subtitle="site.contact.subtitle"
		:title="site.contact.title"
	></ContactSection>
</template>
<script lang="ts" setup>
import { site } from "../data/site";
import HeroSection from "../components/Sections/HeroSection.vue";
import ProductSection from "../components/Sections/ProductsSection.vue";
import ServicesSection from "../components/Sections/ServicesSection.vue";
import AdventagesSection from "../components/Sections/AdventagesSection.vue";
import ContactSection from "../components/Sections/ContactSection.vue";
</script>
<style></style>
