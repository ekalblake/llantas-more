<script setup lang="ts"></script>

<template>
	<footer class="bg-black text-white/80">
		<div class="container mx-auto px-4 lg:px-8 py-10">
			<div class="flex flex-col md:flex-row items-center justify-between gap-6">
				<div class="text-sm">
					© {{ new Date().getFullYear() }} <span class="text-white font-semibold">LLantax</span>. Todos los
					derechos reservados.
				</div>

				<div class="flex items-center gap-5 text-sm">
					<a href="/about-us" class="hover:text-[var(--primary-color)] transition-colors">Nosotros</a>
					<a href="/products" class="hover:text-[var(--primary-color)] transition-colors">Productos</a>
					<a href="/services" class="hover:text-[var(--primary-color)] transition-colors">Servicios</a>
					<a href="/contact" class="hover:text-[var(--primary-color)] transition-colors">Contacto</a>
				</div>
			</div>
		</div>
	</footer>
</template>
