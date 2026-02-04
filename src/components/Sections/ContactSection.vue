<script setup lang="ts">
import ContactInfoCard from "../Cards/ContactInfoCard.vue";
import ContactForm from "../Form/ContactForm.vue";

type InfoCard = { icon: string; label: string; value: string };

defineProps<{
	title: string;
	subtitle: string;
	whatsappHref: string;
	infoCards: InfoCard[];
}>();
</script>

<template>
	<section class="bg-[var(--dark-background-color)] py-20 lg:py-28" id="contact">
		<div class="container mx-auto px-4 lg:px-8">
			<div class="grid lg:grid-cols-2 gap-12 items-start">
				<!-- Left -->
				<div>
					<h2 class="font-[var(--font-family-heading)] text-4xl sm:text-5xl text-white mb-6">
						{{ title }}
					</h2>

					<p class="text-lg text-white/80 mb-8">
						{{ subtitle }}
					</p>

					<a
						:href="whatsappHref"
						target="_blank"
						rel="noopener"
						class="inline-flex items-center gap-3 bg-[var(--primary-color)] text-white px-7 py-4 rounded-lg font-bold hover:bg-[var(--primary-button-hover-bg-color)] transition-all duration-300 shadow-lg hover:shadow-xl"
					>
						<i class="fab fa-whatsapp text-xl"></i>
						Cotizar por WhatsApp
					</a>

					<div class="mt-10 grid sm:grid-cols-3 gap-4">
						<ContactInfoCard v-for="c in infoCards" :key="c.label" :card="c" />
					</div>
				</div>

				<!-- Right -->
				<div class="bg-white rounded-2xl shadow-2xl p-8 lg:p-10">
					<ContactForm />
				</div>
			</div>
		</div>
	</section>
</template>
