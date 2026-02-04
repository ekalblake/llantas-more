<script setup lang="ts">
import { reactive } from "vue";

const form = reactive({
	name: "",
	phone: "",
	message: "",
});

const onSubmit = () => {
	// Aquí puedes: enviar a API, EmailJS, Formspree, etc.
	// Por ahora solo ejemplo:
	console.log("submit", { ...form });
};
</script>

<template>
	<form @submit.prevent="onSubmit" class="space-y-5">
		<div>
			<label class="block text-sm font-semibold text-[var(--dark-text-color)] mb-2">Nombre</label>
			<input
				v-model="form.name"
				type="text"
				required
				class="w-full border border-[var(--light-border-color)] rounded-lg px-4 py-3 outline-none focus:border-[var(--primary-color)] transition-colors"
				placeholder="Tu nombre"
			/>
		</div>

		<div>
			<label class="block text-sm font-semibold text-[var(--dark-text-color)] mb-2">Teléfono</label>
			<input
				v-model="form.phone"
				type="tel"
				required
				class="w-full border border-[var(--light-border-color)] rounded-lg px-4 py-3 outline-none focus:border-[var(--primary-color)] transition-colors"
				placeholder="Tu número"
			/>
		</div>

		<div>
			<label class="block text-sm font-semibold text-[var(--dark-text-color)] mb-2">Mensaje</label>
			<textarea
				v-model="form.message"
				rows="4"
				class="w-full border border-[var(--light-border-color)] rounded-lg px-4 py-3 outline-none focus:border-[var(--primary-color)] transition-colors"
				placeholder="¿Qué llantas buscas? (medida, vehículo, etc.)"
			/>
		</div>

		<button
			type="submit"
			class="w-full bg-[var(--primary-color)] text-white px-6 py-4 rounded-lg font-bold hover:bg-[var(--primary-button-hover-bg-color)] transition-all duration-300 shadow-lg"
		>
			Enviar Solicitud
		</button>
	</form>
</template>
