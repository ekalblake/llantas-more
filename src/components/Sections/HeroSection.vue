<script setup lang="ts"></script>

<template>
	<!-- Pega aquí tu hero tal cual del HTML, solo conviértelo a template -->
	<section class="bg-white">
		<div class="container mx-auto px-4 lg:px-8 py-16 lg:py-24">
			<!-- EJEMPLO: reemplaza por tu layout real -->
			<div class="grid lg:grid-cols-2 gap-12 items-center">
				<div>
					<h1
						class="font-[var(--font-family-heading)] text-4xl sm:text-5xl lg:text-6xl text-[var(--dark-text-color)] mb-6"
					>
						LLANTAS DE CALIDAD PARA TU VEHÍCULO
					</h1>
					<p class="text-lg text-gray-600 mb-8">
						Las mejores marcas, instalación profesional y atención rápida.
					</p>

					<div class="flex flex-col sm:flex-row gap-4">
						<a
							href="/products"
							class="bg-[var(--primary-color)] text-white px-8 py-4 rounded-lg font-bold hover:bg-[var(--primary-button-hover-bg-color)] transition-all duration-300 text-center"
						>
							Ver Productos
						</a>
						<a
							href="/contact"
							class="bg-[var(--dark-background-color)] text-white px-8 py-4 rounded-lg font-bold hover:bg-black transition-all duration-300 text-center"
						>
							Cotizar
						</a>
					</div>
				</div>

				<div class="rounded-2xl overflow-hidden shadow-xl">
					<!-- Cambia por tu imagen -->
					<img
						src="https://imagedelivery.net/xaKlCos5cTg_1RWzIu_h-A/8e88e51b-a733-4ae1-d48e-a6a1a2823b00/public"
						alt="Hero"
						class="w-full h-full object-cover"
					/>
				</div>
			</div>
		</div>
	</section>
</template>
