<script setup lang="ts">
defineProps<{
	imageSrc?: string;
}>();
</script>

<template>
	<section class="bg-[url('./assets/hero-bg.avif')] bg-cover bg-center bg-no-repeat">
		<div class="container mx-auto px-4 lg:px-8 py-16 lg:py-24 border-none">
			<div class="grid lg:grid-cols-2 gap-12 items-center">
				<div class="bg-black/40 backdrop-blur-md p-8 lg:p-10 rounded-2xl shadow-xl">
					<h1 class="font-[var(--font-family-heading)] text-4xl sm:text-5xl lg:text-6xl text-white mb-6">
						EXPERTOS EN LLANTAS QUE TE LLEVAN
						<span class="text-[var(--primary-color)] font-semibold"> MÁS LEJOS </span>
					</h1>
					<p class="text-lg text-gray-200 mb-8">
						Las mejores marcas, instalación profesional y atención rápida.
					</p>
					<div class="flex flex-col sm:flex-row gap-4 mb-8">
						<a
							href="#contact"
							class="inline-flex items-center justify-center gap-2 bg-[var(--dark-background-color)] text-white px-8 py-4 rounded-lg font-bold hover:bg-black transition-all duration-300 text-center"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								class="w-5 h-5"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008Zm0 2.25h.008v.008H8.25V13.5Zm0 2.25h.008v.008H8.25v-.008Zm0 2.25h.008v.008H8.25V18Zm2.498-6.75h.007v.008h-.007v-.008Zm0 2.25h.007v.008h-.007V13.5Zm0 2.25h.007v.008h-.007v-.008Zm0 2.25h.007v.008h-.007V18Zm2.504-6.75h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V13.5Zm0 2.25h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V18Zm2.498-6.75h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V13.5ZM8.25 6h7.5v2.25h-7.5V6ZM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 0 0 2.25 2.25h10.5a2.25 2.25 0 0 0 2.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0 0 12 2.25Z"
								/>
							</svg>
							Cotizar ahora
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								class="w-5 h-5"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
								/>
							</svg>
						</a>
						<a
							href="#products"
							class="inline-flex items-center justify-center gap-2 bg-[var(--primary-color)] text-white px-8 py-4 rounded-lg font-bold hover:bg-[var(--primary-button-hover-bg-color)] transition-all duration-300 text-center"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								class="w-5 h-5"
							>
								<path stroke-linecap="round" stroke-linejoin="round" d="M3 6h18M3 12h18M3 18h18" />
							</svg>

							Ver Productos
						</a>
					</div>
					<div class="flex flex-col sm:flex-row gap-4">
						<p class="text-sm text-[var(--gray-text-color)] flex items-center gap-2">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								class="size-6 text-[var(--accent4-color)]"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
								/>
							</svg>

							<i class="fas fa-check-circle text-[var(--accent4-color)]" aria-hidden="true"></i>
							Cotización gratuita sin compromiso • Asesoría experta incluida
						</p>
					</div>
					<div
						class="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-12 pt-12 border-t border-[var(--dark-border-color)]"
					>
						<div class="text-center">
							<div class="flex justify-center text-[var(--primary-color)] text-3xl mb-2">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="1.5"
									stroke="currentColor"
									class="w-8 h-8"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M12 9v3.75m0-10.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.25-8.25-3.286Zm0 13.036h.008v.008H12v-.008Z"
									/>
								</svg>
							</div>

							<p class="text-white font-semibold mb-1">Garantía</p>
							<p class="text-[var(--gray-text-color)] text-sm">100% Confiable</p>
						</div>
						<div class="text-center">
							<div class="flex justify-center text-[var(--primary-color)] text-3xl mb-2">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="1.5"
									stroke="currentColor"
									class="size-6"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
									/>
								</svg>
							</div>

							<p class="text-white font-semibold mb-1">Servicio Rápido</p>
							<p class="text-[var(--gray-text-color)] text-sm">Atención Inmediata</p>
						</div>
						<div class="text-center">
							<div class="flex justify-center text-[var(--primary-color)] text-3xl mb-2">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="1.5"
									stroke="currentColor"
									class="size-6"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z"
									/>
									<path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6Z" />
								</svg>
							</div>
							<p class="text-white font-semibold mb-1">Mejores Precios</p>
							<p class="text-[var(--gray-text-color)] text-sm">Precios Justos</p>
						</div>
						<div class="text-center">
							<div class="flex justify-center text-[var(--primary-color)] text-3xl mb-2">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="1.5"
									stroke="currentColor"
									class="size-6"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
									/>
								</svg>
							</div>
							<p class="text-white font-semibold mb-1">Expertos</p>
							<p class="text-[var(--gray-text-color)] text-sm">Asesoría Técnica</p>
						</div>
					</div>
				</div>
			</div>
		</div>
		<svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
			<path
				d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
				fill="white"
			></path>
		</svg>
	</section>
</template>
