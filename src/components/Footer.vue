<script setup lang="ts"></script>

<template>
	<footer id="global-footer" class="code-section bg-[var(--dark-background-color)] text-white pt-16 pb-8">
		<div class="container mx-auto px-4 lg:px-8">
			<!-- Main Footer Content -->
			<div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
				<!-- Company Info -->
				<div class="lg:col-span-1">
					<a href="/" class="inline-block mb-6">
						<img src="../assets/logo.png" alt="LLantax Logo" class="h-20 w-auto" data-logo="" />
					</a>
					<p class="text-[var(--gray-text-color)] mb-6 leading-relaxed">
						Expertos en llantas y servicios automotrices con más de 10 años de experiencia. Tu seguridad es
						nuestra prioridad.
					</p>
				</div>

				<div>
					<h4 class="font-[var(--font-family-heading)] text-xl text-white mb-6">NAVEGACIÓN</h4>
					<ul class="space-y-3">
						<li>
							<a
								href="#"
								class="text-[var(--gray-text-color)] hover:text-[var(--primary-color)] transition-colors duration-300 flex items-center group"
							>
								<i
									class="fas fa-chevron-right text-xs mr-2 group-hover:translate-x-1 transition-transform duration-300"
									aria-hidden="true"
								></i>
								Inicio
							</a>
						</li>
						<li>
							<a
								href="#products"
								class="text-[var(--gray-text-color)] hover:text-[var(--primary-color)] transition-colors duration-300 flex items-center group"
							>
								<i
									class="fas fa-chevron-right text-xs mr-2 group-hover:translate-x-1 transition-transform duration-300"
									aria-hidden="true"
								></i>
								Productos
							</a>
						</li>
						<li>
							<a
								href="#services"
								class="text-[var(--gray-text-color)] hover:text-[var(--primary-color)] transition-colors duration-300 flex items-center group"
							>
								<i
									class="fas fa-chevron-right text-xs mr-2 group-hover:translate-x-1 transition-transform duration-300"
									aria-hidden="true"
								></i>
								Servicios
							</a>
						</li>
						<li>
							<a
								href="#contact"
								class="text-[var(--gray-text-color)] hover:text-[var(--primary-color)] transition-colors duration-300 flex items-center group"
							>
								<i
									class="fas fa-chevron-right text-xs mr-2 group-hover:translate-x-1 transition-transform duration-300"
									aria-hidden="true"
								></i>
								Contacto
							</a>
						</li>
					</ul>
				</div>
				<div>
					<h4 class="font-[var(--font-family-heading)] text-xl text-white mb-6">SERVICIOS</h4>
					<ul class="space-y-3">
						<li class="text-[var(--gray-text-color)] flex items-start">
							<i class="fas fa-check text-[var(--primary-color)] mr-2 mt-1" aria-hidden="true"></i>
							Venta de Llantas
						</li>
						<li class="text-[var(--gray-text-color)] flex items-start">
							<i class="fas fa-check text-[var(--primary-color)] mr-2 mt-1" aria-hidden="true"></i>
							Balanceo Computarizado
						</li>
						<li class="text-[var(--gray-text-color)] flex items-start">
							<i class="fas fa-check text-[var(--primary-color)] mr-2 mt-1" aria-hidden="true"></i>
							Alineación Profesional
						</li>
						<li class="text-[var(--gray-text-color)] flex items-start">
							<i class="fas fa-check text-[var(--primary-color)] mr-2 mt-1" aria-hidden="true"></i>
							Montaje Especializado
						</li>
						<li class="text-[var(--gray-text-color)] flex items-start">
							<i class="fas fa-check text-[var(--primary-color)] mr-2 mt-1" aria-hidden="true"></i>
							Asesoría Técnica
						</li>
					</ul>
				</div>
				<div>
					<h4 class="font-[var(--font-family-heading)] text-xl text-white mb-6">CONTACTO</h4>
					<ul class="space-y-4">
						<li class="flex items-start text-[var(--gray-text-color)]">
							<div class="text-[var(--primary-color)] mr-3">
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
										d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
									/>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
									/>
								</svg>
							</div>
							<span>
								Av Defensores del Morro (Huaylas) <br />
								Nro 2615 - Urb. Santa Leonor<br />
								Chorrillos, Lima, 15064
							</span>
						</li>
						<li class="flex items-start text-[var(--gray-text-color)]">
							<div class="text-[var(--primary-color)] mr-3">
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
										d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
									/>
								</svg>
							</div>
							<span>+51 968-736-364</span>
						</li>
						<li class="flex items-start text-[var(--gray-text-color)]">
							<div class="text-[var(--primary-color)] mr-3">
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
							<span>Lun - Vie: 9:00 - 18:00</span>
						</li>
					</ul>
				</div>
			</div>

			<div class="pt-8 border-t border-white/10">
				<div class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
					<p class="text-[var(--gray-text-color)] text-sm text-center md:text-left">
						© 2026 Llantas More. Todos los derechos reservados.
					</p>
					<!-- <div class="flex space-x-6 text-sm">
						<a
							href="#"
							class="text-[var(--gray-text-color)] hover:text-[var(--primary-color)] transition-colors duration-300"
						>
							Política de Privacidad
						</a>
						<a
							href="#"
							class="text-[var(--gray-text-color)] hover:text-[var(--primary-color)] transition-colors duration-300"
						>
							Términos y Condiciones
						</a>
					</div> -->
				</div>
			</div>
		</div>
	</footer>
</template>
