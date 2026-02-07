<script setup lang="ts">
import { reactive, ref } from "vue";

type NavLink = { label: string; href: string };
type Cta = { label: string; href: string };

defineProps<{
	logoSrc?: string;
}>();

const links: NavLink[] = reactive([
	{ label: "Nosotros", href: "/about-us" },
	{ label: "Productos", href: "/products" },
	{ label: "Servicios", href: "/services" },
]);

const cta: Cta = reactive({ label: "Cotiza Gratis", href: "/contact" });

const isOpen = ref<boolean>(false);
</script>

<template>
	<header class="bg-[var(--dark-background-color)] sticky top-0 z-50 shadow-lg">
		<nav class="container mx-auto px-4 lg:px-8">
			<div class="flex items-center justify-between">
				<a href="/" class="flex-shrink-0">
					<img src="../assets/logo.png" alt="Logo" class="h-28 py-2 w-auto" />
				</a>

				<div class="hidden lg:flex items-center space-x-8">
					<a
						v-for="l in links"
						:key="l.href"
						:href="l.href"
						class="text-[color:var(--light-text-color)] hover:text-[color:var(--primary-color)] transition-colors duration-300 font-medium"
					>
						{{ l.label }}
					</a>

					<a
						:href="cta.href"
						class="bg-[var(--primary-color)] text-[var(--primary-button-text-color)] px-6 py-3 rounded-lg hover:bg-[var(--primary-button-hover-bg-color)] transition-all duration-300 font-bold shadow-lg hover:shadow-xl transform hover:scale-105"
					>
						{{ cta.label }}
					</a>
				</div>

				<button class="lg:hidden text-[var(--light-text-color)] p-2 cursor-pointer" @click="isOpen = !isOpen">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="size-6"
					>
						<path stroke-linecap="round" stroke-linejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
					</svg>
				</button>
			</div>

			<div v-show="isOpen" class="lg:hidden pb-4 pt-2">
				<div class="flex flex-col space-y-3">
					<a
						v-for="l in links"
						:key="l.href"
						:href="l.href"
						class="text-[var(--light-text-color)] hover:text-[var(--primary-color)] transition-colors duration-300 font-medium py-2 border-b border-[var(--dark-border-color)]"
					>
						{{ l.label }}
					</a>

					<a
						:href="cta.href"
						class="bg-[var(--primary-color)] text-[var(--primary-button-text-color)] px-6 py-3 rounded-lg hover:bg-[var(--primary-button-hover-bg-color)] transition-all duration-300 font-bold text-center mt-2"
					>
						{{ cta.label }}
					</a>
				</div>
			</div>
		</nav>
	</header>
</template>
<style></style>
