import { reactive } from "vue";

type Toast = {
	id: number;
	message: string;
};

const state = reactive<{
	toasts: Toast[];
}>({
	toasts: [],
});

let id = 0;

function show(message: string, duration = 2500) {
	const toast = { id: id++, message };
	state.toasts.push(toast);

	setTimeout(() => {
		const idx = state.toasts.findIndex((t) => t.id === toast.id);
		if (idx !== -1) state.toasts.splice(idx, 1);
	}, duration);
}

export function useToast() {
	return {
		toasts: state.toasts,
		show,
	};
}
