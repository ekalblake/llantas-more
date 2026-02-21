to
<script setup lang="ts">
import { useToast } from "../../composables/useToast";

const toast = useToast();
</script>

<template>
	<div class="fixed bottom-6 right-6 z-[999] space-y-3">
		<div
			v-for="t in toast.toasts"
			:key="t.id"
			class="bg-white border border-[var(--light-border-color)] shadow-xl rounded-lg px-5 py-3 text-[var(--dark-text-color)] font-semibold animate-fade-in"
		>
			{{ t.message }}
		</div>
	</div>
</template>

<style>
@keyframes fade-in {
	from {
		opacity: 0;
		transform: translateY(10px);
	}
	to {
		opacity: 1;
		transform: translateY(0);
	}
}
.animate-fade-in {
	animation: fade-in 0.25s ease;
}
</style>
