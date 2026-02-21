<script setup lang="ts">
import { useCart } from "../../composables/useCart";
import ContactInfoCard from "../Cards/ContactInfoCard.vue";
import ContactForm from "../Form/ContactForm.vue";

type InfoCard = { icon: string; label: string; value: string };

defineProps<{
	title: string;
	subtitle: string;
	whatsappHref: string;
	infoCards: InfoCard[];
}>();

const cart = useCart();
</script>

<template>
	<section class="bg-[var(--dark-background-color)] py-10 lg:pt-15 lg:py-5" id="contact">
		<div class="container mx-auto px-4 lg:px-8">
			<div class="my-5 bg-white rounded-2xl shadow-lg border border-[var(--light-border-color)] p-6">
				<div class="flex items-center justify-between gap-4">
					<h3 class="font-[var(--font-family-heading)] text-xl text-[var(--dark-text-color)]">
						Tu selección ({{ cart.count }})
					</h3>

					<button
						type="button"
						class="text-sm font-semibold text-[var(--primary-color)] hover:underline"
						@click="cart.clear()"
						v-if="cart.lines.length"
					>
						Limpiar
					</button>
				</div>

				<p v-if="!cart.lines.length" class="text-gray-600 mt-2">Aún no agregas productos.</p>

				<ul v-else class="mt-4 space-y-3">
					<li
						v-for="(line, i) in cart.lines"
						:key="`${line.item.id}-${i}`"
						class="flex items-center justify-between gap-4 border-b border-[var(--light-border-color)] pb-3"
					>
						<div class="min-w-0">
							<p class="font-semibold text-[var(--dark-text-color)] truncate">
								{{ line.item.name }}
							</p>
							<p v-if="line.item.brand" class="text-sm text-gray-600">
								{{ line.item.brand }}
							</p>
						</div>

						<div class="flex items-center gap-2 shrink-0">
							<button
								class="w-9 h-9 rounded-lg border border-[var(--light-border-color)] hover:border-[var(--primary-color)]"
								@click="cart.dec(line.item.id)"
								type="button"
							>
								-
							</button>
							<span class="w-6 text-center font-bold">{{ line.qty }}</span>
							<button
								class="w-9 h-9 rounded-lg border border-[var(--light-border-color)] hover:border-[var(--primary-color)]"
								@click="cart.add(line.item)"
								type="button"
							>
								+
							</button>
							<button
								class="ml-2 text-sm font-semibold text-gray-500 hover:text-[var(--primary-color)]"
								@click="cart.remove(line.item.id)"
								type="button"
							>
								Quitar
							</button>
						</div>
					</li>
				</ul>
			</div>
			<div class="grid lg:grid-cols-2 gap-12 items-start">
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

				<div class="bg-white rounded-2xl shadow-2xl p-8 lg:p-10">
					<ContactForm />
				</div>
			</div>
		</div>
	</section>
</template>
