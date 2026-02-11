<script setup lang="ts">
import { reactive } from "vue";

const form = reactive({
	name: "",
	type: "",
	message: "",
});

const onSubmit = () => {
	let tipoTexto = "";

	switch (form.type) {
		case "auto":
			tipoTexto = "llantas para auto";
			break;
		case "camioneta":
			tipoTexto = "llantas para camioneta";
			break;
		case "camion":
			tipoTexto = "llantas para camión";
			break;
		default:
			tipoTexto = "llantas";
	}

	const message = `Hola, me gustaría cotizar ${tipoTexto}.%0A%0ANombre: ${form.name}%0AMensaje: ${form.message}`;

	const whatsappUrl = `https://wa.me/51968736364?text=${message}`;
	window.open(whatsappUrl, "_blank");
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
			<label class="block text-sm font-semibold text-[var(--dark-text-color)] mb-2">Mensaje</label>
			<textarea
				v-model="form.message"
				rows="4"
				class="w-full border border-[var(--light-border-color)] rounded-lg px-4 py-3 outline-none focus:border-[var(--primary-color)] transition-colors"
				placeholder="¿Qué llantas buscas? (medida, vehículo, etc.)"
			/>
		</div>
		<div>
			<label class="block text-sm font-semibold text-[var(--dark-text-color)] mb-2"> Tipo de llanta </label>
			<select
				v-model="form.type"
				required
				class="w-full border border-[var(--light-border-color)] rounded-lg px-4 py-3 outline-none focus:border-[var(--primary-color)] transition-colors bg-white"
			>
				<option value="" disabled>Selecciona una opción</option>
				<option value="auto">Llantas para Auto</option>
				<option value="camioneta">Llantas para Camioneta</option>
				<option value="camion">Llantas para Camión</option>
			</select>
		</div>

		<button
			type="submit"
			class="cursor-pointer w-full bg-[var(--primary-color)] text-white px-6 py-4 rounded-lg font-bold hover:bg-[var(--primary-button-hover-bg-color)] transition-all duration-300 shadow-lg"
		>
			Enviar Solicitud
		</button>
	</form>
</template>
